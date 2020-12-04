import "./Search.scss";

const Search = ({ search, handleSearch, handleSearchSubmit }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search.."
        name="search"
        autoComplete="off"
        value={search}
        onChange={handleSearch}
      />
      <button onKeyPress={handleSearchSubmit} onClick={handleSearchSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Search;
