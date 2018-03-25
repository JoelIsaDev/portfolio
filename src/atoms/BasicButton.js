import React, { Component } from 'react';

class BasicButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			backgroundPosition: 'left',
		}

		this.setBackgroundCenter = this.setBackgroundCenter.bind(this);
		this.setBackgroundRight = this.setBackgroundRight.bind(this);

	}

	/*
		Moves the hover state for the button to center
	*/
	setBackgroundCenter() {
		this.setState({
			backgroundPosition: 'center',
		});
	}

	/*
		Moves the hover state for the button to the right
	*/
	setBackgroundRight() {
		var _this = this;

		this.setState({
			backgroundPosition: 'right',
		}, function(){
			setTimeout(function(){
				_this.setState({
					//return hover state to the left
					backgroundPosition: 'left'
				});
			}, 250);
		});
	}


	render() {
		return(
			<a 
				className={this.state.backgroundPosition+ ' basic-button'}
				href={this.props.route} 
				onClick={this.props.handleClick}
				onMouseEnter={this.setBackgroundCenter}
				onMouseLeave={this.setBackgroundRight}
			>
				<span className="basic-button__text">{this.props.text}</span>
			</a>
		);
	}
}

export default BasicButton;