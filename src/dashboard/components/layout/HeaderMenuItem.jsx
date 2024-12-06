import React from "react";
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

const HeaderMenuItem = ({
    themeChange,
    ToggleBtn,
    collapsed,
    handleCollapsed,
}) => {

    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
                <button
                    type="text"
                    className="btn btn-light ms-4"
                    onClick={handleCollapsed}>
                    {collapsed ? <RiMenuUnfoldFill /> : <RiMenuFoldFill />}
                </button>
                <h3 className="ms-4">Fruiting desert</h3>
            </div>

            <div className="float-end me-5">
                <button className="btn text-muted fs-5" onClick={ToggleBtn}>
                    {themeChange ? <FiSun /> : <MdDarkMode />}
                </button>
                <button className="btn text-muted fs-5">
                    <IoSettingsOutline />
                </button>
            </div>
        </div>
    );
};

export default HeaderMenuItem;
