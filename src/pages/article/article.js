import react, { Component } from "react";
import { Menu, Icon, Card, Row, Col, List, Avatar,Pagination } from "antd";
import { connect } from "dva";
import { Link } from "dva/router";
const { Meta } = Card;
@connect(state => ({
  article: state.article
}))
export default class page extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      listData: data
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data != this.state.listData) {
      this.setState({ listData: nextProps.data });
    }
  }
  iconclick = (type, item) => {
    const { listData } = this.state;
    const { dispatch } = this.props;
    let typenumber = type === "star" ? "starnumber" : "likenumber";
    if (type != "message")
      dispatch({
        type: "article/like",
        payload: { id: item.id, type },
        callback: res => {
          if (res.code === 200) {
            item[type] ? item[typenumber]-- : item[typenumber]++;
            item[type] = !item[type];
            this.setState({ listData });
          }
        }
      });
  };
  render() {
    const { listData } = this.state;
    const IconText = ({ type, text, item }) => {
      let style = type != "message" ? item[type] : null;
      return (
        <span onClick={this.iconclick.bind(this, type, item)}>
          <Icon
            type={type}
            style={{ marginRight: 8, color: style ? "red" : "" }}
          />
          {text}
        </span>
      );
    };
    {console.log(listData)}
    return (
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <Row>
          <Col span={3} />
          <Col span={18}>
            <List
              itemLayout="vertical"
              size="default"
              dataSource={listData}
              // pagination={{
              //   onChange: (page) => {
              //    this.props.pageChange.bind(this,page)
              //   },
              //   pageSize: 10,
              // }}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText type="star" text={item.starnumber} item={item} />,
                    <IconText type="like" text={item.likenumber} item={item} />,
                    <IconText
                      type="message"
                      text={item.messagenumber}
                      item={item}
                    />
                  ]}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src={item.avatar}
                    />
                  }
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={
                      <Link to={"/articlelist/" + parseInt(item.id)}>
                        {item.title}
                      </Link>
                    }
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </Col>
          <Col span={3} />
        </Row>
        <Row style={{marginTop:"10px"}}>
        <Col span={16} />
        <Col span={8} ><Pagination  defaultCurrent={1} total={this.props.total} onChange={this.props.pageChange} /></Col>
        <Col span={3} />
        </Row>
        
        <div style={{height:"7vh",backgroundColor:"#FFFFFF"}}></div>
      </div>
    );
  }
}
