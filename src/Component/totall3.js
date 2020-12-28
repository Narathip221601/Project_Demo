import React from 'react'
import { Row, Col, Slider, Button, Radio, Input, Form } from "antd";
import Blue1 from './blue1'

import { Link } from "react-router-dom";

export default function Totall3() {
    return (
        <div>
            <div>
            ผลรวมคะแนน : 2 เต็ม 10 คะแนน
        </div>
            <Link to="/pak3">
                <Button className="but2" type="button">
                    ไปต่อ
            </Button>
            </Link>
        </div>
    )
}
