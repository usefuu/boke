import react, { Component } from "react";
import { Menu, Icon, Card, Row, Col, List, Avatar } from "antd";
import { Link } from "dva/router";
import { connect } from "dva";
const { Meta } = Card;
@connect(state => ({
  index: state.index
}))
export default class page extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      listData: data,
      likeart: []
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data != this.state.listData) {
      this.setState({ listData: nextProps.data });
    }
  }
  iconclick = (type, item) => {
    const { likeart, listData } = this.state;
    const { dispatch } = this.props;

    let typenumber=type==="star"?'starnumber':'likenumber'
    if(type!='message')
      dispatch({
        type: "index/like",
        payload: { id: item.id, type },
        callback: res => {
          if (res.code === 200) {            
            item[type]?item[typenumber]--:item[typenumber]++
            item[type] = !item[type];
            this.setState({ listData });
          }
        }
      })
    // listData[parseInt(item.id)][type]=false;
    // alert(111);
    // let arr = [];
    // let obj = {
    //   id:null,
    //   star: false,
    //   like: false,
    //   message: false
    // };
    // let i;
    // const { likeart,listData } = this.state;
    // if (!likeart.includes(item.id)&&listData[parseInt(item.id)][type]===false) {
    //   listData[parseInt(item.id)].id=item.id;
    //    listData[parseInt(item.id)][type]=true;
    //    this.setState({listData})
    //    likeart.push(item.id);
    //    console.log(listData)
    // } else {
    //   i = likeart.indexOf(item.id);
    //   listData[parseInt(item.id)].id=item.id;
    //   listData[parseInt(item.id)][type]=false;
    //   arr.concat(likeart.slice(0, i), likeart.slice(i + 1, likeart.length - 1));
    //   this.setState({
    //     likeart: arr
    //   });
    // }
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
    const styles={
      marginTop:"2.5vh"
    }
    return (
      <List
        itemLayout="vertical"
        size="default"
        dataSource={listData}
        style={styles}
        // footer={
        //   <div>
        //     <a>more</a>
        //   </div>
        // }
        renderItem={item => {return(
          <List.Item
            key={item.title}
            actions={[
              <IconText type="star" text={item.starnumber} item={item} />,
              <IconText type="like" text={item.likenumber} item={item} />,
              <IconText type="message" text={item.messagenumber} item={item} />
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
              title={<Link to={"/articlelist/"+parseInt(item.id)}>{item.title}</Link>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}}
      />
    );
  }
}
