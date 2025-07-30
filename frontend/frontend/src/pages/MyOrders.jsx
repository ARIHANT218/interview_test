import { useAppContext } from "../context/AppContext";

const MyOrders = () => {
  const { orders,navigate } = useAppContext();
  if (!orders.length) {
    return (
      <div className="mt-16 text-center text-gray-500">
        <p className="text-2xl mb-2">You have no orders yet</p>
        <p className="mb-4">Once you place an order, it'll show up here.</p>
        <button
          onClick={() => navigate("/products")}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          Shop Now
        </button>
      </div>
    );
  }
  return (
    <div className="mt-12 pb-16">
      <p className="text-2xl md:text-3xl font-medium">My Orders</p>
      {orders.map((order) => (
        <div
          key={order._id}
          className="my-8 border border-gray-300 rounded-lg p-4 max-w-4xl"
        >
          <div className="flex justify-between mb-4">
            <span>ID: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>Total: ${order.amount.toFixed(2)}</span>
          </div>
          {order.items.map((item, i) => (
            <div
              key={i}
              className={`flex justify-between items-center border-b border-gray-300 p-4 ${
                i === order.items.length - 1 ? "" : "mb-2"
              }`}
            >
              <div className="flex items-center">
                <img
                  src={item.product.image[0]}
                  alt={item.product.name}
                  className="w-16 h-16 rounded"
                />
                <div className="ml-4">
                  <h2 className="font-medium">{item.product.name}</h2>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>
              <div>
                <p>Status: {order.status}</p>
                <p>
                  Date:{" "}
                  {new Date(order.createdAt).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
                <p>
                  Amount: $
                  {(item.product.offerPrice * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default MyOrders;