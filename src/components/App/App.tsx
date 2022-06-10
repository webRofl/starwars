import React from 'react';
import { Route, Routes } from 'react-router-dom';
import usePeople from '../../hooks/usePeople';
import ErrorComponent from '../common/ErrorComponent/ErrorComponent';
import NotFound from '../NotFound/NotFound';
import People from '../People/People';
import Person from '../Person/Person';

const App: React.FC = () => {
  const { error } = usePeople();

  if (error) return <ErrorComponent />;

  return (
    <Routes>
      <Route path={'/people'} element={<People />} />
      <Route path={'/people/:person'} element={<Person />} />
      <Route path={'/*'} element={<NotFound />} />
    </Routes>
  );
};

export default App;
