import "./SelectedItemCard.scss";

const SelectedItemCard = ({ item }) => {
  return (
    <div className="selected-item">
      <p>
        Выбран пользователь <b>{item.firstName}</b>
      </p>
      <p>
        Описание: <textarea value={item.description} readOnly></textarea>
      </p>
      <p>Адрес проживания: {item.address.streetAddress}</p>
      <p>Город: {item.address.city}</p>
      <p>Провинция/штат: {item.address.state}</p>
      <p>Индекс: {item.address.zip}</p>
    </div>
  );
};

export default SelectedItemCard;
