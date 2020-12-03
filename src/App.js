import { useState } from "react";
import { dataAPI } from "./api/api";
import "./App.scss";
import SelectedItemCard from "./components/SelectedItemCard/SelectedItemCard";
import Pagination from "./components/Pagination/Pagination";
import DataSizeSelector from "./components/DataSizeSelector/DataSizeSelector";
import Table from "./components/Table/Table";
import sortByOrder from "./utils/sortByOrder";
import AddItemForm from "./components/AddItemForm/AddItemForm";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [field, setField] = useState("id");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [newItem, setNewItem] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
    address: {},
  });
  console.log(newItem);
  console.log(items);
  const fetchData = async (size) => {
    setLoading(true);
    setSelectedItem(null);
    const data = await dataAPI.getData(size);
    setItems(sortByOrder(data, sortOrder, field));
    setLoading(false);
  };

  const handleFieldClick = (e) => {
    setField(e.target.id);
    const itemsCopy = [...items];
    const sortedItems = sortByOrder(itemsCopy, sortOrder, e.target.id);
    setItems(sortedItems);
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDataSize = (e) => {
    const dataSize = e.target.id;
    fetchData(dataSize);
    setCurrentPage(1);
  };

  const handleChangeAddField = (e) => {
    setNewItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitAddForm = (e) => {
    e.preventDefault();
    const itemsCopy = [...items];
    itemsCopy.unshift(newItem);
    setItems(itemsCopy);
  };

  const onPaginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="app-wrapper">
      <DataSizeSelector handleDataSize={handleDataSize} />

      {items.length > 50 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          onPaginate={onPaginate}
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          {items.length > 0 && (
            <>
              <AddItemForm
                item={newItem}
                handleSubmitAddForm={handleSubmitAddForm}
                handleChangeAddField={handleChangeAddField}
              />
              <Table
                items={currentItems}
                handleFieldClick={handleFieldClick}
                handleItemClick={handleItemClick}
                sortOrder={sortOrder}
                field={field}
              />
            </>
          )}
        </>
      )}

      {selectedItem && <SelectedItemCard item={selectedItem} />}
    </div>
  );
};

export default App;
