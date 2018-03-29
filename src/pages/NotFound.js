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
					title="Joel Hansen | Joel Hansen 404"
					meta={[
						{name: 'description', content: 'Joel Hansen, Developer Extraordinaire'}
					]}
				/>
				<h1 className="not-found__headline">
					This is <span className="no-wrap">most heinous!</span>
				</h1>
				<h2 className="not-found__sub-headline">
					404
				</h2>
			</section>
		);
	}
}

export default NotFound;