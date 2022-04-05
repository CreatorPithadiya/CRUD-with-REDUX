import axios from "axios";
import * as types from "./Actiontype";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
});

const userDeleted = () => ({
    type: types.DELETE_USER
})

const userAdded = () => ({
    type: types.ADD_USER
})

const userUpdated = () => ({
    type: types.UPDATE_USER
})

const singleUser = (user) => ({
    type: types.SINGLE_USER,
    payload: user
})

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/users`)
        .then((resp)=> {
            dispatch(getUsers(resp.data))
        })
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:3001/users/${id}`)
        .then((resp)=> {
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
    }
}

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`http://localhost:3001/users`, user)
        .then((resp)=> {
            dispatch(userAdded());
            dispatch(loadUsers());
        })
    }
}

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/users/${id}`)
        .then((resp)=> {
            dispatch(singleUser(resp.data));
        })
    }
}

export const updateUser = (user, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:3001/users/${id}`, user)
        .then((resp)=> {
            dispatch(userUpdated());
            dispatch(loadUsers());
        })
    }
}