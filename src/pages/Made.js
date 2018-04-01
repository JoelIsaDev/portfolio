import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";

/* Objects */
import Footer from '../objects/Footer';
import NavLayout from '../objects/NavLayout';

/* Atoms */
import BasicButton from '../atoms/BasicButton';

/* Images */
import MadeSrc from '../imgs/examples/img-joel-hansen_made.png';
import MadeSrcMobile from '../imgs/examples/img-joel-hansen_made-mobile.png';

class Made extends PureComponent {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(
			<div id="workPage">
				<Helmet
					title="Made - Joel Hansen | A Developer, and a Creative Technical Director"
					meta={[
						{name: 'description', content: 'Joel Hansen, a Developer and a Creative Technical Director skilled in React, Sass, React Native, Javascript, jQuery and Express'}
					]}
				/>
				
				<NavLayout
					history={this.props.history}
				/>
				<section className="work-page">
					<h1 className="work-page__headline">
						Made's <span className="no-wrap">Website Redesign</span>
					</h1>
					<div className="work-page__inner-wrap">
						<div className="work-page-wrap--large">
							<div className="work-page__hero-wrap">
								<img src={MadeSrc} alt="" className="work-page__hero" />
								<img src={MadeSrcMobile} alt="" className="work-page__hero-mobile" />
							</div>
							<h2 className="work-page__sub-headline">About The Project</h2>
							<p className="work-page__blurb">
								This was a complete rebuild of Made's website. 
								They wanted to showcase their client work through 
								beautifully designed case study pages, most containing high res images 
								and auto-play videos. The trick was to find a balance that would allow 
								for the work to be shown at its highest quality and still keep load times 
								quick on both desktop and mobile devices. Using a combination of React 
								and Express, we were able to meet that goal <span className="no-wrap">quite well.</span>
							</p>
							<h2 className="work-page__sub-headline">Tech Used</h2>
							<p className="work-page__blurb">
								React . Express . Sass
							</p>

						</div>
						<div className="work-page-wrap--small">
							<h2 className="work-page__sub-headline-small">My Role</h2>
							<ul className="role-wrap">
								<li className="role">
									Creative Technology Director
								</li>
								<li className="role">
									Developer
								</li>
							</ul>
							<p className="role__blurb">
								This was during my time at Made. I oversaw a team of developers, 
								reviewing pull requests and assigning tasks. I worked with producers 
								to create sprints, architected the code structure and coded 
								much of <span className="no-wrap">front-end.</span>
							</p>
							<BasicButton
								text="View Website"
								route="https://www.heymade.com"
								linkOut={true}
								trackClass="jsOutMadeSite"
							/>
						</div>
					</div>
				</section>
				<Footer
					scrollElement='workPage'
				/>
			</div>
		);
	}
}

export default Made;