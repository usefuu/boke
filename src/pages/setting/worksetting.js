import React, { Component } from "react";
import { Link } from "dva/router";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Card,
  Row,
  Col,
  Avatar,
  Switch 
} from "antd";
import { connect } from "dva";
import styles from "./ownsetting.css";
export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const liStyle = {
      listStyle: "none"
    };
    const switchStyle = {
      marginLeft: "20rem",
    };
    const imgStyle = {
      width: "6rem",
      height: "6rem",
      marginLeft: "1rem"
    };
    const spanStyle = {
      display: "inline-block",
      width: "10rem",
      fontSize:"18px"
    };
    return (
      <div>
        <Row style={{ marginTop: "1rem" }}>
          <Col span={5} />
          <Col span={8}>
            <Card title="文章设置" hoverable style={{ width: 800 }}>
              <ul>
                <li style={liStyle}>
                  <span style={spanStyle}>项目开放</span>
                  <Switch style={switchStyle}></Switch>
                </li>
                <hr />
                <br />
                <li style={liStyle}>
                  <span style={spanStyle}>项目下载</span>
                  <Switch style={switchStyle}></Switch>
                </li>
                <hr />
                <br />
              </ul>
            </Card>
          </Col>
          <Col span={2} />
        </Row>
      </div>
    );
  }
}
