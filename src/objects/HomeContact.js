import React, { PureComponent } from 'react';

/* Atoms */
import BasicButton from '../atoms/BasicButton';

class HomeContact extends PureComponent {

	render(){
		return(
			<section className="home-contact-wrap">
				<h1>
					Let's Work Together
				</h1>
				<p className="home-contact__blurb">
					Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
					Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
				</p>

				<BasicButton
					text="I am available for hire"
					route="contact"
					handleClick={this.props.handleClick}
				/>

			</section>
		);
	}
}

export default HomeContact;