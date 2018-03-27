import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";

/* Objects */
import Footer from '../objects/Footer';
import NavLayout from '../objects/NavLayout';

/* Atoms */
import BasicButton from '../atoms/BasicButton';

/* Images */
import FPO from '../imgs/fpo/fpo-computer.png';

class Dominos extends PureComponent {
	render() {
		return(
			<div id="workPage">
				<Helmet
					title="Joel Hansen | LOREM IPSUM"
					meta={[
						{name: 'description', content: 'Joel Hansen, LOREM IPSUM'}
					]}
				/>
				
				<NavLayout
					history={this.props.history}
				/>
				<section className="work-page">
					<h1 className="work-page__headline">
						Dominos <span className="no-wrap">Anyware Site</span>
					</h1>
					<div className="work-page__inner-wrap">
						<div className="work-page-wrap--large">
							<img src={FPO} alt="" className="work-page__hero" />
							<h2 className="work-page__sub-headline">About The Project</h2>
							<p className="work-page__blurb">
								lorem ipsum lorem ipsum lorem ipsum
								lorem ipsum lorem ipsum lorem ipsum
							</p>
							<h2 className="work-page__sub-headline">Tech Used</h2>
							<p className="work-page__blurb">
								lorem ipsum lorem ipsum lorem ipsum
								lorem ipsum lorem ipsum lorem ipsum
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
								lorem ipsum lorem ipsum lorem ipsum
								lorem ipsum lorem ipsum lorem ipsum
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