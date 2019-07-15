import React from 'react';
import './Pagination.css';

const Pagination = props => {
  const { handlePaginationClick, page, totalPage } = props;
  return (
    <div className='Pagination'>
      <button
        // first method of passing parameter to function without being called onload
        onClick={() => handlePaginationClick('prev')}
        className='Pagination-button'
        disabled={page <= 1}
      >
        &larr;
      </button>
      <span className='Pagination-info'>
        page <b>{page}</b> of <b>{totalPage}</b>
      </span>
      <button
        // second method of passing parameter to function without being called onload
        onClick={handlePaginationClick.bind(this, 'next')}
        className='Pagination-button'
        disabled={page >= totalPage}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
