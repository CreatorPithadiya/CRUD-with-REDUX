import React from 'react'
import 'antd/dist/antd.css'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    return (
        <>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key={1}><NavLink to="/">CRUD</NavLink></Menu.Item>
                <Menu.Item key={2}><NavLink to="/all">All User Post</NavLink></Menu.Item>
                <Menu.Item key={3}><NavLink to="/add">Add User Post</NavLink></Menu.Item>
            </Menu>
        </>
    )
}
