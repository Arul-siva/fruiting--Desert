import React, { useState } from "react";
import { Route , Routes , Link} from "react-router-dom";
import logo from "../logo.png";
import MenuItem from "./MenuItem";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  DashboardOutlined,
  ProductOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography, Space, Input } from "antd";
const { Header, Sider, Content } = Layout;
const { Search } = Input;
const Drawer = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <img src={logo} className="img-fluid  p-4" alt="" />
        <MenuItem/>
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
              }}
            />
            <Typography.Title level={4} style={{ margin: 0 }}>
              Fruiting Desert
            </Typography.Title>
          </div>
          <Space style={{ marginRight: "16px" }}>
            <Search className="mt-3"
              placeholder="input search text"
              onSearch={""}
              style={{
                width: 200,
              }}
            />
            {/* <Button type="text" icon={<BellOutlined />} /> */}
            <Button type="text" icon={<UserOutlined />} />
          </Space>
        </Header>
        <Content
          className="content"
          style={{
            margin: "24px 16px",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {/* <div className="container-fluid">
          <div className="row">
            <div className="col-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit ad enim eos dolor debitis esse veritatis unde, libero sint nemo quod. Dolore ut est officia odio delectus in blanditiis?</div>
            <div className="col-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit ad enim eos dolor debitis esse veritatis unde, libero sint nemo quod. Dolore ut est officia odio delectus in blanditiis?</div>
          </div>
         </div> */}

          <Routes>
              <Route path="/" element={<h1>Dashboard route page</h1>}/>
              <Route path="/project-list" element={<h1>product route page</h1>}/>
          </Routes>
        </Content>
       
      </Layout>
    </Layout>
  );
};

export default Drawer;
