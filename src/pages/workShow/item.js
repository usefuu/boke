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
import { list } from "postcss";
import styles from "./item.css";
const { Meta } = Card;
export default class page extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = { data };
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.data != this.props.data) {
      this.setState({
        data: nextprops.data
      });
    }
  }
  render() {
    const { data } = this.state;
    return (
      <div style={{ background: "#FFFFF", padding: "30px", minHeight: "90vh" }}>
        <div
          style={{
            width: "1000px",
            margin: "0 auto",
            marginTop: "20px",
            marginBottom: "40px"
          }}
        >
          <Row gutter={8}>
            {data &&
              data.map((item, i) => {
                return (
                  <Col
                    span={8}
                    key={i}
                    style={{ marginTop: i >= 3 ? "20px" : "" }}
                  >
                    <div className={styles.card}>
                      <div className={styles.img}>
                        <img src={item.img} />
                        <div className={styles.corver} >{item.content}</div>
                      </div>
                      <div className={styles.container}>
                        <div>
                          <img src={item.headimg} />
                        </div>
                        <div className={styles.title}>
                          <div>{item.title}</div>
                          <div>{item.subtitle}</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    );
  }
}
