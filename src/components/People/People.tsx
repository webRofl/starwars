import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePeople from '../../hooks/usePeople';
import { IPerson } from '../../providers/types/people';
import { replaceSpaces } from '../../utils/replaceSpaces';
import { uploadPeople } from '../../utils/uploadPeople';
import Pagination from '../common/Pagination/Pagination';
import Preloader from '../common/Preloader/Preloader';
import classes from './People.module.css';
import RecentlyWatch from './RecentlyWatch/RecentlyWatch';

const People: React.FC = () => {
  const { people, setPeople, setError, setCount, setPage, setCurrentPerson } =
    usePeople();

  const navigate = useNavigate();

  useEffect(() => {
    if (setCount && setPeople && setError)
      uploadPeople(1, setCount, setPeople, setError);
  }, []);

  const handleClickPagination = (event: React.MouseEvent) => {
    if (
      setPage &&
      setCount &&
      setPeople &&
      setError &&
      event.currentTarget.textContent
    ) {
      uploadPeople(
        parseInt(event.currentTarget.textContent),
        setCount,
        setPeople,
        setError
      );
      setPage(parseInt(event.currentTarget.textContent));
    }
  };

  const handleClickPerson = (person: IPerson) => {
    navigate('/people/' + replaceSpaces(person.name));
    if (setCurrentPerson) setCurrentPerson(person);
    const recentlyUsed = sessionStorage.getItem('recently_used');
    if (!recentlyUsed) {
      sessionStorage.setItem('recently_used', person.name);
    } else {
      const recentlyUseArr = recentlyUsed.split(',');
      if (recentlyUseArr.length > 15) {
        const recently = recentlyUseArr.filter((_el, index) => index < 14);
        recently.unshift(person.name);
        sessionStorage.setItem('recently_used', recently.toString());
        return;
      }
      recentlyUseArr.unshift(person.name);
      sessionStorage.setItem('recently_used', recentlyUseArr.toString());
    }
  };

  const peopleMapping = (people: IPerson[]) => {
    if (people) {
      return people.map((person, index) => {
        return (
          <li key={index}>
            <span
              onClick={() => handleClickPerson(person)}
              className={classes.people__person}
            >
              {person.name}
            </span>
          </li>
        );
      });
    }
  };

  if (people?.length === 0) {
    return <Preloader />;
  }

  return (
    <div className={classes.people__wrapper}>
      <div>
        <RecentlyWatch />
      </div>
      <div className={classes.people__main}>
        <ul className={classes.people__list}>{peopleMapping(people)}</ul>
        <Pagination handleClick={handleClickPagination} />
      </div>
    </div>
  );
};

export default People;
