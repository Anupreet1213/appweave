import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Content } from "antd/es/layout/layout";
import Card from "./Card";
import { setSearchText } from "../lib/searchTextSlice";

// Interface for HomeProps (optional but improves readability)
// interface HomeProps {
//   cartData: {
//     totalPrice: number;
//     itemsArray: {
//       name: string;
//       price: number;
//       quantity: number;
//       color: string;
//     }[];
//     totalQuantity: number;
//   };
//   setCartData: React.Dispatch<
//     React.SetStateAction<{
//       totalPrice: number;
//       itemsArray: {
//         name: string;
//         price: number;
//         quantity: number;
//         color: string;
//       }[];
//       totalQuantity: number;
//     }>
//   >;
// }

const Home = () => {
  const data = useSelector((store: RootState) => store.data);
  const searchTextData = useSelector((store: RootState) => store.searchText);
  const selectedColorCheckBox: string[] = useSelector(
    (store: RootState) => store.checkBox.selectedColorCheckBox
  );
  const selectedGenderCheckBox: string[] = useSelector(
    (store: RootState) => store.checkBox.selectedGenderCheckBox
  );
  // const selectedPriceCheckBox: string[] = useSelector(
  //   (store: RootState) => store.checkBox.selectedPriceCheckBox
  // );

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <Layout className="h-[90vh]">
      <Sidebar />
      <Content className="bg-white border overflow-scroll p-8 flex flex-col gap-8">
        <input
          type="text"
          placeholder="Search for Products"
          className="border border-black p-2 w-12/12 sm:w-4/12 rounded-sm shadow-md"
          onChange={handleChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10">
          {data?.map((eachItem) => {
            const eachItemData = {
              name: eachItem.name,
              price: eachItem.price,
              color: eachItem.color,
              image: eachItem.image,
              quantity: 1,
            };

            // Combine all filtering conditions using logical AND (&&)
            const shouldRender =
              (searchTextData.searchText.toLowerCase() === "" || // Include all items if search is empty
                eachItem.name
                  .toLowerCase()
                  .includes(searchTextData.searchText.toLowerCase()) ||
                eachItem.price
                  .toString()
                  .toLowerCase()
                  .includes(searchTextData.searchText.toLowerCase()) ||
                eachItem.color
                  .toLowerCase()
                  .includes(searchTextData.searchText.toLowerCase())) ||
                eachItem.gender
                  .toLowerCase()
                  .includes(searchTextData.searchText.toLowerCase())
                  &&
              (selectedColorCheckBox.length === 0 || // Include all if no color filter is applied
                selectedColorCheckBox.some(
                  (color) =>
                    color.toLowerCase() === eachItem.color.toLowerCase()
                )) &&
              (selectedGenderCheckBox.length === 0 || // Include all if no color filter is applied
                selectedGenderCheckBox.some(
                  (gender) =>
                    gender.toLowerCase() === eachItem.gender.toLowerCase()
                ));
            // (selectedPriceCheckBox.length === 0 || // Include all if no price filter is applied
            //   selectedPriceCheckBox.some((priceRange) => {
            //     // Implement price range filtering logic here (e.g., check if item price falls within the range)
            //     return /* price range filtering condition */;
            //   }));

            return shouldRender ? (
              <Card key={eachItem.id} eachItem={eachItemData} />
            ) : null;
          })}
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
