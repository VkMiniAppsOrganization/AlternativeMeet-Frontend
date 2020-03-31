import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '@vkontakte/vkui/dist/vkui.css'
import App from "./components/App";

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
