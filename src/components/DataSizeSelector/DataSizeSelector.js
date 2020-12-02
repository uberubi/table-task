const DataSizeSelector = ({ handleDataSize }) => {
  return (
    <>
      <button id="1000" onClick={handleDataSize}>
        Big data
      </button>
      <button id="32" onClick={handleDataSize}>
        Small data
      </button>
    </>
  );
};

export default DataSizeSelector;
