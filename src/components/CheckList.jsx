import { useState } from "react";
import Item from "./Item";
function CheckList({ items, onDeleteItem, onToggleItem, onClearItem }) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    switch (sortBy) {
      case "title":
        return items.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return items
          .slice()
          .sort((a, b) => Number(a.isDone) - Number(b.isDone));
      case "input":
      default:
        return items;
    }
  }

  const sortedItems = sortItems();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan input</option>
          <option value="title">Urutkan berdasarkan title</option>
          <option value="status">Urutkan berdasarkan status</option>
        </select>
        <button onClick={onClearItem}>Delete</button>
      </div>
    </div>
  );
}

export default CheckList;
