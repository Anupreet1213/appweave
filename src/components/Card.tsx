// import { useDispatch, useSelector } from "react-redux";
// import { addItems } from "../lib/cartSlice";
// import { RootState } from "../lib/store";
// import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addCartData } from "../lib/cartSlice";

interface CardProps {
  eachItem: {
    name: string;
    price: string;
    color: string;
    image: string;
    quantity: number;
  };
}

const Card: React.FC<CardProps> = ({ eachItem }) => {
  const dispatch = useDispatch();
  // const cartData = useSelector((store: RootState) => store.cart);

  const handleClick = (item: {
    name: string;
    price: string;
    color: string;
    image: string;
    quantity: number;
  }) => {
    let cartData;
    const strCartData = localStorage.getItem("cart");

    if (strCartData) {
      cartData = JSON.parse(strCartData);
    } else {
      cartData = {
        totalPrice: 0,
        itemsArray: [],
        totalQuantity: 0,
      };
    }

    const existingItemIndex = cartData.itemsArray.findIndex(
      (cartItem: {
        name: string;
        price: string;
        color: string;
        image: string;
        quantity: number;
      }) => cartItem.name === item.name
    );

    if (existingItemIndex !== -1) {
      cartData.itemsArray[existingItemIndex].quantity += 1;
    } else {
      cartData.itemsArray.push(item);
    }

    cartData.totalQuantity += 1;

    cartData.totalPrice += parseFloat(item.price.slice(1));
    dispatch(addCartData(cartData));

    const newCartData = JSON.stringify(cartData);
    localStorage.setItem("cart", newCartData);
  };

  return (
    <div className="py-2 shadow-md">
      <div className="px-4">
        <div className="bg-gray-200 h-48">
          <img
            src={eachItem?.image}
            alt="t-shirt"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between p-4 items-center">
        <span className="text-lg">
          <div>{eachItem?.name}</div>
          <div>{eachItem?.price}</div>
        </span>
        <button
          className="bg-black text-white p-2 rounded-md"
          onClick={() => handleClick(eachItem)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
