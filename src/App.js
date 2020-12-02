import { useEffect, useState } from "react";
import { dataAPI } from "./api/api";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const { data } = await dataAPI.getSmallData();
    setItems(data);
    setLoading(false);
  }

  const handleFieldClick = (e) => {
    const itemsCopy = [...items];
    const sortedItems = itemsCopy.sort((a, b) => {
      if (a[e.target.textContent] < b[e.target.textContent]) {
        return -1;
      }
      if (a[e.target.textContent] > b[e.target.textContent]) {
        return 1;
      }
      return 0;
    });
    setItems(sortedItems);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Table items={items} handleFieldClick={handleFieldClick} />
      )}
    </>
  );
};

export default App;
