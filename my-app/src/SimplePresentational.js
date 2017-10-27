import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

function SimplePresentational(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200, height: 200, backgroundColor: '#FF8000', borderRadius:10, margin: 20}}>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
        <div style={{width: 30, height: 30, margin: 10, borderRadius: 5, backgroundColor: 'red'}}/>
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
        <div style={{width : 30, height: 30, margin: 10, borderRadius: 5, backgroundColor: 'yellow'}}/>
        <div style={{width : 30, height: 30, margin: 10, borderRadius: 5, backgroundColor: 'yellow'}}/>
        <div style={{width: 30, height: 30, margin: 10, borderRadius: 5, backgroundColor: 'yellow'}}/>
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
        <div style={{flex: 1, height: 30, margin: 10, borderRadius: 5, backgroundColor: 'blue'}}/>
        <div style={{flex: 1, height: 30, margin: 10, borderRadius: 5, backgroundColor: 'blue'}}/>
        <div style={{flex: 1, height: 30, margin: 10, borderRadius: 5, backgroundColor: 'blue'}}/>
        <div style={{flex: 1, height: 30, margin: 10, borderRadius: 5, backgroundColor: 'blue'}}/>
      </div>
    </div>
  );
}

export default SimplePresentational;