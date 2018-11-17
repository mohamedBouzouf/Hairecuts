// App.jsx

import { App, View, Page, Navbar, Toolbar, Link } from 'framework7-react';
import routes from './routes.js';

const f7params = {
    // Array with app routes
    routes,
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // ...
};

export default () => (
    // Main Framework7 App component where we pass Framework7 params
    <App params={f7params}>
        <Statusbar />

        {/* initial page is specified in routes.js */}
        <View main url="/" />
    </App>
)