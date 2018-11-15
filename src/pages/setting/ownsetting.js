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
  Avatar
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
    const inputStyle = {
      width: 550,
      height: 50,
      marginLeft: "1rem",
      border: "none"
    };
    const imgStyle = {
      width: "6rem",
      height: "6rem",
      marginLeft: "1rem"
    };
    const spanStyle = {
      display: "inline-block",
      width: "4rem"
    };
    return (
      <div>
        <Row style={{ marginTop: "1rem" }}>
          <Col span={5} />
          <Col span={8}>
            <Card title="个人资料" hoverable style={{ width: 800 }}>
              <ul>
                <li style={liStyle}>
                  <span style={spanStyle}>头像</span>
                  <img
                    src={require("../../../logs/head.jpg")}
                    style={imgStyle}
                  />
                  <Button>上传图片</Button>
                </li>
                <hr />
                <br />
                <li style={liStyle}>
                  <span style={spanStyle}>账号</span>
                  <Input
                    style={inputStyle}
                    placeholder="账号"
                    className={styles.inpout}
                  />
                  <Icon type="edit" />
                  修改
                </li>
                <hr />
                <br />
                <li style={liStyle}>
                  <span style={spanStyle}>密码</span>
                  <Input
                    style={inputStyle}
                    placeholder="密码"
                    className={styles.inpout}
                  />
                  <Icon type="edit" />
                  修改
                </li>
                <hr />
                <br />
                <li style={liStyle}>
                  <span style={spanStyle}>邮箱</span>
                  <Input
                    style={inputStyle}
                    placeholder="邮箱"
                    className={styles.inpout}
                  />
                  <Icon type="edit" />
                  修改
                </li>
                <hr />
                <br />
                <li style={liStyle}>
                  <span style={spanStyle}>用户名</span>
                  <Input
                    style={inputStyle}
                    placeholder="用户名"
                    className={styles.inpout}
                  />
                  <Icon type="edit" />
                  修改
                </li>
                <hr />
                <br />
                <li style={liStyle}>
                  <span style={spanStyle}>个人介绍</span>
                  <Input
                    style={inputStyle}
                    placeholder="个人介绍"
                    className={styles.inpout}
                  />
                  <Icon type="edit" />
                  修改
                </li>
                <hr />
              </ul>
            </Card>
          </Col>
          <Col span={2} />
        </Row>
      </div>
    );
  }
}
