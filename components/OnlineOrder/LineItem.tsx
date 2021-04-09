export const LineItem = ({ onItemUpdate, item }) => {
  const handleItemUpdate = (e) => {
    onItemUpdate({ ...item, quantity: Number(e.target.value) });
  };

  return (
    <>
      {item.week.toString().slice(-1) === "1" && (
        <h4 className="mb-4 text-right">{item.orderAndDelivery}</h4>
      )}
      <div className="flex items-center justify-end mb-2">
        <div className="flex flex-col items-end mr-4">
          <label className="text-md text-right font-medium">{item.name}</label>
          <label>$8.50 each</label>
        </div>
        <input
          value={item.quantity}
          type="number"
          min="0"
          max="100"
          onChange={handleItemUpdate}
        />
      </div>
      {item.week.toString().slice(-1) === "2" && (
        <hr className="border-gray-200 my-4 text-center text-2xl w-full ml-auto" />
      )}
    </>
  );
};
