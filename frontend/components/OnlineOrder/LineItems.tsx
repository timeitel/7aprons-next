export const LineItems = ({ order, handleItemUpdate }) => {
  return (
    <div>
      {order
        .sort((a, b) => a.week - b.week)
        .map((item) => {
          return (
            <div key={item.price}>
              {item.week.toString().slice(-1) === "1" && (
                <label className="mb-4 block text-right">
                  {item.orderAndDelivery}
                </label>
              )}
              <div className="flex items-center justify-end mb-2">
                <div className="flex flex-col items-end mr-4">
                  <label className="text-md text-right font-medium">
                    {item.name}
                  </label>
                  <label>$8.50 each</label>
                </div>
                <input
                  name={item.name}
                  value={item.quantity}
                  type="number"
                  min="0"
                  max="100"
                  onChange={(e) => handleItemUpdate(e, item)}
                  style={{ maxWidth: "20%" }}
                />
              </div>
              {item.week.toString().slice(-1) === "2" && (
                <hr className="border-gray-200 my-4 text-center text-2xl w-full ml-auto" />
              )}
            </div>
          );
        })}
    </div>
  );
};
