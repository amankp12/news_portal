import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ currentPage, setPage }) => {
  return (
    <Pagination className="justify-content-center mt-4">
      <Pagination.Prev onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1} />
      <Pagination.Item active>{currentPage}</Pagination.Item>
      <Pagination.Next onClick={() => setPage(currentPage + 1)} />
    </Pagination>
  );
};

export default PaginationComponent;
