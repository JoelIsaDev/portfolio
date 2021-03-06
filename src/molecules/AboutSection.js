import React, { PureComponent } from 'react';


class AboutSection extends PureComponent {
	render() {

		if(this.props.multiline) {
			return(
				<div className="about-me-section">
					<h3 className="about-me-section__headline">
						{this.props.headline}
					</h3>
					<svg viewBox={this.props.viewbox} className="about-me-section__icon">
						<path d="m86.1 63c0 4.5-3.7 8.2-8.2 8.2h-61.3c-4.5 0-8.2-3.7-8.2-8.2v-34.7c0-4.5 3.7-8.2 8.2-8.2h61.3c4.5 0 8.2 3.7 8.2 8.2zm-7.1-.4v-34.3c0-1-.7-1.7-1.7-1.7h-60.6c-1 0-1.7.8-1.7 1.7v34.3c0 1 .8 1.7 1.7 1.7h60.6c1 .1 1.7-.7 1.7-1.7z" fill="#FF5733"/>
						<path d="m91.6 77c0 2.5-2.1 4.6-4.6 4.6h-80c-2.5 0-4.6-2.1-4.6-4.6v-3.4h89.2z" fill="#FF5733"/>
						<path d="m31.8 45.8 6.6 6.6-3.2 3.2-9.7-9.6 9.5-10.5 3.4 3z"/>
						<path d="m62.2 45.2-6.5-6.5 3.2-3.2 9.6 9.6-9.5 10.5-3.3-3.1z"/>
						<path d="m45.2 56.5-4.2-1.6 7.9-20.4 4.2 1.7z"/>
					</svg>
					<p className="about-me-section__blurb">
						{this.props.blurb}
					</p>
				</div>
			);
		}
		else {
			return(
				<div className="about-me-section">
					<h3 className="about-me-section__headline">
						{this.props.headline}
					</h3>
					<svg viewBox={this.props.viewbox} className="about-me-section__icon">
						<path d={this.props.icon}></path>
					</svg>
					<p className="about-me-section__blurb">
						{this.props.blurb}
					</p>
				</div>
			);
		}
	}
}

export default AboutSection;