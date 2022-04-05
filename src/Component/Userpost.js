import React, { useEffect, useState } from "react";
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../Redux/Action';
import { Button, Modal } from 'antd';
import { useHistory } from "react-router-dom";

function Allup() {

    const columns = [
        {
            key: '1',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: '2',
            title: 'Email',
            dataIndex: 'email'
        },
        {
            key: '3',
            title: 'View',
            dataIndex: 'view'
        },
        {
            key: '4',
            title: 'Edit',
            dataIndex: 'edit'
        },
        {
            key: '5',
            title: 'Delete',
            dataIndex: 'delete'
        }
    ]

    const { users } = useSelector(state => state.users)
    const navigate = useHistory();
    const [view, setView] = useState(false)

    const handleView = (user) => {
        Modal.info({
            title: 'Details',
            content: (
                <>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </>
            )
        });
        setView(true)
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure want to delete?')) {
            dispatch(deleteUser(id))
        }
    }

    const data = users.map(user => ({
        name: user.name,
        email: user.email,
        view: <Button onClick={() => handleView(user)}>View</Button>,
        edit: <Button type="primary" onClick={() => navigate.push(`/edit/${user.id}`)}>Edit</Button>,
        delete: <Button type="primary" danger onClick={() => handleDelete(user.id)}>Delete</Button>
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers());
    }, [])

    return (
        <div>
            <Table columns={columns}
                dataSource={data}>

            </Table>
        </div>
    )
}

export default Allup;