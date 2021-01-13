import React from "react";

const NinjaInput = ({ ninjas, handleNinjaChange, handleDeleteNinja }) => {
  return ninjas.map((i, key) => {
    let ninjaId = `ninja-${key}`;
    return (
      <div key={key}>
        <label htmlFor={ninjaId}></label>
        <input
          type="text"
          name={ninjaId}
          id={ninjaId}
          value={i}
          placeholder={`Name ${key + 1}`}
          onChange={(e) => handleNinjaChange(key, e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteNinja(key);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
};

export default NinjaInput;
