import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("Produce");
  const [selectedName, setSelectedName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: selectedName,
      category: selectedCategory,
    };
    onItemFormSubmit(newItem)
  }

  function selectCategory(event) {
    setSelectedCategory(event.target.value)
  }

  function selectName(event) {
    if (event.target.value !== "") setSelectedName(event.target.value)
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={selectName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={selectCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
