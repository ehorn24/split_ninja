import React from "react";

const ItemInput = ({ items, handleDeleteItem, handleItemChange }) => {
  return items.map((val, idx) => {
    let itemId = `item-${idx}`;
    let priceId = `price-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={itemId}></label>
        <input
          type="text"
          name={itemId}
          id={itemId}
          data-id={idx}
          value={items[idx].item}
          className="item"
          placeholder={`Item ${idx + 1}`}
          onChange={handleItemChange}
        />
        <label htmlFor={priceId}></label>
        <input
          type="number"
          name={priceId}
          id={priceId}
          data-id={idx}
          value={items[idx].price}
          className="price"
          placeholder={`Item ${idx + 1} price`}
          onChange={handleItemChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteItem(idx);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
};

export default ItemInput;
