import { Menu } from "antd";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { TbLayoutGridAdd } from "react-icons/tb";
import { Link } from "react-router-dom";

const MenuList = ({ themeChange, selectedKeys, handleSelectedKey }) => {
  const items = [
    {
      key: "home",
      icon: <MdOutlineDashboardCustomize />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "Project Overview",
      icon: <GoProjectRoadmap />,
      label: "Product",
      children: [
        {
          key: "product",
          icon: <TbLayoutGridAdd />,
          label: <Link to="product">Product</Link>,
        },
      ],
    },
  ];

  return (
    <Menu
      theme={themeChange ? "dark" : "light"}
      selectedKeys={selectedKeys}
      onSelect={handleSelectedKey}
      mode="inline"
      className="menu_bar"
      items={items}
    />
  );
};

export default MenuList;
