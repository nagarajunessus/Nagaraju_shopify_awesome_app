import React from 'react'
import { Button } from '@shopify/polaris';
function TablePagination({ currentPage, totalPages, handlePageChange }) {
  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p>Page {currentPage} of {totalPages}</p>
            <Button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
                <Button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    disabled={currentPage === i + 1}
                >
                    {i + 1}
                </Button>
            ))}
            <Button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                Next
            </Button>
        </div>
  )
}

export default TablePagination