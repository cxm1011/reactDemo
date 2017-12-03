import React, { Component } from 'react';
import CounterFlux from './CounterFlux.js';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class ControlPanelFlux extends Component{
	render(){
		return (
			<div style={style}> 
				<CounterFlux caption="First" />
		        <CounterFlux caption="Second" />
		        <CounterFlux caption="Third" />
		        <hr/>
		        <Summary />
			</div>
		);
	}
}

export default ControlPanelFlux;