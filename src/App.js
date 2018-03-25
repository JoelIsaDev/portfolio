import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//** Pages **//
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

//** CSS **//
import './generated/styles/index.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route exact path='/'
					render={(props) =>
						<Home {...props}
						/>}
					/>

					<Route exact path='/contact'
					render={(props) =>
						<Contact {...props}
						/>}
					/>
					
					<Route path='*'
					render={(props) =>
						<NotFound {...props}
						/>}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
