import React from "react";
import { Layout, Menu, Avatar, Badge } from "antd";
import {
  BellFilled,
  QuestionCircleFilled,
  GiftFilled,
} from "@ant-design/icons";
import "../CustomHeader.css";
import SubMenu from "antd/es/menu/SubMenu";
import { DownOutlined } from "@ant-design/icons";

import logo from "../assets/image/logo.png";

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header className="custom-header">
      <div className="menu-left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Organización</Menu.Item>
          <SubMenu
            key="modelos"
            title={
              <span className="submenu-title-wrapper">
                Modelos
                <span className="custom-icon-wrapper">
                  <DownOutlined className="custom-icon" />
                </span>
              </span>
            }
            className="custom-submenu"
          ></SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span className="submenu-title-wrapper">
                Seguimiento
                <span className="custom-icon-wrapper">
                  <DownOutlined className="custom-icon" />
                </span>
              </span>
            }
          ></SubMenu>
        </Menu>
      </div>

      <div className="header-icons">
        <GiftFilled className="header-icon" />
        <QuestionCircleFilled className="header-icon" />
        <Badge count={5}>
          <BellFilled className="header-icon" />
        </Badge>

        <Avatar className="header-avatar">A</Avatar>
      </div>
    </Header>
  );
};

export default AppHeader;
