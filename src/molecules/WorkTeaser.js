import React, { PureComponent } from 'react';

/* Atoms */
import BasicButton from '../atoms/BasicButton';

class WorkTeaser extends PureComponent {

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

	render(){
		return(
			<div className="work-teaser">
				<img src={this.props.imageSrc} alt="" className="work-teaser__hero-main" />
				<div className="work-teaser__inner-wrap">
					<h2 className="work-teaser__secondary-headline">
						{this.props.clientName}
					</h2>
					<p className="work-teaser__blurb">
						{this.props.tech}
					</p>
					<BasicButton
						text="View Detials"
						route={this.props.route}
						handleClick={this.handleButtonClick}
					/>
				</div>
			</div>
		);
	}
}

export default WorkTeaser;