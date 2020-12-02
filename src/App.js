import { useRef, useState } from "react";
import { dataAPI } from "./api/api";
import "./App.scss";
import SelectedItem from "./components/SelectedItem/SelectedItem";
import Pagination from "./components/Pagination/Pagination";
import DataSizeSelector from "./components/DataSizeSelector/DataSizeSelector";
import Table from "./components/Table/Table";
import sortByOrder from "./utils/sortByOrder";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [field, setField] = useState("id");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);

  const selectedItemRef = useRef(null);

  const fetchData = async (size) => {
    setLoading(true);
    setSelectedItem(null);
    const { data } = await dataAPI.getData(size);
    setItems(sortByOrder(data, sortOrder, field));
    setSortOrder("asc");
    setLoading(false);
  };

  const handleFieldClick = (e) => {
    setField(e.target.id);
    const itemsCopy = [...items];
    const sortedItems = sortByOrder(itemsCopy, sortOrder, e.target.textContent);
    setItems(sortedItems);
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    selectedItemRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDataSize = (e) => {
    const dataSize = e.target.id;
    fetchData(dataSize);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <DataSizeSelector handleDataSize={handleDataSize} />
      <Table
        items={currentItems}
        handleFieldClick={handleFieldClick}
        handleItemClick={handleItemClick}
        sortOrder={sortOrder}
        field={field}
        loading={loading}
      />
      <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
      <div ref={selectedItemRef}>
        {selectedItem && <SelectedItem item={selectedItem} />}
      </div>
    </>
  );
};

export default App;
