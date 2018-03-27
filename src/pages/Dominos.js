import React, { PureComponent } from 'react';

/* Objects */
import Footer from '../objects/Footer';
import NavLayout from '../objects/NavLayout';

class Dominos extends PureComponent {
	render(){
		return(
			<div>
				<NavLayout
					history={this.props.history}
				/>
				<section>
					<h1>
						Dominos
					</h1>
				</section>
				<Footer
					scrollElement='jsLanding'
				/>
			</div>
		);
	}
}

export default Dominos;