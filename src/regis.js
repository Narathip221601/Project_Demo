import React, { useState } from "react";
import "./App.css";
import Eve from "./Assets/eye.png";
import { Row, Col, Button, Form, Input, Radio, DatePicker } from "antd";
import Butre from "./Component/butre";
import Date from "./Component/date";
import Dare2 from "./Component/dare2";
import Axios from "axios";

const Regis = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [state, setState] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    gender: "",
    birthday: "",
  });

  const [data, setData] = useState("");
  const [genders, setgenders] = useState("");
  const [birthday, setbirthdays] = useState("");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const register = () => {
    console.log("state", state);

     Axios.post("http://139.59.232.220:9000/users/register", {
      username: state.username,
      password: state.password,
      first_name: state.first_name,
      last_name: state.last_name,
      gender: state.gender,
      birthday: state.birthday,
    })
      .then(({ data }) => {
        console.log(data);
        window.location.href = "/home";
      })
      .catch((error) => {
        console.log(error);
      }); 
  };

  const demo = () => {
    console.log("asdsd");
  };

  return (
    <>
      <div>
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
            <div className="Navbar2">สร้างชื่อบัญชีของคุณ</div>

            <Form
              className="Navbar3"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 24 }}
              layout="horizontal"
              initialValues={{ size: componentSize }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              {/* comment 1 */}
              <Row gutter={{ xs: 24, sm: 24, md: 12, lg: 12 }}>
                <Col className="gutter-row" flex="auto">
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: "กรุณาใส่ชื่อ" }]}
                  >
                    <Input
                      placeholder="ชื่อ*"
                      onChange={(e) =>
                        setState({ ...state, first_name: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>

                <Col className="gutter-row" flex="auto">
                  <Form.Item
                    name="rast"
                    rules={[{ required: true, message: "กรุณาใส่นามสกุล" }]}
                  >
                    <Input
                      placeholder="นามสกุล*"
                      onChange={(e) =>
                        setState({ ...state, last_name: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Radio.Group
                  onChange={(e) =>
                    setState({ ...state, gender: e.target.value })
                  }
                  defaultValue={state.gender}
                >
                  <Radio value="male">ชาย</Radio>
                  <Radio value="female">หญิง</Radio>
                  <Radio value="Not">ไม่ระบุ..</Radio>
                </Radio.Group>

                <div className="marg">
                  {/* <Dare2 /> */}
                  <DatePicker
                    onChange={(e, date) =>
                      setState({ ...state, birthday: date })
                    }
                    dateRender={(current) => {
                      const style = {};
                      if (current.date() === 1) {
                        style.border = "1px solid #1890ff";
                        style.borderRadius = "50%";
                      }
                      return (
                        <div className="center" style={style}>
                          {current.date()}
                        </div>
                      );
                    }}
                  />
                </div>
              </Form.Item>

              {/* comment 2 */}
              <Row gutter={{ xs: 24, sm: 24, md: 12, lg: 12 }}>
                <Col className="gutter-row" flex="auto">
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: "กรุณาใส่ UserName" }]}
                  >
                    <Input
                      placeholder="username*"
                      onChange={(e) =>
                        setState({ ...state, username: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>

                <Col className="gutter-row" flex="auto">
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: "กรุณาใส่ Password" }]}
                  >
                    <Input
                      placeholder="password*"
                      onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
              {/* end */}
              <Button className="but4" type="Submit" onClick={() => register()}>
                สร้าง
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Regis;
