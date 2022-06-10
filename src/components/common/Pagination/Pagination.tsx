import React from 'react';
import usePeople from '../../../hooks/usePeople';
import classes from './Pagination.module.css';

type PaginationProps = {
  handleClick: (event: React.MouseEvent) => void;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const { count, page } = usePeople();

  const pageMapping = (count: number) => {
    const spanArr: JSX.Element[] = [];

    for (let i = 0; i < count; i += 10) {
      spanArr.push(
        <span
          key={i / 10}
          className={
            page - 1 === i / 10
              ? `${classes.pagination__digitPagination} ${classes.pagination__digitPagination_active}`
              : classes.pagination__digitPagination
          }
          onClick={props.handleClick}
        >
          {(i + 10) / 10}
        </span>
      );
    }
    return spanArr;
  };

  return (
    <div className={classes.pagination__wrapper}>{pageMapping(count)}</div>
  );
};

export default Pagination;
