import React from 'react'
import { Row, Col, Slider, Button, Radio, Input, Form } from "antd";

import { Link } from "react-router-dom";

export default function Pak2() {
    return (
        <div>
            <div>
                พักตา
        </div>
            <Link to="/blue1">
                <Button className="but2" type="button">
                    ไปต่อ
            </Button>
            </Link>
        </div>
    )
}
