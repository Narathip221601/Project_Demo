import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Row, Col, Slider , Button} from "antd";
import Background from "./Background";
import { Link } from "react-router-dom";

export default function Quicktest3() {
  const [color, setColor] = useState({});
  const count = 0;
  const check = false;
  const countRow = () => {
    count = count + 1;
    check = count > 3 ? true : false;
  }
 const Colorset =(color)=>{
  return {
    height: '80px',
  width: '115px',
  backgroundColor: color,
  margin: '5%',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  left:'15%',
  float: 'left',
  marginLeft: '-2%'
  }
 }
  useEffect(() => {
    let token = JSON.parse(sessionStorage.getItem("token"));
    console.log("data", token.access_token);

    Axios({
      method: "GET",
      url: "http://139.59.232.220:9000/quizs/getQuizs",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.access_token,
      },
    }).then(async (result) => {
      console.log("result", result);
      await setColor(result.data.items);
      await console.log("color", color);
    /*   await setSquareStyle({
        height: '80px',
      width: '115px',
      backgroundColor: result.data.items.blue.color_blue_1[0].color_code,
      margin: '5%',
      color: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      left:'15%',
      float: 'left',
      })
      await setSquare2Style({
        height: '80px',
      width: '115px',
      backgroundColor: color.blue.color_blue_2[0].color_code,
      margin: '5%',
      color: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      left:'15%',
      float: 'left',
      });
      await setSquare3Style({
        height: '80px',
      width: '115px',
      backgroundColor: color.blue.color_blue_2[0].color_code,
      margin: '5%',
      color: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      left:'15%',
      float: 'left',
      });
      await setSquare4Style({
        height: '80px',
      width: '115px',
      backgroundColor: color.blue.color_blue_2[0].color_code,
      margin: '5%',
      color: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      left:'15%',
      float: 'left',
      });
      await setSquare5Style({
        height: '80px',
      width: '115px',
      backgroundColor: color.blue.color_blue_2[0].color_code,
      margin: '5%',
      color: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      left:'15%',
      float: 'left',
      });
      await setSquare6Style({
        height: '80px',
      width: '115px',
      backgroundColor: color.blue.color_blue_2[0].color_code,
      margin: '5%',
      color: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      left:'15%',
      float: 'left',
      });*/
    }) 
  }, []);

  return (

    <>
    <Col span={24}>
            <div className="Navbar">
            แบบทดสอบความบกพร่อง
                การมองเห็นด้านสี
            </div>
        </Col>
      <Row className="bout2">

      {
      color.green ? color.green.color_green_1.map((item)=> (
        <Col span={8} style={{display: "flex", alignItems:"center" , justifyContent: "center"}}>
          <div  style={Colorset(item.color_code)} />
        </Col>
      )):null
          } 
      </Row>
      <Col span={24}>
            <Link to="/quicktest4">
            <Button className="Navbar" type="button">
              Next
            </Button>
          </Link>

        </Col>
    </>
  );
}
