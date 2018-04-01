import React, { PureComponent } from 'react';

/* Molecules */
import WorkTeaser from '../molecules/WorkTeaser';

/* Images */
import Evol from '../imgs/examples/img-joel-hansen_evol.png';
import EvolMobile from '../imgs/examples/img-joel-hansen_evol-mobile.png';
import Dominos from '../imgs/examples/img-joel-hansen_dominos.png';
import DominosMobile from '../imgs/examples/img-joel-hansen_dominos-mobile.png';
import GSV from '../imgs/examples/img-joel-hansen_gsv.png';
import GSVMobile from '../imgs/examples/img-joel-hansen_gsv-mobile.png';
import Made from '../imgs/examples/img-joel-hansen_made.png';
import MadeMobile from '../imgs/examples/img-joel-hansen_made-mobile.png';

class WorkTeaserSection extends PureComponent {

	render(){
		return(
			<section className="work-teaser-wrap">
				<h1 className="work-teaser__headline">
					Selected Work
				</h1>
				<div className="work-teaser-wrap__containter">
					<WorkTeaser
						clientName="Made"
						imageSrc={Made}
						imageSrcMobile={MadeMobile}
						route="made"
						history={this.props.history}
						tech="React . Express . Sass"
					/>
					<WorkTeaser
						clientName="ASU GSV"
						imageSrc={GSV}
						imageSrcMobile={GSVMobile}
						route="asu-gsv"
						history={this.props.history}
						tech="React . Express . Sass . Keystone"
					/>
					<WorkTeaser
						clientName="Evol"
						imageSrc={Evol}
						imageSrcMobile={EvolMobile}
						route="evol"
						history={this.props.history}
						tech="Wordpress . jQuery . PHP . Sass . Grunt"
					/>
					<WorkTeaser
						clientName="Domino's"
						imageSrc={Dominos}
						imageSrcMobile={DominosMobile}
						route="dominos"
						history={this.props.history}
						tech="Backbone . jQuery . Sass . Grunt"
					/>
				</div>
			</section>
		);
	}
}

export default WorkTeaserSection;