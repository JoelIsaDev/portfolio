import React, { Component } from 'react';

class BasicButton extends Component {
	render() {
		return(
			<a 
				className='basic-button'
				href={this.props.route} 
				onClick={this.props.handleClick}
				// onMouseEnter={this.props.mouseIn}
				// onMouseLeave={this.props.mouseOut}
			>
				<span className="basic-button__text">{this.props.text}</span>
			</a>
		);
	}
}

export default BasicButton;