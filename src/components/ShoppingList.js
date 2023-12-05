import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searched, setSearch] = useState("");
  const [itemsArray, setItemsArray] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  const itemsToDisplay = itemsArray.filter((item) => {
    if (searched !== "") {
      if (selectedCategory !== "All") {
        return item.name.includes(searched) & item.category === selectedCategory
      }
      return item.name.includes(searched)
    }

    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function itemFormSubmit(item) {
    setItemsArray([...itemsArray, item])
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={itemFormSubmit} />
      <Filter search={searched} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
