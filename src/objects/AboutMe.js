import React, { PureComponent } from 'react';

/* Molecules */
import AboutSection from '../molecules/AboutSection';

class AboutMe extends PureComponent {
	render(){
		return(
			<section className="about-me-wrap" id="jsAboutMe">
				<h1 className="about-me-headline">
					My Strengths
				</h1>
				<h2 className="about-me-secondary-headline">
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