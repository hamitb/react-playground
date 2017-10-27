import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import SimpleCard from './SimpleCard';
import SimpleSwitch from './SimpleSwitch';
import SimpleDiv from './SimplePresentational';
import Menu from 'material-ui-icons/Menu';
import SimpleDrawer from './SimpleDrawer';
import './App.css';

const styleSheet = createStyleSheet('SimpleApp', theme => ({
  root: {
    position: 'relative',
    marginTop: 0,
    width: '100%',    
  },
  card: {
    width: 300,
  },
}));


class App extends Component {
  render() {
    return (
      <div className={styleSheet.root}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <SimpleCard/>
          <SimpleDiv/>
        </div>
        <SimpleSwitch/>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 350, marginTop: 20}}>
          <Button raised color="accent">Accent</Button>
          <Button raised color="primary">Primary</Button>
          <Button raised color="contrast">Contrast</Button>
        </div>
        <div style={{display: 'flex', backgroundColor: '#c9c9c9', justifyContent: 'center'}}>
          <SimpleDrawer/>
        </div>
      </div>
    );
  }
}

export default App;
