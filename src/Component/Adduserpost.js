import { Form, Input, Button } from 'antd';
import {useDispatch} from "react-redux";
import { addUser } from '../Redux/Action';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const layout = {
    labelCol: {
        span: 9,
    },
    wrapperCol: {
        span: 7,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
  };

const Addup = () => {

    const [values, setValues] = useState({
        name: "",
        email: ""
    })

    const {name , email } = values;
    const navigate = useHistory();
    let dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(addUser(values));
        navigate.push('/all');
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish}  validateMessages={validateMessages}>
            <h1>Add User Post</h1>
            <Form.Item
                label="Name"
                type='text'
                name={'name'}
                value={name}
                rules={[
                    {
                        required: true,
                    },
                onchange={handleInputChange}
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                type="email"
                name={'email'}
                label="Email"
                value={email}
                rules={[
                    {
                        type: 'email',
                    },
                onchange={handleInputChange}
                ]}
            >
                <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Addup;
