import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import React from "react"
import Navbar from "./NavBar"

export default function Crud() {
    return(
            <Layout>
                <Content>
                    <h1>CRUD-with-Redux</h1>
                    <img src="https://s33046.pcdn.co/wp-content/uploads/2018/12/word-image-228.png" alt="Sperious" style={{marginTop: 20, width: '100%'}}/>
                </Content>
            </Layout>
    )
}
