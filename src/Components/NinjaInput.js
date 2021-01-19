import React from "react";

const NinjaInput = ({ ninjas, handleNinjaChange, handleDeleteNinja }) => {
  return ninjas.map((val, idx) => {
    let ninjaId = `ninja-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={ninjaId}></label>
        <input
          type="text"
          name={ninjaId}
          id={ninjaId}
          data-id={idx}
          value={ninjas[idx].ninja}
          placeholder={`Name ${idx + 1}`}
          className="ninja"
          onChange={handleNinjaChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteNinja(idx);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
};

export default NinjaInput;
