import React from 'react';
import usePeople from '../../hooks/usePeople';
import classes from './Person.module.css';
import { IPerson } from '../../providers/types/people';
import { useNavigate } from 'react-router-dom';

const Person: React.FC = () => {
  const { currentPerson } = usePeople();

  const navigate = useNavigate();

  const mappingInfo = (currentPerson: IPerson) => {
    const infoEntries = Object.entries(currentPerson);
    return infoEntries.map((entry, index) => {
      if (
        entry[1].includes('https') ||
        Array.isArray(entry[1]) ||
        entry[0].includes('created') ||
        entry[0].includes('edited')
      )
        return;

      return (
        <div key={index} className={classes.person__infoBlock}>
          <span>{entry[0]}</span>
          <span className={classes.person__value}>{entry[1]}</span>
        </div>
      );
    });
  };

  const handleClickBack = () => {
    navigate('/people');
  };

  return (
    <div className={classes.person__wrapper}>
      <div className={classes.person__infosBlock}>
        {mappingInfo(currentPerson)}
      </div>
      <button onClick={handleClickBack} className={classes.person__backBtn}>
        Back
      </button>
    </div>
  );
};

export default Person;
