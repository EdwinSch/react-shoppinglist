import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItemName) {
      toast.error("empty input");
      return;
    }

    addItem(newItemName);
    setNewItemName("");

    console.log(newItemName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery list</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={handleChange}
          id="item"
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
