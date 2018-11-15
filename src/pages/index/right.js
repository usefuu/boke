import react, { Component } from "react";
import { Menu, Icon, Card, Row, Col, List, Avatar } from "antd";
import { connect } from "dva";
const { Meta } = Card;
export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const style = {
      marginTop:"2.5vh"
    };
    const { data } = this.props;
    return (
      <List
        style={style}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
              }
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    );
  }
}
