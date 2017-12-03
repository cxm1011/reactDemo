// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './ClickCounter';
import ControlPanel from './ControlPanel';
import ControlPanelFlux from './flux_demo/views/ControlPanelFlux';
import ControlPanelRedux from './redux_demo/views/ControlPanel';
import './index.css';

ReactDOM.render(
  // <ClickCounter/>,
  //<ControlPanel/>,    //react界面
  //<ControlPanelFlux/>,  //看fluxDemo页面
  <ControlPanelRedux/>, //看reduxDemo页面
  document.getElementById('root')
);

