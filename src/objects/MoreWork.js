import React, { PureComponent } from 'react';

/* Molecules */
import MoreWorkExample from '../molecules/MoreWorkExample';

/* Images */
import Saturday from '../imgs/moreWork/img-joel-hansen_amex-small-business-saturday.png';
import Friday from '../imgs/moreWork/img-joel-hansen_tgi-fridays.png';
import Vitamin from '../imgs/moreWork/img-joel-hansen_vitamin-water.png';
import OldNavy from '../imgs/moreWork/img-joel-hansen_old-navy-fitlabs.png';
import Amex from '../imgs/moreWork/img-joel-hansen_amex-travel-insiders.png';
import Earth from '../imgs/moreWork/img-joel-hansen_earth-balance.png';

class MoreWork extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			showSection: false
		}

		this.toggleSection = this.toggleSection.bind(this);
	}

	/*
		Toggles the More Work section open and closed
	*/
	toggleSection() {
		var showSection = !this.state.showSection;

		this.setState({
			showSection
		});
	}

	render(){
		return(
			<section className="more-work-wrap">
				<h1 className="more-work__headline">
					More Work
				</h1>
				<span className={this.state.showSection ? 'chevron--down inactive' : 'chevron--down'} onClick={this.toggleSection}></span>
				<div className={this.state.showSection ? 'more-work-secondary-wrap active' : 'more-work-secondary-wrap'}>
					<div className="more-work-secondary__inner-wrap">
						<MoreWorkExample
							client="TGI Fridays"
							imgSrc={Friday}
						/>
						<MoreWorkExample
							client="Vitamin Water"
							imgSrc={Vitamin}
						/>
						<MoreWorkExample
							client="Earth Balance"
							imgSrc={Earth}
						/>
						<MoreWorkExample
							client="Small Business Saturday"
							imgSrc={Saturday}
						/>
						<MoreWorkExample
							client="Old Navy Fit Labs"
							imgSrc={OldNavy}
						/>
						<MoreWorkExample
							client="Amex Insiders"
							imgSrc={Amex}
						/>
					</div>
				</div>
				<span className={this.state.showSection ? 'chevron--up jsShowMoreWork' : 'chevron--up inactive jsShowMoreWork'} onClick={this.toggleSection}></span>
			</section>
		);
	}
}

export default MoreWork;
