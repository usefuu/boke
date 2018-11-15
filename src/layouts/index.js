import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { IntlProvider } from 'react-intl';
import Headpage from "./head"
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function mapStateToProps(state) {
  return {
    text: state.global.text,
  };
}

export default withRouter(
  
  connect(mapStateToProps)(props => {
    const styleHeader={
      position:"fixed",
      padding:"0 0 ",
      height:"9vh",
      width:"100%",
      backgroundColor:"#FFFFFF",
      zIndex:"999"
    }
    const styleFooter={
      
      textAlign:"center",
      position:"fixed",
      zIndex:"999",
      bottom:"0px",
      height:"5vh",
      lineHeight:"4vh",
      width:"100%",
      padding:"0px"
    }
    const layoutStyle={
    
      
    }
    const contentStyle={
      marginTop:"10vh",
      marginLeft:"10%",
      width:"80%",
      minHeight:"82vh"
    }
    {console.log(props)}
    return (
      <IntlProvider locale="en">
      <Layout style={layoutStyle}>
      <Header  style={styleHeader}><Headpage location={props.location}/></Header>
      <Content style={contentStyle}>{props.children}</Content>
      
      <Footer style={styleFooter}><div style={{height:"1vh"}}></div><div style={{backgroundColor:"#FFFFFF",}}>@666</div></Footer>
    </Layout>
      </IntlProvider>
    );
  }),
);
