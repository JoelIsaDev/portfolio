import React, { PureComponent } from 'react';

/* Molecules */
import AboutSection from '../molecules/AboutSection';

class AboutMe extends PureComponent {
	render(){
		return(
			<section className="about-me-wrap" id="jsAboutMe">
				<h1>
					My Strengths
				</h1>
				<h2>
					lorem ipsum lorem ipsum
				</h2>

				<div className="about-me-section-wrap">
					<AboutSection />
					<AboutSection />
					<AboutSection />
				</div>

			</section>
		);
	}
}

export default AboutMe;