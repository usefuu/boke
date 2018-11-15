import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox,Card,Row,Col,Avatar } from "antd";
import { connect } from "dva";export default class page extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
        const cardStyle = {
            width: 600,
            backgroundColor: "#FFFFF",
            marginTop:"20px"
          };
          const headImg={
              width:"100px",
              height:"100px",
              lineHeight:"100px"
          }
        const userName = "oooojbk";
      return (
        <Card style={cardStyle}>
              <Row>
              <Col span={2}></Col>
                <Col span={6}>
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={headImg}/>
                </Col>
                <Col span={6} style={{lineHeight:"100px"}}>{userName}</Col>
                <Col span={4} style={{lineHeight:"100px"}}>
                  <Button >编辑个人资料</Button>
                </Col>
              </Row>
            </Card>
      );
    }
  }
  