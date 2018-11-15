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
    const cardStyle = {
      width: 300,
      marginTop:'4vh',
      marginLeft: "15%"
    };
    const {data}=this.props
    return (
      
      <Card
        style={cardStyle}
        cover={
          <img
            alt="example"
            src={data.img}
          />
        }
        actions={[
          <span><Icon type="eye" />{data.eye}</span>,
          <span><Icon type="heart" />{data.heart}</span>,
          <span><Icon type="star" />{data.star}</span>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src={data.avatar} />
          }
          title={data.title}
          description={data.description}
        />
      </Card>
    );
  }
}
