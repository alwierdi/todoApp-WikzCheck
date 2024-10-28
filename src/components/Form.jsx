import { useState } from "react";

function Form({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;

    const newItem = {
      id: Date.now(),
      title,
      isDone: false,
    };

    onAddItem(newItem);

    setTitle("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>How was your day?</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
