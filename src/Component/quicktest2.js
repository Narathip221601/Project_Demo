import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Row, Col, Slider } from "antd";
import Background from "./Background";

export default function Quicktest2() {
  const [color, setColor] = useState({});

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
      console.log("color", color);
      // alert(JSON.stringify(data))
    });
  }, []);

  return (

    <>
    <header className="dody" >Holllllllllllllllllll</header>
      <Row>
        <Col span={8}>
            <div className="square"></div>
        </Col>
        <Col span={8}>
            <div className="square"></div>
        </Col>
        <Col span={8}>
            <div className="square"></div>
        </Col>
        <Col span={8}>
            <div className="square"></div>
        </Col>
        <Col span={8}>
            <div className="square"></div>
        </Col>
        <Col span={8}>
            <div className="square"></div>
        </Col>
      </Row>
    </>
  );
}
