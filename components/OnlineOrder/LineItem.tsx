import { useState } from "react";

export const LineItem = ({ onItemUpdate, lineItem }) => {
  const [item, setItem] = useState(lineItem);

  return (
    <>
      <div className="flex flex-col items-end mr-4">
        <label className="text-md font-medium">{item.name}</label>
        <label>$8.50 each</label>
      </div>
      <input
        defaultValue={0}
        type="number"
        min="0"
        max="100"
        onChange={onItemUpdate}
      />
    </>
  );
};
