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
    componentWillMount() {
        for (let i = 0; i < 4; i++) {
          this.state.listData.push({
            href: "http://ant.design",
            title: `${i}`,
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            description:
              "Ant Design, a design language for background applications, is refined by Ant UED Team.",
            content:
              "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
          });
        }
      }
    render(){
          const {listData}=this.state
          const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
          );
        return(
            <List
              itemLayout="vertical"
              size="default"
              dataSource={listData}
              footer={
                <div>
                  <a>more</a>
                </div>
              }
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText type="star-o" text="156" />,
                    <IconText type="like-o" text="156" />,
                    <IconText type="message" text="2" />
                  ]}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
        )
    }
}