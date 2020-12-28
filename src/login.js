import React, { useState } from "react";
import "./App.css";
import Eve from "./Assets/eye.png";
import { Row, Col, Button, Form, Input } from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Axios from "axios";

import { Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
// import {
//     loginData
// } from "../../redux/actions";

// import Start from "./start";
// import Regis from "./regis";
 
// import Rooms from "./rooms";
/* import Butre from './Component/butre';
import Date from './Component/date';
 */

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const onFinish = () => {
    console.log(login);
    Axios({
      method: "POST",
      url: "http://139.59.232.220:9000/users/login",
      headers: { "Content-Type": "application/json" },
      data: {
        username: login.username,
        password: login.password,
      },
    })
      .then((res) => {
        console.log(res);
        var user = jwt_decode(res.data.access_token);
        console.log(user)
                user.token = res.data.access_token;
        window.sessionStorage.setItem("token", JSON.stringify(res.data));
        window.sessionStorage.setItem("isLogin", 1);
        // window.location.href = "/butto";
        window.location.assign("/home")
        localStorage.setItem('token', res.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <div className="Navbar">แบบทดสอบความบกพร่อง การมองเห็นด้านสี</div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <img src={Eve} width="400px" className="log" />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Form
            name="normal_login"
            className="Navbar4"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 24 }}
            layout="horizontal"
            initialValues={{ remember: true }}
          >
            <Row gutter={{ xs: 24, sm: 24, md: 12, lg: 12 }}>
              <Col className="gutter-row" flex="auto">
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "กรุณาใส่ UserName" }]}
                  onChange={(e) =>
                    setLogin({ ...login, username: e.target.value })
                  }
                >
                  <Input prefix={<UserOutlined />} placeholder="Username*" />
                </Form.Item>
              </Col>

              <Col className="gutter-row" flex="auto">
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "กรุณาใส่ Password" }]}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                >
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password*"
                    required
                  />
                </Form.Item>
              </Col>
            </Row>

            <Col span={24}>
              <Button className="but2" type="submit" onClick={onFinish}>
                เข้าสู่ระบบ
              </Button>

              {/* <Button
                className="but" type="submit">เข้าสู่ระบบ</Button> */}
              <Link to="/">
                <Button className="but2" type="button">
                  กลับ
                </Button>
              </Link>
            </Col>

            {/*  <Button className="but4" htmlType="submit">เข้าสู่ระบบ</Button>
            <Link to='/start'><Button
                className="but2" type="submit" >กลับ</Button></Link> */}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
