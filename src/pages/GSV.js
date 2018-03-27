import React, { PureComponent } from 'react';

/* Objects */
import Footer from '../objects/Footer';
import NavLayout from '../objects/NavLayout';

class GSV extends PureComponent {
	render(){
		return(
			<div>
				<NavLayout
					history={this.props.history}
				/>
				<section>
					<h1>
						GSV
					</h1>
				</section>
				<Footer
					scrollElement='jsLanding'
				/>
			</div>
		);
	}
}

export default GSV;