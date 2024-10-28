import { useState } from "react";
import { Logo } from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Stats from "./components/Stats";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems((listItems) => [...listItems, item]);
  }

  function handleDeleteItem(id) {
    setListItems((listItems) => listItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setListItems((listItems) => {
      return listItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.done,
          };
        }
        return item;
      });
    });
  }

  function handleClearItem() {
    const confirm = window.confirm("Are you sure want to clear the list?");
    if (confirm) setListItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <CheckList
        items={listItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItem}
      />
      <Stats items={listItems} />
    </div>
  );
}

export default App;
