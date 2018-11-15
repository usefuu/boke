import react, { Component } from "react";
import { Link } from "dva/router";
import { Menu, Icon, Row, Col, Avatar, Badge } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Headpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current:""
    };
  }
  handleClick=(e)=>{
    this.setState({
      current: e.key,
    });
  }
  componentWillMount(){
    let location=this.props.location;
    this.searchcurrent(location)
  }
  componentWillReceiveProps(nextprops){
    let location=nextprops.location
    if(nextprops.location!=this.props.location)
    {
      this.searchcurrent(location)
    }
  }
  searchcurrent=(location)=>{
    location=location.pathname.split("/")
    switch(location[1]){
      case "":this.setState({
        current:"home"
      });break;
      case "article":
      this.setState({
        current:"app"
      });break;
      case "workShow":
      this.setState({
        current:"one"
      });break;
      case "setting":
      if(location[2]==="ownsetting"){
        this.setState({
          current:"setting:1"
        });
      }
      else if(location[2]==="articlesetting")
      {
        this.setState({
          current:"setting:2"
        });
      }
      else if(location[2]==="worksetting")
      {
        this.setState({
          current:"setting:3"
        });
      }
      break;
      default :{break;}
    }
  }
  render() {
    const style = {
      width: "80%",
      height: "100%",
      padding: "0 0 ",
      lineHeight: "48px"
    };
    const styleRow = {
      marginTop: "20px",
      width: "80%",
      marginLeft: "20%"
    };
    const iconSytle = {
      display: "inline-block",
      fontSize: "26px",
      color: "#000000",
      lineHeight: "48px"
    };
    const imgStyle = {
      height: "50px"
    };
    return (
      <Row style={styleRow}>
        <Col span={2} />
        <Col span={2}>
          <Link to="/">
            <img
              src={require("../../logs/log.jpg")}
              style={imgStyle}
              alt="图标"
            />
          </Link>
        </Col>
        <Col span={8}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={style}
          >
            <Menu.Item key="home">
              <Link to="/">
                <Icon type="home" />
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key="app">
              <Link to="/article">
                <Icon type="appstore" />
                文章
              </Link>
            </Menu.Item>
            <Menu.Item key="one">
              <Link to="/workShow">
                <Icon type="appstore" />
                个人制作
              </Link>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />
                  设置
                </span>
              }
            >
              <MenuItemGroup>
                <Menu.Item key="setting:1">
                  <Link to="/setting/ownsetting">个人设置 </Link>
                </Menu.Item>
                <Menu.Item key="setting:2"><Link to="/setting/articlesetting">文章设置</Link></Menu.Item>
                <Menu.Item key="setting:3"><Link to="/setting/worksetting">制作设置</Link></Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </Col>
        <Col span={8}>
          <span style={iconSytle}>
            <Link to="/myself">
              <Badge count={5}>
                <Avatar shape="square" icon="user" />
              </Badge>
            </Link>
          </span>
        </Col>
      </Row>
    );
  }
}
