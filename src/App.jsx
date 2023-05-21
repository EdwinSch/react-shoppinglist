import Form from "./components/Form";
import Items from "./components/Items";
import ClearButton from "./components/ClearButton";
import dataInit from "./dataInit";
import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [items, setItems] = useState(dataInit);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
    toast.success("item added");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success("item removed");
  };

  const clearItems = () => {
    setItems([]);
    toast.success("all items removed");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <section className="section-center">
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} />
        <ClearButton clearItems={clearItems} />
      </section>
    </>
  );
};

export default App;
