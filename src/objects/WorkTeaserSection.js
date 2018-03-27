import React, { PureComponent } from 'react';

/* Molecules */
import WorkTeaser from '../molecules/WorkTeaser';

/* Images */
import FPO from '../imgs/fpo/fpo-computer.png';

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
						imageSrc={FPO}
						route="made"
						history={this.props.history}
						tech="React . Express . Node . Sass"
					/>
					<WorkTeaser
						clientName="GSV"
						imageSrc={FPO}
						route="gsv"
						history={this.props.history}
						tech="React . Node . Express . Sass . Keystone"
					/>
					<WorkTeaser
						clientName="Evol"
						imageSrc={FPO}
						route="evol"
						history={this.props.history}
						tech="Wordpress . jQuery . PHP . HTML . Sass . Grunt"
					/>
					<WorkTeaser
						clientName="Dominos"
						imageSrc={FPO}
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