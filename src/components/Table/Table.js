import "./Table.scss";

const Table = ({ items, handleFieldClick }) => {

  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header__cell" onClick={handleFieldClick}>
          id
        </div>
        <div className="table-header__cell" onClick={handleFieldClick}>
          firstName
        </div>
        <div className="table-header__cell" onClick={handleFieldClick}>
          lastName
        </div>
        <div className="table-header__cell" onClick={handleFieldClick}>
          email
        </div>
        <div className="table-header__cell" onClick={handleFieldClick}>
          phone
        </div>
      </div>
      <div className="table-body">
        {items &&
          items.map((item) => (
            <div className="table-body__row" key={item.id + item.firstName}>
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
