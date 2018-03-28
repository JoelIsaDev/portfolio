import React, { PureComponent } from 'react';

class MoreWorkExample extends PureComponent {
	render(){
		return(
			<div className="more-work__example">
				<img src={this.props.imgSrc} alt="" className="more-work__hero" />
				<h2 className="more-work__secondary-headline">
					{this.props.client}
				</h2>
			</div>
		);
	}
}

export default MoreWorkExample;