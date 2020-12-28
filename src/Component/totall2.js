import React from 'react'
import { Row, Col, Slider, Button, Radio, Input, Form } from "antd";
import Blue1 from './blue1'

import { Link } from "react-router-dom";

export default function Totall2() {
    return (
        <div>
            <div>
            ผลรวมคะแนน : 7 เต็ม 10 คะแนน
        </div>
            <Link to="/pak2">
                <Button className="but2" type="button">
                    ไปต่อ
            </Button>
            </Link>
        </div>
    )
}
