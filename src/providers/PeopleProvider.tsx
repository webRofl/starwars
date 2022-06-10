import { createContext, useMemo, useState } from 'react';
import { IContext, IPerson } from './types/people';

const initialValue = {
  people: [],
  error: '',
  count: 0,
  page: 1,
  currentPerson: {
    birth_year: 'Loading...',
    eye_color: 'Loading...',
    gender: 'Loading...',
    hair_color: 'Loading...',
    height: 'Loading...',
    mass: 'Loading...',
    name: 'Loading...',
    skin_color: 'Loading...',
    url: 'Loading...',
  },
};

export const PeopleContext = createContext<IContext>(initialValue);

type PeopleProviderProps = {
  children: JSX.Element;
};

export const PeopleProvider: React.FC<PeopleProviderProps> = ({ children }) => {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [error, setError] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [currentPerson, setCurrentPerson] = useState<IPerson>({
    birth_year: 'Loading...',
    eye_color: 'Loading...',
    gender: 'Loading...',
    hair_color: 'Loading...',
    height: 'Loading...',
    mass: 'Loading...',
    name: 'Loading...',
    skin_color: 'Loading...',
    url: 'Loading...',
  });

  const value = useMemo(
    () => ({
      people,
      setPeople,
      error,
      setError,
      count,
      setCount,
      page,
      setPage,
      currentPerson,
      setCurrentPerson,
    }),
    [people, error, currentPerson]
  );

  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
};
