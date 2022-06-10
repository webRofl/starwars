import { IPerson } from './../providers/types/people';
import axios from 'axios';

type SetCount = (count: number) => void;

type SetPeople = (people: IPerson[]) => void;

type SetError = (error: string) => void;

type Response = {
  status: number;
  data: {
    count: number;
    results: IPerson[];
  };
};

export const uploadPeople = async (
  page: number,
  setCount: SetCount,
  setPeople: SetPeople,
  setError: SetError
) => {
  try {
    const data: Response = await axios.get(
      'https://swapi.dev/api/people?page=' + page
    );
    if (data.status === 200) {
      setCount(data.data.count);
      setPeople(data.data.results);
    }
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};
