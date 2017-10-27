import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';

function Marketing() {
  return(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Marketing />, document.getElementById('root'));
registerServiceWorker();
injectTapEventPlugin();
