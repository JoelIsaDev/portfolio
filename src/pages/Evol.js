import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";

/* Objects */
import Footer from '../objects/Footer';
import NavLayout from '../objects/NavLayout';

/* Atoms */
import BasicButton from '../atoms/BasicButton';

/* Images */
import EvolSrc from '../imgs/examples/img-joel-hansen_evol.png';
import EvolSrcMobile from '../imgs/examples/img-joel-hansen_evol-mobile.png';

class Evol extends PureComponent {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(
			<div id="workPage">
				<Helmet
					title="Evol - Joel Hansen | A developer and creative technical director"
					meta={[
						{name: 'description', content: 'Joel Hansen, a developer and a creative technical director skilled in React, Sass, React Native, Javascript, jQuery, RESTful APIs, and Express'}
					]}
				/>
				<NavLayout
					history={this.props.history}
				/>
				<section className="work-page">
					<h1 className="work-page__headline">
						Evol Foods <span className="no-wrap">Website Redesign</span>
					</h1>
					<div className="work-page__inner-wrap">
						<div className="work-page-wrap--large">
							<div className="work-page__hero-wrap">
								<img src={EvolSrc} alt="" className="work-page__hero" />
								<img src={EvolSrcMobile} alt="" className="work-page__hero-mobile" />
							</div>
							<h2 className="work-page__sub-headline">About The Project</h2>
							<p className="work-page__blurb">
								Evol asked us to make over their site and provide them with a new CMS. 
								We decided that Wordpress would be the best option. We moved forward 
								with a &#34;decoupled&#34; or &#34;headless&#34; version, meaning that we were only using Wordpress 
								for it's CMS capabilities and everything else we built was completely custom and separated. 
								This allowed us to give admins the Wordpress CMS they expected, and 
								users who visited the site a fast loading and <span className="no-wrap">unique experience.</span>
							</p>
							<h2 className="work-page__sub-headline">Tech Used</h2>
							<p className="work-page__blurb">
								Wordpress . jQuery . PHP . Sass . Grunt
							</p>

						</div>
						<div className="work-page-wrap--small">
							<h2 className="work-page__sub-headline-small">My Role</h2>
							<ul className="role-wrap">
								<li className="role">
									Developer
								</li>
							</ul>
							<p className="role__blurb">
								This was during my time at Made and I was responsible for 
								both the front-end and back-end on <span className="no-wrap">this project</span>
							</p>
							<BasicButton
								text="View Website"
								route="http://www.evolfoods.com"
								linkOut={true}
								trackClass="jsOutGSVSite"
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

export default Evol;