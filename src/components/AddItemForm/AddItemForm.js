import { useState } from "react";
import "./AddItemForm.scss";

const AddItemForm = ({ item, handleSubmitAddForm, handleChangeAddField }) => {
  const [hide, setHide] = useState(true);
  const handleHideForm = () => {
    setHide(!hide);
  };

  return (
    <div className="add-item-wrapper">
      {hide ? (
        <button className="open-button" onClick={handleHideForm}>
          Add Item
        </button>
      ) : (
        <form className="form-container" onSubmit={handleSubmitAddForm}>
          <div className="form-container__fields">
            <input
              type="text"
              placeholder="ID"
              name="id"
              required
              autoComplete="off"
              value={item.id}
              onChange={handleChangeAddField}
            />
            <input
              type="text"
              placeholder="FIRST NAME"
              name="firstName"
              required
              autoComplete="off"
              value={item.firstName}
              onChange={handleChangeAddField}
            />
            <input
              type="text"
              placeholder="LAST NAME"
              name="lastName"
              required
              autoComplete="off"
              value={item.lastName}
              onChange={handleChangeAddField}
            />
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              required
              autoComplete="off"
              value={item.email}
              onChange={handleChangeAddField}
            />
            <input
              type="text"
              placeholder="PHONE"
              name="phone"
              required
              autoComplete="off"
              value={item.phone}
              onChange={handleChangeAddField}
            />
          </div>
          <div className="form-container__buttons">
            <button type="submit" className="btn">
              Confirm
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={handleHideForm}
            >
              Close
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddItemForm;
