import { Checkbox, Layout } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useDispatch } from "react-redux";
import {
  setSelectedColorCheckbox,
  setSelectedGenderCheckbox,
} from "../lib/checkBoxSlice";

const { Sider } = Layout;
const colorOptions = ["Red", "Blue", "Green"];
const genderOptions = ["Male", "Female"];

const Sidebar = () => {
  const dispatch = useDispatch();
  const onChange = (checkedValues: CheckboxValueType[], type: string) => {
    console.log("checked = ", checkedValues);
    if (type === "color") {
      dispatch(setSelectedColorCheckbox(checkedValues));
    }
    if (type === "gender") {
      dispatch(setSelectedGenderCheckbox(checkedValues));
    }
  };
  return (
    <Sider width="20%" className="!bg-gray-100 hidden sm:flex shadow-md p-4">
      <div className="flex flex-col text-lg mb-4">
        <label>Color</label>
        <Checkbox.Group
          options={colorOptions}
          // defaultValue={["Red"]}
          onChange={(e) => onChange(e, "color")}
          className="flex flex-col px-2"
        />
      </div>
      <div className="flex flex-col text-lg mb-4">
        <label>Gender</label>
        <Checkbox.Group
          options={genderOptions}
          // defaultValue={["Men"]}
          onChange={(e) => onChange(e, "gender")}
          className="flex flex-col px-2"
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
