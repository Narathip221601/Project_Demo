import React from 'react'
import { Row, Col, Slider, Button, Radio, Input, Form } from "antd";

import { Link } from "react-router-dom";

export default function Pak3() {
    return (
        <div>
            <div>
                พักตา
        </div>
            <Link to="/alltotall">
                <Button className="but2" type="button">
                    ไปต่อ รวมคะแนน
            </Button>
            </Link>
        </div>
    )
}
