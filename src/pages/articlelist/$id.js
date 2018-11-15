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
import moment from "moment";
@connect(state => ({
  aeticelist: state.aeticelist
}))
export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.getlist({ id });
  }
  getlist = payload => {
    this.props.dispatch({
      type: "aeticelist/getList",
      payload,
      callback:(pagedata)=>{
        const refs=this.refs
        if(pagedata.data!="")
        refs.div.innerHTML = pagedata.data;
        else{
          refs.div.innerHTML="没有内容"
        }
      }
    });
  };
  render() {
    const {
      aeticelist: { pagedata }
    } = this.props;
    return (
      <div style={{backgroundColor:"#FFFFFF",marginBottom:"6vh"}}>
        <Row>
          <Col span={10} />
          <Col span={3}>
            <h1>{pagedata.head}</h1>
          </Col>
          <Col span={6}>
          <span style={{lineHeight:"90px",display:'inline-block',height:'56px'}}>{pagedata.startdata}</span>
          
          {/* {moment(pagedata.startdate).format("YYYY-MM-DD HH:mm:ss")} */}
          </Col>
        </Row>
        <Row>
          <Col span={8} />
          <Col span={10}>
            <div ref="div" />
          </Col>
        </Row>
      </div>
    );
  }
}
