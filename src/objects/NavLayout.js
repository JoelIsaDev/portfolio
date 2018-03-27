import React, { PureComponent } from 'react';

/* Molecules */
import Nav from '../molecules/Nav';
import NavMenu from '../molecules/NavMenu';

/* Images */
import Logo from '../imgs/logo.svg';

class NavLayout extends PureComponent {

	constructor() {
		super();

		this.state = {
			showNav: false
		}

		this.toggleFullNav = this.toggleFullNav.bind(this);
		this.handleNavClick = this.handleNavClick.bind(this);
		this.findParent = this.findParent.bind(this);
		this.toggleBodyScroll = this.toggleBodyScroll.bind(this);
	}

	/*
		Toggles a class to prevent scrolling on the body of the page
	*/
	toggleBodyScroll() {
		document.body.classList.toggle('is-locked');
	}

	/*
		Toggles the Hamburger Menu open and closed
	*/
	toggleFullNav() {
		var showNav = !this.state.showNav;

		this.setState({
			showNav
		});

		this.toggleBodyScroll();
	}

	/*
		Navigates the user home
		@param {object} e - event
	*/
	handleNavClick(e) {
		var theElement,
			target = e.target,
			route = target.getAttribute('href');

		e.preventDefault();

		document.body.className = document.body.className.replace('is-locked','');

		window.scrollTo(0,0);

		if(route === null) {
			theElement = this.findParent(e.target, 'logo-wrap');
			route = theElement.getAttribute('href')
		}

		this.props.history.push(route);

		this.setState({
			showNav: false
		});
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
			<div className="header">
					<a href="/" onClick={this.handleNavClick} className="logo-wrap">
						<img src={Logo} alt="" className="logo" />
					</a>

					<Nav
						toggleFullNav={this.toggleFullNav}
						showNav={this.state.showNav}
					/>

					<NavMenu 
						showNav={this.state.showNav}
						history={this.props.history}
					/>
			</div>
		);
	}
}

export default NavLayout;
