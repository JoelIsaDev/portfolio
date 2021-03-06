import React, { PureComponent } from 'react';

/* Molecules */
import AboutSection from '../molecules/AboutSection';

class AboutMe extends PureComponent {

	render(){
		const architectureSVG = ('M61,27h-6v-3c0-0.552-0.447-1-1-1H33v-2h5c0.431,0,0.812-0.275,0.948-0.684l2-6c0.103-0.305,0.051-0.64-0.137-0.901  C40.623,13.154,40.321,13,40,13h-7v-2h6c0.553,0,1-0.448,1-1V3c0-0.552-0.447-1-1-1H25c-0.553,0-1,0.448-1,1v7c0,0.552,0.447,1,1,1  h6v2h-5c-0.431,0-0.812,0.275-0.948,0.684l-2,6c-0.103,0.305-0.051,0.64,0.137,0.901C23.377,20.846,23.679,21,24,21h7v2H10  c-0.553,0-1,0.448-1,1v3H3c-0.553,0-1,0.448-1,1v7c0,0.552,0.447,1,1,1h6v17H3c-0.553,0-1,0.448-1,1v7c0,0.552,0.447,1,1,1h14  c0.553,0,1-0.448,1-1v-2h6v2c0,0.552,0.447,1,1,1h14c0.553,0,1-0.448,1-1v-2h6v2c0,0.552,0.447,1,1,1h14c0.553,0,1-0.448,1-1v-7  c0-0.552-0.447-1-1-1H47c-0.553,0-1,0.448-1,1v3h-6v-3c0-0.552-0.447-1-1-1H25c-0.553,0-1,0.448-1,1v3h-6v-3c0-0.552-0.447-1-1-1h-6  V40h20v2h-6c-0.553,0-1,0.448-1,1v7c0,0.552,0.447,1,1,1h14c0.553,0,1-0.448,1-1v-7c0-0.552-0.447-1-1-1h-6v-3c0-0.552-0.447-1-1-1  H11v-2h6c0.553,0,1-0.448,1-1v-7c0-0.552-0.447-1-1-1h-6v-2h42v2h-6c-0.553,0-1,0.448-1,1v7c0,0.552,0.447,1,1,1h14  c0.553,0,1-0.448,1-1v-7C62,27.448,61.553,27,61,27z M26,4h12v5H26V4z M26.721,15h11.892l-1.333,4H25.388L26.721,15z M48,55h12v5H48  V55z M26,55h12v5H26V55z M16,60H4v-5h12V60z M38,49H26v-5h12V49z M16,34H4v-5h12V34z M60,34H48v-5h12V34z'),
			architectureViewbox = '0 0 64 64',
			codeSVG='m86.1 63c0 4.5-3.7 8.2-8.2 8.2h-61.3c-4.5 0-8.2-3.7-8.2-8.2v-34.7c0-4.5 3.7-8.2 8.2-8.2h61.3c4.5 0 8.2 3.7 8.2 8.2zm-7.1-.4v-34.3c0-1-.7-1.7-1.7-1.7h-60.6c-1 0-1.7.8-1.7 1.7v34.3c0 1 .8 1.7 1.7 1.7h60.6c1 .1 1.7-.7 1.7-1.7z" fill="#010101"/><path d="m91.6 77c0 2.5-2.1 4.6-4.6 4.6h-80c-2.5 0-4.6-2.1-4.6-4.6v-3.4h89.2z" fill="#010101"/><path d="m31.8 45.8 6.6 6.6-3.2 3.2-9.7-9.6 9.5-10.5 3.4 3z"/><path d="m62.2 45.2-6.5-6.5 3.2-3.2 9.6 9.6-9.5 10.5-3.3-3.1z',
			codeViewbox='0 0 100 100',
			projectSVG='m49.78125 6a2.0001998 2.0001998 0 0 0 -1.1875.59375l-10 10a2.0001998 2.0001998 0 1 0 2.8125 2.8125l6.59375-6.59375v9.1875c0 7.807027-6.150455 14.160907-12.875 20.5625-3.362273 3.200796-6.820792 6.363375-9.5 9.8125s-4.625 7.287576-4.625 11.625v4a2.0001998 2.0001998 0 1 0 4 0v-4c0-3.132611 1.429208-6.088077 3.8125-9.15625s5.674773-6.149971 9.0625-9.375c6.775455-6.450057 14.125-13.622447 14.125-23.46875v-9.1875l6.59375 6.59375a2.0001998 2.0001998 0 1 0 2.8125-2.8125l-10-10a2.0001998 2.0001998 0 0 0 -1.625-.59375zm27.21875 14c-5.499158 0-10 4.500841-10 10 0 5.499158 4.500842 10 10 10s10-4.500842 10-10c0-5.499159-4.500842-10-10-10zm-61.21875.96875a2.0001998 2.0001998 0 0 0 -1.1875 3.4375l5.59375 5.59375-5.59375 5.59375a2.0001998 2.0001998 0 1 0 2.8125 2.8125l5.59375-5.59375 5.59375 5.59375a2.0001998 2.0001998 0 1 0 2.8125-2.8125l-5.59375-5.59375 5.59375-5.59375a2.0001998 2.0001998 0 0 0 -1.4375-3.4375 2.0001998 2.0001998 0 0 0 -1.375.625l-5.59375 5.59375-5.59375-5.59375a2.0001998 2.0001998 0 0 0 -1.4375-.625 2.0001998 2.0001998 0 0 0 -.1875 0zm61.21875 3.03125c3.337398 0 6 2.662601 6 6 0 3.337398-2.662602 6-6 6s-6-2.662602-6-6c0-3.337399 2.662602-6 6-6zm-27 23c-5.499158 0-10 4.500841-10 10 0 5.499158 4.500842 10 10 10s10-4.500842 10-10c0-5.499159-4.500842-10-10-10zm0 4c3.337398 0 6 2.662601 6 6 0 3.337398-2.662602 6-6 6s-6-2.662602-6-6c0-3.337399 2.662602-6 6-6zm-27 23c-5.499158 0-10 4.500842-10 10 0 5.499159 4.500842 10 10 10s10-4.500841 10-10c0-5.499158-4.500842-10-10-10zm46.78125.96875a2.0001998 2.0001998 0 0 0 -1.1875 3.4375l5.59375 5.59375-5.59375 5.59375a2.0001998 2.0001998 0 1 0 2.8125 2.8125l5.59375-5.59375 5.59375 5.59375a2.0001998 2.0001998 0 1 0 2.8125-2.8125l-5.59375-5.59375 5.59375-5.59375a2.0001998 2.0001998 0 0 0 -1.4375-3.4375 2.0001998 2.0001998 0 0 0 -1.375.625l-5.59375 5.59375-5.59375-5.59375a2.0001998 2.0001998 0 0 0 -1.4375-.625 2.0001998 2.0001998 0 0 0 -.1875 0zm-46.78125 3.03125c3.337398 0 6 2.662602 6 6 0 3.337399-2.662602 6-6 6s-6-2.662601-6-6c0-3.337398 2.662602-6 6-6z',
			projectViewbox='0 0 100 100';


		return(
			<section className="about-me-wrap" id="jsAboutMe">
				<h1 className="about-me-headline">
					About me
				</h1>
				<h2 className="about-me-secondary-headline">
					Here are just a few of my strengths:
				</h2>
				
				<div className="about-me-section-wrap">
					<AboutSection
						headline="Code"
						blurb="I am very comfortable using RESTful APIs, tools such as Sass and Grunt, and frameworks like React. I am just as happy to use vanilla Javascript, jQuery, HTML and CSS. I strive to write clean, semantic code that will improve SEO and take into account ADA compliance."
						icon={codeSVG}
						viewbox={codeViewbox}
						multiline={true}
					/>
					<AboutSection
						headline="Architecture"
						blurb="Over-architecting a project can cause it to become unmanageable, whereas under-architecting it can leave it unscalable. I am careful to assess the client’s needs and deliver a project that runs smoothly all the way through."
						icon={architectureSVG}
						viewbox={architectureViewbox}
						multiline={false}
					/>
					<AboutSection 
						headline="Project Managment"
						blurb="It is important that everyone on a team is on the same page. This can best be accomplished through daily stand-ups, code reviews and sprint planning. I also work very closely with producers, designers and QA to assure that every project is the best that it can be."
						icon={projectSVG}
						viewbox={projectViewbox}
						multiline={false}
					/>
				</div>

			</section>
		);
	}
}

export default AboutMe;