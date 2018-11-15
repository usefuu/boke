import react, { Component } from "react";
import { Menu, Icon, Card, Row, Col, List, Avatar } from "antd";
import { connect } from "dva";
import Leftcard from "./left";
import Middle from "./middle";
import Right from "./right";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Meta } = Card;
@connect(state => ({
  index: state.index
}))
export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };
  }
  componentWillMount() {
    this.getlist({ numb: 10 });
  }
  componentDidMount() {
    let scrollHandler = this.handleScroll.bind(this);
    window.addEventListener("scroll", scrollHandler);
  }

  getlist = payload => {
    const { dispatch } = this.props;
    dispatch({
      type: "index/getList",
      payload
    });
  };
  handleCon = scrollTop => {
    let { number } = this.state;
    const {
      index: { total }
    } = this.props;
    if (scrollTop - 1010 - ((number - 1)* 1920) >= 0) {
      number = number + 1;
      this.setState(
        {
          number
        },
        () => {
          console.log(1)
          let numb = 10 * this.state.number;
          if (numb <= total) this.getlist({ numb: numb });
        }
      );
    }
    //滚动条距离页面的高度
  };

  handleScroll = event => {
    let scrollTop = document.documentElement.scrollTop;
    this.handleCon(scrollTop);
  };

  render() {
    const {
      index: { middata,rightdata,leftdata }
    } = this.props;
    return (
      <div style={{backgroundColor:"#FFFFFF" }} ref="indexpage">
        <Row>
          <Col span={6} style={{ marginRight: "20px" }}>
           { leftdata&&<Leftcard data={leftdata}/>}
          </Col>
          <Col span={11} style={{ marginRight: "20px" }}>
            {middata && <Middle data={middata} />}
          </Col>
          <Col span={6}>
          {rightdata && <Right data={rightdata} />}
          </Col>
        </Row>
      </div>
    );
  }
}
