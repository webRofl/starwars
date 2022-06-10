import React from 'react';
import usePeople from '../../../hooks/usePeople';
import classes from './ErrorComponent.module.css';

const ErrorComponent: React.FC = () => {
  const { error } = usePeople();

  return (
    <div className={classes.error__wrapper}>
      <span className={classes.error_error}>{error}</span>
    </div>
  );
};

export default ErrorComponent;
