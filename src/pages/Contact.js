import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";
import Axios from 'axios';
import querystring from 'querystring';

/* Objects */
import Footer from '../objects/Footer';

class Contact extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			disabled: false,
			buttonDisabled: false,
			isValid: false,
			submitted: false,
			name: '',
			email: '',
			message: '',
			nameError: false,
			emailError: false,
			messageError: false,
			nameErrorText: '',
			emailErrorText: '',
			messageErrorText: '',
		}

		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
	}

	/*
 		assigns form field values as they are filled out 
 	*/
	onChange(e) {
		var name = e.target.name;

		switch(name) {
			case 'name':
				this.setState({
					name: e.target.value,
					nameError: false,
					nameErrorText: ''
				});
				break;
			case 'email':
				this.setState({
					email: e.target.value,
					emailError: false,
					emailErrorText: ''
				});
				break;
			case 'message':
				this.setState({
					message: e.target.value,
					messageError: false,
					messageErrorText: ''
				});
				break;
			default:
			break;
		}
	}

	/* 
		Only submits the form if it's valid
	*/
	handleSubmit(e) {
		e.preventDefault();

		if (this.validateForm()) {
			this.submitForm();
		}
	}

	/* 
		Validates form inputs
	*/
	validateForm() {
		let isValid = true;

		if(!this.state.name.length) {
			this.setState({
				nameError: true,
				nameErrorText: 'Name is required.'
			});

			isValid = false;
		}
		if(!this.state.message.length) {
			this.setState({
				messageError: true,
				messageErrorText: 'Message is required.'
			});

			isValid = false;
		}
		if(!this.state.email.length) {
			this.setState({
				emailError: true,
				emailErrorText: 'Email is required.'
			});

			isValid = false;
		}
		else if (this.state.email.length >= 1) {
			var validEmail = this.validateEmail(this.state.email);
			if (!validEmail) {
				this.setState({
					emailError: true,
					emailErrorText: 'Please enter a valid email address.'
				});

				isValid = false;
			}
		}

		return isValid;
	}

	/* 
		Validates email address
	*/
	validateEmail($email) {
		return $email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	}

	/* 
		Adds error class
	*/
	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	}

	/* 
		submits forms through Made proxy server to Wufoo api 
	*/
	submitForm() {
		var _this = this,
			formData = new FormData();

		this.validateForm();

		
		const data = querystring.stringify({
			Field1: this.state.name,
			Field2: this.state.email,
			Field3: this.state.message
		});

		this.setState({
			buttonDisabled: true
		});

		fetch( 'https://joelisadev.wufoo.com/api/v3/forms/zty5dpn1e0ixg6/entries.json', {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				'authorization': 'Basic TVpHWS1PVDdCLVNGMEYtUERMQjpNWkdZLU9UN0ItU0YwRi1QRExC',
				'content-type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin':'*',
			},
			auth: {
				username: 'MZGY-OT7B-SF0F-PDLB',
				password: 'MZGY-OT7B-SF0F-PDLB'
			},
			body: data
		}).then(function(response) {
			if (response.statusText === 'Created') {
				_this.setState({
					submitted: true,
					disabled: true,
					isValid: true,
					buttonDisabled: true
				});
			}
			else {
				console.log('failed');
				console.log(response.data);
				_this.setState({
					submitted: false,
					buttonDisabled: false,
				});
			}
		})
		.catch(function(error) {
			console.log('error', error);
		});
	}

	render(){
		return(
			<div>
				<section className="contact-wrapper" id="jsContactWrapper">
					<Helmet
						title="Joel Hansen | Contact"
						meta={[
							{name: 'description', content: 'Joel Hansen, Contact'}
						]}
					/>

					<h1 className="contact-headline">
						Lorem Ipsum
					</h1>
					<form className="contact-form">
						<label className="visuallyhidden" htmlFor="contactName">Name</label>
						<input
							className={`${this.errorClass(this.state.nameErrorText)} contact-form__input`}
							type='text'
							id="contactName"
							name='name'
							value={this.state.name}
							disabled = {this.state.disabled}
							onChange={this.onChange}
							placeholder='Name*'
							required
						/>
						<label className="visuallyhidden" htmlFor="contactEmail">Email</label>
						<input
							className={`${this.errorClass(this.state.emailErrorText)} contact-form__input`}
							type='email'
							id="contactEmail"
							name='email'
							value={this.state.email}
							disabled = {this.state.disabled}
							onChange={this.onChange}
							placeholder='Email*'
							required
						/>
						<label className="visuallyhidden" htmlFor="contactMessage">Message</label>
						<textarea
							className={`${this.errorClass(this.state.messageErrorText)} contact-form__input`}
							type='text'
							id="contactMessage"
							name='message'
							value={this.state.message}
							disabled = {this.state.disabled}
							onChange={this.onChange}
							rows='10'
							placeholder='Message*'
							required
						/>
					</form>
					<div className='contact-form__errors'>
						<p>{this.state.nameErrorText}</p>
						<p>{this.state.emailErrorText}</p>
						<p>{this.state.messageErrorText}</p>
					</div>
					<button
						className={this.state.showForm ? 'contact-form__submit active' : 'contact-form__submit'}
						type='submit'
						onClick={this.handleSubmit}
						disabled={this.state.buttonDisabled}
					>
						{this.state.isValid ? `We'll get back to you soon!` : `Submit`}
					</button>
				</section>
				<Footer
					scrollElement='jsContactWrapper'
				/>
			</div>
		);
	}
}

export default Contact;