import React from 'react';
import React from 'react-dom';
import '../index.css';

import startServicesWorker from './startservicesworker';


ReactDOM.render(<app/>, document.getElementsByClassName("root"));
startServicesWorker();