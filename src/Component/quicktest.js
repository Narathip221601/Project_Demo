import React, { useState, useEffect } from "react";
import Axios from "axios";
import Item from "antd/lib/list/Item";
import { Button, Radio, Col } from "antd";
import { Link } from "react-router-dom";

export default function Quicktest() {
  const [detel, setDetel] = useState(null);

  useEffect(() => {
    let token = JSON.parse(sessionStorage.getItem('token'));
    console.log('data', token.access_token)

    Axios({
      method: "GET",
      url: "http://139.59.232.220:9000/quizs/getQuizsDetail",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.access_token,
      },
    }).then((result) => {
      const { data } = result;
      console.log(data);
      setDetel(data.items)
      console.log('detel', detel)
        // alert(JSON.stringify(data))
        ;
    });
  }, []);

  return (
    <div>
      <div className="bout" dangerouslySetInnerHTML={{ __html: detel }}>
      </div>
      <Link to="/home">
        <Button className="but2" type="button">
          กลับ
            </Button>
      </Link>
    </div>

  );
}
