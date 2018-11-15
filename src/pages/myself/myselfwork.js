import react, { Component } from "react";
import { Menu, Icon, Card, Row, Col, List, Avatar } from "antd";
import { connect } from "dva";
const { Meta } = Card;
export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }
  
  render() {
    const data = [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
        {
          title: 'Title 4',
        },
        {
          title: 'Title 5',
        },
        {
          title: 'Title 6',
        },
      ];
    return (
      <div>
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>{item.title}</Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
