import React, { PureComponent } from 'react';

/* Images */
import Logo from '../imgs/logo.svg';

class AboutSection extends PureComponent {
	render(){
		return(
			<div className="about-me-section">
				<h3 className="about-me-section__headline">
					lorem ipsum
				</h3>
				<img src={Logo} alt="" className="about-me-section__icon" />

				<p className="about-me-section__blurb">
					lorem ipsum lorem ipsum lorem ipsum
					lorem ipsum lorem ipsum lorem ipsum
				</p>
			</div>
		);
	}
}

export default AboutSection;