// import React from "react";
import { Badge, Layout } from "antd";
// import Card from "./Card";
// import Sidebar from "./Sidebar";
// import { useSelector } from "react-redux";
// import { RootState } from "../lib/store";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import { Content } from "antd/es/layout/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { addCartData } from "../lib/cartSlice";
// import { useEffect } from "react";
// import { updateCartSliceFromLocal } from "../lib/cartSlice";
// import { useEffect } from "react";

const { Header } = Layout;

const MainLayout = () => {
  // const cartData = useSelector((store: RootState) => store.cart);
  // const dispatch = useDispatch();
  // const storeData = useSelector((store: RootState) => store.data);
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

  const cartData = useSelector((store: RootState) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const strCartData = localStorage.getItem("cart");
    let data;

    if (strCartData) {
      data = JSON.parse(strCartData);
    } else {
      data = {
        totalPrice: 0,
        itemsArray: [],
        totalQuantity: 0,
      };
    }

    dispatch(addCartData(data));
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Header className="bg-gray-100 flex flex-col justify-center h-[10vh]">
          <div className="flex justify-between items-center text-lg">
            <div className="text-xl font-bold">TeeRex Store</div>
            <div className="flex gap-6">
              <span>
                <Link to="/">Home</Link>
              </span>
              <span className="">
                <Badge count={cartData?.totalQuantity}>
                  <Link to="/cart">
                    <span className="px-2 text-lg">Cart</span>
                  </Link>
                </Badge>
              </span>
            </div>
          </div>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Content>
        {/* <RouterProvider router={router} /> */}
      </Layout>
    </BrowserRouter>
  );
};

export default MainLayout;
