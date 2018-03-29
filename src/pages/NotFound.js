import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";

/* Objects */
import NavLayout from '../objects/NavLayout';

class NotFound extends PureComponent {
	render(){
		return(
			<section className="not-found-wrap">
				<NavLayout
					history={this.props.history}
				/>
				<Helmet
					title="Joel Hansen | LOREM IPSUM"
					meta={[
						{name: 'description', content: 'Joel Hansen, LOREM IPSUM'}
					]}
				/>
				<h1 className="not-found__headline">
					404
				</h1>
				<h2 className="not-found__sub-headline">
					Sub 404
				</h2>
			</section>
		);
	}
}

export default NotFound;