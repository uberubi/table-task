import './DataSizeSelector.scss'

const DataSizeSelector = ({ handleDataSize }) => {
  return (
    <div className="data-size-selector-wrapper">
      <button id="1000" className="btn-big" onClick={handleDataSize}>
        Big data
      </button>
      <button id="32" className="btn-small" onClick={handleDataSize}>
        Small data
      </button>
    </div>
  );
};

export default DataSizeSelector;
