import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";

/* Objects */
import Footer from '../objects/Footer';
import NavLayout from '../objects/NavLayout';

/* Atoms */
import BasicButton from '../atoms/BasicButton';

/* Images */
import DominosSrc from '../imgs/examples/img-joel-hansen_dominos.png';
import DominosSrcMobile from '../imgs/examples/img-joel-hansen_dominos-mobile.png';

class Dominos extends PureComponent {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(
			<div id="workPage">
				<Helmet
					title="Joel Hansen | Developer Extraordinaire"
					meta={[
						{name: 'description', content: 'Joel Hansen, Developer Extraordinaire'}
					]}
				/>
				
				<NavLayout
					history={this.props.history}
				/>
				<section className="work-page">
					<h1 className="work-page__headline">
						Domino's <span className="no-wrap">Anyware Site</span>
					</h1>
					<div className="work-page__inner-wrap">
						<div className="work-page-wrap--large">
							<div className="work-page__hero-wrap">
								<img src={DominosSrc} alt="" className="work-page__hero" />
								<img src={DominosSrcMobile} alt="" className="work-page__hero-mobile" />
							</div>
							<h2 className="work-page__sub-headline">About The Project</h2>
							<p className="work-page__blurb">
								Domino's needed a website to showcase all of the new ways to order pizza, 
								from a smartphone to a watch, even from your car. We used background videos 
								and rich animations on each section to give an interactive and unique feel 
								to this site.
							</p>
							<h2 className="work-page__sub-headline">Tech Used</h2>
							<p className="work-page__blurb">
								Backbone . jQuery . Sass . Grunt
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
								This was during my time at CP + B and I was responsible for much of 
								the front-end development on <span className="no-wrap">this project.</span>
							</p>
							<BasicButton
								text="View Website"
								route="https://anyware.dominos.com"
								linkOut={true}
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

export default Dominos;