import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaSwatchbook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoProjectRoadmap } from "react-icons/go";
import { LuListChecks } from "react-icons/lu";
import { TbLayoutGridAdd } from "react-icons/tb";


const MenuList = ({ themeChange }) => {
    const [selectedKeys, setSelectedKeys] = useState(["home"]);

    const handleSelectedKey = (e) => {
        setSelectedKeys([e.key]);
    };

    return (
        <Menu
            theme={themeChange ? "dark" : "light"}
            selectedKeys={selectedKeys}
            onSelect={handleSelectedKey}
            mode="inline"
            className="menu_bar"
        >
            <Menu.Item key="home" icon={<MdOutlineDashboardCustomize />}>
                <Link to={"/dashboard"}>Dashboard</Link>
            </Menu.Item>
            <Menu.SubMenu
                key={"Project Overview"}
                icon={<GoProjectRoadmap />}
                title={"Product"}
            >
                <Menu.Item key={"product"} icon={<TbLayoutGridAdd />}>
                    <Link to={"product"}>Product</Link>
                </Menu.Item>
               
            </Menu.SubMenu>
        </Menu>
    );
};

export default MenuList;
