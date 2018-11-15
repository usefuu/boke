import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('c:/Users/Administrator/Desktop/boke_demo/src/dva.js').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'global', ...(require('c:/Users/Administrator/Desktop/boke_demo/src/models/global.js').default) });
app.model({ namespace: 'model', ...(require('c:/Users/Administrator/Desktop/boke_demo/src/pages/article/model.js').default) });
app.model({ namespace: 'model', ...(require('c:/Users/Administrator/Desktop/boke_demo/src/pages/articlelist/model.js').default) });
app.model({ namespace: 'model', ...(require('c:/Users/Administrator/Desktop/boke_demo/src/pages/index/model.js').default) });
app.model({ namespace: 'model', ...(require('c:/Users/Administrator/Desktop/boke_demo/src/pages/userlogin/model.js').default) });
app.model({ namespace: 'model', ...(require('c:/Users/Administrator/Desktop/boke_demo/src/pages/workShow/model.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
