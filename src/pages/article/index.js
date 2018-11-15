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
  Breadcrumb
} from "antd";
import Articlediv from "./article";
import { connect } from "dva";
@connect(state => ({
  article: state.article
}))
export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "所有文章"
    };
  }
  componentWillMount() {
    this.getlist({ type: "all",pageSize:5,pageNumber:1 });
  }
  getlist = payload => {
    const { dispatch } = this.props;
    dispatch({
      type: "article/getList",
      payload
    });
    let type = payload.type;
    type =
      type === "all"
        ? "所有文章"
        : type === "Focus"
          ? "我的关注"
          : type === "frontend"
            ? "前端"
            : type === "behind"
              ? "后台"
              : type === "java"
                ? "java"
                : null;
    this.setState({ type });
  };
  pageChange=(pageNumber)=>{
    let {type}=this.state
    type =
      type === "所有文章"
        ? "all"
        : type === "我的关注"
          ? "Focus"
          : type === "前端"
            ? "frontend"
            : type === "后台"
              ? "behind"
              : type === "java"
                ? "java"
                : null;
    this.getlist({ type,pageSize:5,pageNumber});
  }
  clockchange = type => {
    this.getlist({ type,pageSize:5,pageNumber:1  });
  };
  render() {
    const breadSytle = {
      fontSize: "16px"
    };
    const {
      article: { pagedata }
    } = this.props;
    const { type } = this.state;
    return (
      <div>
        <div
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "#FFFFFF"
          }}
        >
          <Row>
            <Col span={8}>
              <Row>
                <Col span={15} />
                <Col span={4}>
                  <span style={{ fontSize: "18px" }}>{type}</span>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Breadcrumb
                style={breadSytle}
                separator={
                  <span style={{ display: "inline-block", width: "2.5rem" }} />
                }
              >
                <Breadcrumb.Item>
                  <a
                    onClick={this.clockchange.bind(this, "all")}
                    style={{ color: type === "所有文章" ? "#1890FF" : null }}
                  >
                    所有文章
                  </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a
                    onClick={this.clockchange.bind(this, "Focus")}
                    style={{ color: type === "我的关注" ? "#1890FF" : null }}
                  >
                    我的关注
                  </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a
                    onClick={this.clockchange.bind(this, "frontend")}
                    style={{ color: type === "前端" ? "#1890FF" : null }}
                  >
                    前端
                  </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a
                    onClick={this.clockchange.bind(this, "behind")}
                    style={{ color: type === "后台" ? "#1890FF" : null }}
                  >
                    后台
                  </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a
                    onClick={this.clockchange.bind(this, "java")}
                    style={{ color: type === "java" ? "#1890FF" : null }}
                  >
                    java
                  </a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col span={8} />
          </Row>
        </div>
        <div>{pagedata.listData && <Articlediv data={pagedata.listData} pageChange={this.pageChange} total={pagedata.total}/>}</div>
      </div>
    );
  }
}
