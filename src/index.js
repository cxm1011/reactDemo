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
import './index.css';

ReactDOM.render(
  // <ClickCounter/>,
  <ControlPanel/>,
  document.getElementById('root')
);

