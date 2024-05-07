// import { useSelector } from "react-redux";
// import { RootState } from "../lib/store";

// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartData } from "../lib/cartSlice";
import { RootState } from "../lib/store";

const Cart = () => {
  const cartData = useSelector((store: RootState) => store.cart);
  const dispatch = useDispatch();
  // const [cartData, setCartData] = useState({
  //   totalPrice: 0,
  //   itemsArray: [
  //     {
  //       name: "",
  //       price: 0,
  //       quantity: 0,
  //       color: "",
  //     },
  //   ],
  //   totalQuantity: 0,
  // });

  // useEffect(() => {
  //   const strCartData = localStorage.getItem("cart");
  //   let data;

  //   if (strCartData) {
  //     data = JSON.parse(strCartData);
  //   } else {
  //     data = {
  //       totalPrice: 0,
  //       itemsArray: [],
  //       totalQuantity: 0,
  //     };
  //   }

  //   setCartData(data);
  // }, []);

  const handleDelete = (item: {
    name: string;
    price: string;
    quantity: number;
    color: string;
  }) => {
    const updatedItemsArray = cartData.itemsArray.filter(
      (cartItem) => cartItem.name !== item.name
    );

    const price = parseFloat(item?.price.replace("$", ""));

    const updatedTotalPrice = cartData?.totalPrice - price * item?.quantity;

    console.log(item?.price);

    const updatedTotalQuantity = cartData.totalQuantity - item.quantity;

    // setCartData({
    //   totalPrice: updatedTotalPrice,
    //   itemsArray: updatedItemsArray,
    //   totalQuantity: updatedTotalQuantity,
    // });

    dispatch(
      addCartData({
        totalPrice: updatedTotalPrice,
        itemsArray: updatedItemsArray,
        totalQuantity: updatedTotalQuantity,
      })
    );

    const newCartData = JSON.stringify({
      totalPrice: updatedTotalPrice,
      itemsArray: updatedItemsArray,
      totalQuantity: updatedTotalQuantity,
    });
    localStorage.setItem("cart", newCartData);
  };
  return (
    <div className="bg-white py-4 px-12">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="p-4 flex flex-col gap-4">
        {cartData?.itemsArray?.map((eachItem) => {
          return (
            // <div key={eachItem?.name}>
            //   <div>{eachItem?.name}</div>
            //   <div>{eachItem?.price}</div>
            //   <div>{eachItem?.quantity}</div>
            //   <div>{eachItem?.color}</div>
            // </div>
            <div key={eachItem?.name} className="flex gap-4">
              <div className="bg-gray-600 p-4">img</div>
              <div className="w-[10vw]">
                <div>{eachItem?.name}</div>
                <div>{eachItem?.price}</div>
              </div>
              <div className="flex gap-4 items-center">
                <span>Qty:{eachItem?.quantity}</span>
                <button
                  className="border border-black p-2 rounded-md"
                  onClick={() => handleDelete(eachItem)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>Total Amount: $ {cartData?.totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
