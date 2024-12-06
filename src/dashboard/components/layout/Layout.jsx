import React, { useState } from "react";
import { Layout, theme, Typography } from "antd";
import MenuList from "./MenuList";
import HeaderMenuItem from "./HeaderMenuItem";
import AllRoutes from "./AllRoutes";
import logo from "../logo.png";
const SiteBar = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const [themeChange, setThemeChange] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const ToggleBtn = () => {
    setThemeChange(!themeChange);
  };
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider
          collapsed={collapsed}
          breakpoint="lg"
          trigger={null}
          collapsible
          width={"250px"}
          theme={themeChange ? "dark" : "light"}
          style={{
            position: "fixed",
            overflow: "auto",
            height: "100vh",
            padding: "0px",
            margin: "0px",
          }}
        >
          <div className="d-flex justify-content-center">
            <img src={logo} className="img-fluid p-4 " alt="" />
          </div>
          <MenuList themeChange={themeChange} collapsed={collapsed} />
        </Sider>
        <Layout
          style={{
            marginLeft: collapsed ? "80px" : "250px",
            transition: "all 0.3s",
          }}
        >
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <HeaderMenuItem
              ToggleBtn={ToggleBtn}
              themeChange={themeChange}
              handleCollapsed={handleCollapsed}
              collapsed={collapsed}
            />
          </Header>

          <AllRoutes />
          {/* </Content> */}

          {/* <Footer
                        className="text-center "
                        style={{ background: colorBgContainer }}
                    >
                        2024 © Larkon. Crafted by  Techzaa
                    </Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default SiteBar;
