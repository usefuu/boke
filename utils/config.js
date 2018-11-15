const API = `/api`;

module.exports = {
  CORS: [],
  api: {
    login:`${API}/login`,
    index:{
      list:`${API}/index`,
      like:`${API}/index/like`
    },
    articlelist:{
      list:`${API}/articlelist`
    },
    article:{
      list:`${API}/article`
    },
    workshow:{
      list:`${API}/workshow`
    }
  },
 
};
