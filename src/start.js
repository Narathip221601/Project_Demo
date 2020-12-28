import React from 'react';
import './App.css';
import Eve from './Assets/eye.png';
import { Row, Col,Button,} from 'antd';
/* import { useHistory } from "react-router-dom"; */
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import Login from './login';
import Regis from './regis';




 function Start() {
      const login = () => {

      }

      const regis = () => {

    }
    return (
        <>
        <Row>
        <Col span={24}>
            <div className="Navbar">
            แบบทดสอบความบกพร่อง
                การมองเห็นด้านสี
            </div>
        </Col>
        </Row>

        <Row>
        <Col span={24}>
            <img src={Eve}  width="400px" className="log" />
            </Col>

            <Col span={24}>
            <Link to='/login'><Button
                className="but2" type="submit">เข้าสู่ระบบ</Button></Link>
                {/* <Button
                className="but" type="submit">เข้าสู่ระบบ</Button> */}
                <Link to='/regis'><Button
                className="but2" type="submit">ลงทะเบียน</Button></Link>
            </Col>
        </Row>  
        </>
    );
}


export default Start;