import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/myself",
        "exact": true,
        "component": require('../myself/index.js').default
      },
      {
        "path": "/article/article",
        "exact": true,
        "component": require('../article/article.js').default
      },
      {
        "path": "/articlelist/:id",
        "exact": true,
        "component": require('../articlelist/$id.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index/index.js').default
      },
      {
        "path": "/index/left",
        "exact": true,
        "component": require('../index/left.js').default
      },
      {
        "path": "/index/middle",
        "exact": true,
        "component": require('../index/middle.js').default
      },
      {
        "path": "/index/right",
        "exact": true,
        "component": require('../index/right.js').default
      },
      {
        "path": "/article",
        "exact": true,
        "component": require('../article/index.js').default
      },
      {
        "path": "/myself/myselfarticle",
        "exact": true,
        "component": require('../myself/myselfarticle.js').default
      },
      {
        "path": "/myself/myselfwork",
        "exact": true,
        "component": require('../myself/myselfwork.js').default
      },
      {
        "path": "/myself/onecard",
        "exact": true,
        "component": require('../myself/onecard.js').default
      },
      {
        "path": "/setting/articlesetting",
        "exact": true,
        "component": require('../setting/articlesetting.js').default
      },
      {
        "path": "/setting/ownsetting",
        "exact": true,
        "component": require('../setting/ownsetting.js').default
      },
      {
        "path": "/setting/worksetting",
        "exact": true,
        "component": require('../setting/worksetting.js').default
      },
      {
        "path": "/userlogin/login",
        "exact": true,
        "component": require('../userlogin/login.js').default
      },
      {
        "path": "/workShow",
        "exact": true,
        "component": require('../workShow/index.js').default
      },
      {
        "path": "/workShow/item",
        "exact": true,
        "component": require('../workShow/item.js').default
      },
      {
        "component": () => React.createElement(require('c:/Users/Administrator/Desktop/boke_demo/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/myself","exact":true,"component":"./src/pages/myself/index.js"},{"path":"/article/article","exact":true,"component":"./src/pages/article/article.js"},{"path":"/article/model","exact":true,"component":"./src/pages/article/model.js"},{"path":"/article/service","exact":true,"component":"./src/pages/article/service.js"},{"path":"/articlelist/model","exact":true,"component":"./src/pages/articlelist/model.js"},{"path":"/articlelist/service","exact":true,"component":"./src/pages/articlelist/service.js"},{"path":"/articlelist/:id","exact":true,"component":"./src/pages/articlelist/$id.js"},{"path":"/","exact":true,"component":"./src/pages/index/index.js"},{"path":"/index/left","exact":true,"component":"./src/pages/index/left.js"},{"path":"/index/middle","exact":true,"component":"./src/pages/index/middle.js"},{"path":"/index/model","exact":true,"component":"./src/pages/index/model.js"},{"path":"/index/right","exact":true,"component":"./src/pages/index/right.js"},{"path":"/index/service","exact":true,"component":"./src/pages/index/service.js"},{"path":"/article","exact":true,"component":"./src/pages/article/index.js"},{"path":"/myself/myselfarticle","exact":true,"component":"./src/pages/myself/myselfarticle.js"},{"path":"/myself/myselfwork","exact":true,"component":"./src/pages/myself/myselfwork.js"},{"path":"/myself/onecard","exact":true,"component":"./src/pages/myself/onecard.js"},{"path":"/setting/articlesetting","exact":true,"component":"./src/pages/setting/articlesetting.js"},{"path":"/setting/ownsetting","exact":true,"component":"./src/pages/setting/ownsetting.js"},{"path":"/setting/worksetting","exact":true,"component":"./src/pages/setting/worksetting.js"},{"path":"/userlogin/login","exact":true,"component":"./src/pages/userlogin/login.js"},{"path":"/userlogin/model","exact":true,"component":"./src/pages/userlogin/model.js"},{"path":"/userlogin/service","exact":true,"component":"./src/pages/userlogin/service.js"},{"path":"/workShow","exact":true,"component":"./src/pages/workShow/index.js"},{"path":"/workShow/item","exact":true,"component":"./src/pages/workShow/item.js"},{"path":"/workShow/model","exact":true,"component":"./src/pages/workShow/model.js"},{"path":"/workShow/service","exact":true,"component":"./src/pages/workShow/service.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
