import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import * as style from "./login.css";
import { connect } from "dva";
const FormItem = Form.Item;
@Form.create()
@connect(state => ({
  login: state.login
}))
export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { dispatch } = this.props;
        dispatch({
          type: "login/getlogin",
          payload: { user: values.userName, password: values.password }
        });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={style.mainBudy}>
        <div className={style.mianform}>
          <Form onSubmit={this.handleSubmit} className={style.form}>
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [{ required: true, message: "账户名" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "密码" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
              {/* <a className={style.forgot} href="">Forgot password</a> */}
              <Button type="primary" htmlType="submit" className={style.button}>
                登录
              </Button>
              {/* Or <a href="">register now!</a> */}
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
