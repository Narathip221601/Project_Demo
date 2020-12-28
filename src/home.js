import React, { Component } from "react";
import { Button, Radio, Col } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    size: "large",
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <>
        <Col span={24}>
          <Link to="/red1">
            <Button className="newbut1" type="button">
              เริ่มทำแบบทดสอบ
            </Button>
          </Link>

          <Link to="/quicktest">
            <Button className="but2" type="button">
              อ่านข้อมูลตาบอดสี
            </Button>
          </Link>

          {/* <Button
                className="but" type="submit">เข้าสู่ระบบ</Button> */}
          <Link to="/">
            <Button className="but2" type="button">
              กลับ
            </Button>
          </Link>
        </Col>
      </>
    );
  }
}
export default Home;
