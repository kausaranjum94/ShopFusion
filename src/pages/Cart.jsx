import { useCart } from "../context/cartContext";
export const Cart = () => {
  const { removeFromCart, clearCart, updateQuantity, cart, TotalPrice } =
    useCart();

  if (cart.length === 0)
    return (
      <h2 className="text-center my-4 text-2xl font-bold">
        Your Cart is Empty
      </h2>
    );

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-center my-4 text-2xl font-bold">Cart</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-12 my-4 bg-gray-200 p-4 rounded-md"
        >
          <div className="col-span-4 ">
            <p>{item.title}</p>
          </div>
          <div className="col-span-3 text-center">
            <p className="font-bold">{item.price}</p>
          </div>
          <div className="col-span-3 flex align-middle justify-center">
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <span className="py-2 px-4">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
          </div>

          <div className="col-span-2">
            <button
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="flex align-center justify-between my-4">
        <button onClick={() => clearCart()}>Clear Cart</button>
        <span className="font-bold text-black">
          {" "}
          {`Total: ${TotalPrice.toFixed(2)}`}{" "}
        </span>
      </div>
    </div>
  );
};
