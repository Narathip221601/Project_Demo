import React, { Component } from "react";

class Dare2 extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
    this.props.setgender(e.target.value);
  };

  render() {
    const radioStyle = {};
    const { value } = this.state;

    return (
      // <Space direction="vertical" size={12}>
        // <DatePicker
        //   dateRender={(current) => {
        //     const style = {};
        //     if (current.date() === 1) {
        //       style.border = "1px solid #1890ff";
        //       style.borderRadius = "50%";
        //     }
        //     return (
        //       <div className="center" style={style}>
        //         {current.date()}
        //       </div>
        //     );
        //   }}
        // />
      // </Space>
      <></>
    );
  }
}

export default Dare2;
