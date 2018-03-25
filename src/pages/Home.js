import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";

/* Atoms */
import BasicButton from '../atoms/BasicButton';

/* Images */
import Logo from '../imgs/logo.svg';

class Home extends PureComponent {
	constructor(props) {
		super(props);

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
			<section className="home-panel--full">
				<Helmet
					title="Joel Hansen | LOREM IPSUM"
					meta={[
						{name: 'description', content: 'Joel Hansen, LOREM IPSUM'}
					]}
				/>

				<img src={Logo} alt="" className="logo" />

				<h1 className="home-panel__headline">
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				</h1>

				<BasicButton
					text="I am available for hire"
					route="contact"
					handleClick={this.handleButtonClick}
				/>

			</section>
		);
	}
}

export default Home;