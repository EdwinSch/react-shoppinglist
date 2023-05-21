const ClearButton = ({ clearItems }) => {
  return (
    <button
      className="btn btn-warning btn-block"
      type="button"
      onClick={clearItems}
    >
      remove all
    </button>
  );
};

export default ClearButton;
