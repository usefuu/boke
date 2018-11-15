import React, { Component } from "react";
import {
  Menu,
  Icon,
  Card,
  Row,
  Col,
  List,
  Avatar,
  Button,
  Breadcrumb
} from "antd";
import Articlediv from "./myselfarticle";
import Onecard from "./onecard";
import Workshow from "./myselfwork";
import { connect } from "dva";
import { Link } from "dva/router";
export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  articleClick = () => {
    const { show } = this.state;
    if (show !== true) {
      this.setState({
        show: true
      });
    }
  };
  workClick = () => {
    const { show } = this.state;
    if (show !== false) {
      this.setState({
        show: false
      });
    }
  };
  render() {
    const breadSytle = {
      fontSize: "16px"
    };
    const { show } = this.state;
    {
      console.log(show);
    }
    return (
      <div style={{backgroundColor:"#FFFFFF"}}>
        <Row>
          <Col span={6} />
          <Col span={8}>
            <Onecard />
          </Col>
          <Col span={8} />
        </Row>
        <Row>
          <Col span={9} />
          <Col span={8}>
            <Breadcrumb style={breadSytle}>
              <Breadcrumb.Item>
                <a onClick={this.articleClick}>我的文章</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a onClick={this.workClick}>我的作品</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={8} />
        </Row>
        <Row>
          <Col span={5} />
          <Col span={12}>
            <span style={{ display: show ? "inline-block" : "none" }}>
              <Articlediv />
            </span>
            <span style={{ display: show ? "none" : "inline-block" }}>
              <Workshow />
            </span>
          </Col>
          <Col span={2} />
        </Row>
      </div>
    );
  }
}
