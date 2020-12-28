import React, {useState,useEffect} from 'react'
import { DatePicker, Space } from 'antd';

export default function Date(props) {
  

  const onChange = date => {
    console.log('date', date)
    sessionStorage.setItem('date_regis', date._d);
    props.setbirthday(
      date._d
    )
  };


    return (
        <Space direction="vertical" size={12}>
    <DatePicker onChange={onChange}
      dateRender={current => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="center" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  </Space>
    );
}
