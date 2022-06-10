import { Dispatch, SetStateAction } from 'react';

export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  url: string;
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IContext {
  people: IPerson[];
  error: string;
  count: number;
  page: number;
  currentPerson: IPerson;
  setPeople?: React.Dispatch<React.SetStateAction<IPerson[]>>;
  setError?: React.Dispatch<React.SetStateAction<string>>;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPerson?: React.Dispatch<React.SetStateAction<IPerson>>;
}
