import Loader from "../Loader/Loader";
import "./Table.scss";

const Table = ({
  items,
  handleFieldClick,
  handleItemClick,
  sortOrder,
  field,
  loading,
}) => {
  return loading ? (
    <Loader />
  ) : (
    <div className="table">
      <div className="table-header">
        <div className="table-header__cell" id="id" onClick={handleFieldClick}>
          id
        </div>
        <div
          className="table-header__cell"
          id="firstName"
          onClick={handleFieldClick}
        >
          firstName
        </div>
        <div
          className="table-header__cell"
          id="lastName"
          onClick={handleFieldClick}
        >
          lastName
        </div>
        <div
          className="table-header__cell"
          id="email"
          onClick={handleFieldClick}
        >
          email
        </div>
        <div
          className="table-header__cell"
          id="phone"
          onClick={handleFieldClick}
        >
          phone
        </div>
        <div>
          {sortOrder === "desc" ? "▼" : "▲"}sorted by {field}
        </div>
      </div>
      <div className="table-body">
        {items &&
          items.map((item) => (
            <div
              className="table-body__row"
              key={item.id + item.phone}
              onClick={() => handleItemClick(item)}
            >
              <div className="table-body__row-cell">{item.id}</div>
              <div className="table-body__row-cell">{item.firstName}</div>
              <div className="table-body__row-cell">{item.lastName}</div>
              <div className="table-body__row-cell">{item.email}</div>
              <div className="table-body__row-cell">{item.phone}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
