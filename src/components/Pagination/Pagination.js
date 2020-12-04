import "./Pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, handlePagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <button onClick={() => handlePagination(num)} className="page-link">
              {num}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
