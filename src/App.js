import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Dog from "./assets/pug.jpg";
import "./App.css";
import Axios from "axios";

export default function App() {
  // const onFinish = values => {
  //   console.log('Received values of form: ', values);
  // };

  const onFinish = (values) => {
    Axios.post("https://covid19.th-stat.com/api/open/today", {
      user_name: "superadmin@ttt.com",
      password: "RTAF_Telecom@1234",
    })
      .then(({ data }) => {
        console.log(data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const login=()=>{
  //   // axiost.post('http://47.241.24.240:8081/token', {
  //   //   "user_name": "superadmin@ttt.com",
  //   //   "password": "RTAF_Telecom@1234",
  //   //   // "user_name": "superadmin@ttt.com",
  //   //   // "password": "RTAF_Telecom@1234",
  //   // }).then(({ data }) => {
  //   //   console.log(data);

  //   // }).catch((error) => {
  //   //   console.log(error)
  //   // })
  // }

  return (
    <Form
      style={{ textAlign: "center" }}
      name="normal_login"
      className="child"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <div className="container">
        <img src={Dog} width="100%" />
      </div>
      <Form.Item
        className="container2"
        name="username"
        rules={[{ required: true, message: "กรุณาใส่ยูสเซอร์" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "กรุณาใส่รหัสผ่าน" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}
