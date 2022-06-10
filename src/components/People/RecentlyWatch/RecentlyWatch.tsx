import React from 'react';
import classes from './RecentlyWatch.module.css';

const RecentlyWatch: React.FC = () => {
  const elementsMapping = () => {
    if (!sessionStorage.getItem('recently_used')) return [];
    const elements = sessionStorage.getItem('recently_used')?.split(',');

    return elements?.map((el, index) => {
      return (
        <span key={index} className={classes.recently__element}>
          {el}
        </span>
      );
    });
  };

  return <div className={classes.recently__wrapper}>{elementsMapping()}</div>;
};

export default RecentlyWatch;
