import React, { Component } from 'react'
import { Radio, Input } from 'antd';

class Butre extends Component {
constructor(props){
  super(props)
  
}
    state = {
        
      };

      onChange = e => {
        console.log('e', e)
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
        this.props.setgender(
          e.target.value
        )
      };

    render() {

        const radioStyle = {};
          const { value } = this.state;
          

        return (
          <div>
            <strong>เพศ : 
            <Radio.Group onChange={this.onChange} value={value}>
            <Radio style={radioStyle} value="Male">
              ชาย            </Radio>
            <Radio style={radioStyle} value="Female" >
              หญิง
            </Radio>
            <Radio style={radioStyle} value="Dots">
          ไม่ระบุ..
        </Radio>
          </Radio.Group>
          </strong>
          </div>
        )
    }
}

export default Butre;