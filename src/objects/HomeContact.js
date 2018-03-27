import React, { PureComponent } from 'react';

/* Atoms */
import BasicButton from '../atoms/BasicButton';

class HomeContact extends PureComponent {

	render(){
		return(
			<section className="home-contact-wrap">
				<h1 className="home-contact-headline">
					Let's Do Work
				</h1>
				<p className="home-contact__blurb">
					I am currently available for full time or freelance work, 
					so let's do <span className="no-wrap">something great.</span>
				</p>

				<BasicButton
					text="Contact Me"
					route="contact"
					handleClick={this.props.handleClick}
				/>

			</section>
		);
	}
}

export default HomeContact;