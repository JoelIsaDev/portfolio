import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";

/* Objects */
import Footer from '../objects/Footer';
import NavLayout from '../objects/NavLayout';

/* Atoms */
import BasicButton from '../atoms/BasicButton';

/* Images */
import GSVSrc from '../imgs/examples/img-joel-hansen_gsv.png';
import GSVSrcMobile from '../imgs/examples/img-joel-hansen_gsv-mobile.png';

class GSV extends PureComponent {
	
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(
			<div id="workPage">
				<Helmet
					title="ASU/GSV - Joel Hansen | A Developer and a Creative Technical Director"
					meta={[
						{name: 'description', content: 'Joel Hansen, a Developer and a Creative Technical Director skilled in React, Sass, React Native, Javascript, jQuery and Express'}
					]}
				/>
				
				<NavLayout
					history={this.props.history}
				/>
				<section className="work-page">
					<h1 className="work-page__headline">
						ASU GSV Summit <span className="no-wrap">Website Redesign</span>
					</h1>
					<div className="work-page__inner-wrap">
						<div className="work-page-wrap--large">
							<div className="work-page__hero-wrap">
								<img src={GSVSrc} alt="" className="work-page__hero" />
								<img src={GSVSrcMobile} alt="" className="work-page__hero-mobile" />
							</div>
							<h2 className="work-page__sub-headline">About The Project</h2>
							<p className="work-page__blurb">
								For this build we needed to not only revamp the look and feel of the site, 
								but also provide the client with a new CMS. We wanted to find one with speed and 
								flexibility that played also nicely with React. We landed on Keystone and in the end, 
								we were happy with <span className="no-wrap">the results.</span>
							</p>
							<h2 className="work-page__sub-headline">Tech Used</h2>
							<p className="work-page__blurb">
								React . Express . Sass . Keystone
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
								This was during my time at Made. For this project we had a front-end team, 
								a back-end team and an app team, all of which I oversaw. 
								I did this through code reviews, sprint planning and daily stand-ups. 
								Code-wise I was primarily responsible for <span className="no-wrap">the website.</span>
							</p>
							<BasicButton
								text="View Website"
								route="https://www.asugsvsummit.com"
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

export default GSV;