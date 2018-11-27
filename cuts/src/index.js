import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import Framework7-React plugin
import Framework7React from 'framework7-react';

// Import main App component
import App from './componenten/App.jsx';

// Framework7 styles
import 'framework7/css/framework7.min.css';

// Icons
import './css/icons.css';

// Custom app styles
import './css/app.css';


import './index.css';
import * as serviceWorker from './serviceWorker';


// Init Framework7-React plugin
Framework7.use(Framework7React);

// Mount React App
ReactDOM.render(
    React.createElement(App),
    document.getElementById('app'),
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
