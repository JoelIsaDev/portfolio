import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//** Pages **//
import Home from './pages/Home';
import Made from './pages/Made';
import Dominos from './pages/Dominos';
import GSV from './pages/GSV';
import Evol from './pages/Evol';
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

					<Route exact path='/made'
					render={(props) =>
						<Made {...props}
						/>}
					/>

					<Route exact path='/dominos'
					render={(props) =>
						<Dominos {...props}
						/>}
					/>

					<Route exact path='/asu-gsv'
					render={(props) =>
						<GSV {...props}
						/>}
					/>

					<Route exact path='/evol'
					render={(props) =>
						<Evol {...props}
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
