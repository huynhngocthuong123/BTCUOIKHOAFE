import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    ReadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import './AdminTemplate.scss'
import { Layout, Menu } from 'antd';
import React, { Fragment, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

export const AdminTemplate = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <ReadOutlined />,
                            label: 'Quản Lý Khóa Học',
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: 'Quản Lý Học Viên',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>

    )
}


