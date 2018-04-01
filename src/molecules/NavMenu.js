import React, { Component } from 'react';

/* Atoms */
import BasicButton from '../atoms/BasicButton';


class NavMenu extends Component {
	constructor() {
		super();

		this.state = {
			showNav: false
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.findParent = this.findParent.bind(this);
	}

	/*
		Navigates the user to the selected route
		@param {object} e - event
	*/
	handleButtonClick(e) {
		var theElement,
			target = e.target,
			route = target.getAttribute('href');

		e.preventDefault();

		document.body.className = document.body.className.replace('is-locked','');

		if(route === null) {
			theElement = this.findParent(e.target, 'basic-button');
			route = theElement.getAttribute('href')
		}

		this.props.history.push('/'+route);
	}

	/*
		Returns the closest element with the given class
		@param {object} el - the current element
		@param {string} className - the class name of the element you are trying match
		@return {object} el - the matching parent element
	*/
	findParent(el, className) {
		while ((el = el.parentElement) && !el.classList.contains(className));
		return el;
	}

	render() {
		return(
			<div className={this.props.showNav ? 'nav-menu is-active' : 'nav-menu'}>
				<div className="nav-menu-container">
					<BasicButton
						text="Made"
						route="made"
						handleClick={this.handleButtonClick}
						trackClass="NavMade"
					/>
					<BasicButton
						text="ASU GSV"
						route="asu-gsv"
						handleClick={this.handleButtonClick}
						trackClass="NavGSV"
					/>
					<BasicButton
						text="Evol"
						route="evol"
						handleClick={this.handleButtonClick}
						trackClass="NavEvol"
					/>
					<BasicButton
						text="Domino's"
						route="dominos"
						handleClick={this.handleButtonClick}
						trackClass="NavDominos"
					/>
					<BasicButton
						text="Contact"
						route="contact"
						handleClick={this.handleButtonClick}
						trackClass="NavContact"
					/>
				</div>
			</div>

		);
	}
}

export default NavMenu;