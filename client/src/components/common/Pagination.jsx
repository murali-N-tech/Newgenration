import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Determine the number of pages to show around the current page
  const pageNumbersToShow = 5;
  const halfPagesToShow = Math.floor(pageNumbersToShow / 2);
  let startPage = Math.max(1, currentPage - halfPagesToShow);
  let endPage = Math.min(totalPages, currentPage + halfPagesToShow);

  // Adjust start and end pages if they're too close to the beginning or end
  if (totalPages <= pageNumbersToShow) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= halfPagesToShow) {
    endPage = pageNumbersToShow;
  } else if (currentPage + halfPagesToShow >= totalPages) {
    startPage = totalPages - pageNumbersToShow + 1;
  }

  // Create an array of page numbers to render
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none"
      >
        Previous
      </button>

      {/* Render page number buttons */}
      {pages.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`
            px-4 py-2 rounded-lg shadow-sm transition-all duration-200
            ${
              number === currentPage
                ? "bg-blue-700 text-white transform scale-110 shadow-lg"
                : "bg-white text-blue-700 hover:bg-blue-100"
            }
          `}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
