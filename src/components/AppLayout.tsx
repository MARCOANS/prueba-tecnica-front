import React, { useState } from "react";
import { Button, Layout, Space, Tabs, Typography } from "antd";

import AppHeader from "./AppHeader";
import TabPane from "antd/es/tabs/TabPane";
import {
  PlusOutlined,
  UploadOutlined,
  DownloadOutlined,
} from "@ant-design/icons";


import Departments from "./Departments";

const { Content } = Layout;

const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("1");
  const handleTabChange = (key: any) => {
    setActiveTab(key);
  };



  return (
    <Layout>
      <AppHeader></AppHeader>
      <Content className="site-content">
        <div className="content-title">
          <Typography.Title level={5}>Organización</Typography.Title>
        </div>
        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
          className="custom-tabs"
          tabBarExtraContent={
            <Space>
              <Button icon={<PlusOutlined />} type="primary" />
              <Button icon={<UploadOutlined />} />
              <Button icon={<DownloadOutlined />} />
            </Space>
          }
        >
          <TabPane tab="Divisiones" key="1" className="custom-tabpane">
            <Departments></Departments>
          </TabPane>
          <TabPane tab="Colaboradores" key="2">
            Vista de colaboradores
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default AppLayout;
