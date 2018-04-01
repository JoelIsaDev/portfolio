import React, { Component } from 'react';

class Nav extends Component {

	render() {
		return(
			<div className={this.props.showNav ? 'nav-wrap is-active' : 'nav-wrap'} onClick={this.props.toggleFullNav}>
				<span className="nav-bar"></span>
				<span className="nav-bar"></span>
				<span className="nav-bar"></span>
				<span className="nav-bar"></span>
			</div>
		);
	}
}

export default Nav;