import { Button, Input, Space } from 'antd'
import React, { useState ,useEffect} from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { getSingleUser, updateUser } from '../Redux/Action';


export default function EditPost() {

const [values, setValues] = useState({ name: "", email: "" });
const [error,setError] = useState("");
const {name , email } = values;

let {id} = useParams();

let history = useHistory();

const {user} = useSelector((state)=>({...state.users}));

let dispatch = useDispatch();

const handleInputChange = (e) => {
let {name,value} = e.target;
setValues({...values, [name]: value});
}; 

const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email) {
        setError("Please Insert Details!!!")
    } else {
    dispatch(updateUser(values, id));
    history.push("/all");
    setError("");
    }
    }

    useEffect(()=>{
    dispatch(getSingleUser(id));
    },[]);

    useEffect(() => {
    if(user) {
        setValues({...user});
    }
    }, [user])



    return (
        <>
        {error && <h1 style={{color:'red'}}>{error}</h1>}
          <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
        <div className="container" style={{ marginTop: "20px" }}>
          <h1>Update</h1>
          <Input
            placeholder="Enter Full-Name"
            type="text"
            onChange={handleInputChange}
            name='name'
            value={name || ""}
            style={{ width: "400px" }}
            size="large"
          />
          <br />
          <br />
          <Input
            placeholder="Enter Your Email"
            type="email"
            name='email'
            onChange={handleInputChange}
            value={email || ""}
            style={{ width: "400px" }}
            size="large"
          />
          <br />
          <br />
          <Space style={{ margin: 10 }}>
          {/* If In case you want it not seperate links. */}
            {/* <Button onClick={() => history.push("/")}>Go Back</Button> */}
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Space>
        </div>
      </form>
        </>
    )
}
