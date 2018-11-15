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
import Item from "./item";
@connect(state => ({
  workShow: state.workShow
}))
export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount(){
    this.props.dispatch({
      type:"workShow/getList",
      payload:{number:6,pageNumber:1}
    })
  }
  render() {
    const {workShow:{
      list
    }}=this.props
    debugger
    return (
      <div style={{backgroundColor:"#FFFFFF"}}>
        {list&&<Item data={list}/>}
      </div>
    );
  }
}
