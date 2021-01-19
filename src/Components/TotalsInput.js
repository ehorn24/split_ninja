import React from "react";

const TotalsInput = ({
  subtotal,
  tax,
  gratuity,
  total,
  handleTotalsChange,
}) => {
  return (
    <div>
      <fieldset className="input-totals">
        <label htmlFor="subtotal">Subtotal: </label>
        <input
          type="number"
          name="subtotal"
          id="subtotal"
          placeholder="Subtotal"
          value={subtotal}
          onChange={handleTotalsChange}
        />
        <label htmlFor="tax">Tax: </label>
        <input
          type="number"
          name="tax"
          id="tax"
          placeholder="Tax"
          value={tax}
          onChange={handleTotalsChange}
        />
        <label htmlFor="gratuity">Gratuity: </label>
        <input
          type="number"
          name="gratuity"
          id="gratuity"
          placeholder="Gratuity (Optional)"
          value={gratuity}
          onChange={handleTotalsChange}
        />
        <label htmlFor="total">Total: </label>
        <input
          type="number"
          name="total"
          id="total"
          placeholder="Receipt Total"
          value={total}
          onChange={handleTotalsChange}
        />
      </fieldset>
    </div>
  );
};

export default TotalsInput;
