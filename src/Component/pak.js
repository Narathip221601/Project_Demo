import React from 'react'
import { Row, Col, Slider, Button, Radio, Input, Form } from "antd";
import Blue1 from './blue1'

import { Link } from "react-router-dom";

export default function Pak() {
    return (
        <div>
            <div>
                พักตา
        </div>
            <Link to="/green1">
                <Button className="but2" type="button">
                    ไปต่อ
            </Button>
            </Link>
        </div>
    )
}
