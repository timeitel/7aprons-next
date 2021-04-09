export const LineItem = ({ onItemUpdate, item }) => {
  const handleItemUpdate = (e) => {
    onItemUpdate({ ...item, quantity: Number(e.target.value) });
  };

  return (
    <>
      <div className="flex flex-col items-end mr-4">
        <label className="text-md font-medium">{item.name}</label>
        <label>$8.50 each</label>
      </div>
      <input
        value={item.quantity}
        type="number"
        min="0"
        max="100"
        onChange={handleItemUpdate}
      />
    </>
  );
};
