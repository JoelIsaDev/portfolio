import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import Axios from "axios";
import querystring from "querystring";

/* Objects */
import Footer from "../objects/Footer";
import NavLayout from "../objects/NavLayout";

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      buttonDisabled: false,
      isValid: false,
      submitted: false,
      name: "",
      email: "",
      message: "",
      nameError: false,
      emailError: false,
      messageError: false,
      nameErrorText: "",
      emailErrorText: "",
      messageErrorText: "",
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  /*
 		Assigns form field values as they are filled out 
 		@param {object} e - event
 	*/
  onChange(e) {
    var name = e.target.name;

    switch (name) {
      case "name":
        this.setState({
          name: e.target.value,
          nameError: false,
          nameErrorText: "",
        });
        break;
      case "email":
        this.setState({
          email: e.target.value,
          emailError: false,
          emailErrorText: "",
        });
        break;
      case "message":
        this.setState({
          message: e.target.value,
          messageError: false,
          messageErrorText: "",
        });
        break;
      default:
        break;
    }
  }

  /*
		Only submits the form if it's valid
		@param {object} e - event
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

    if (!this.state.name.length) {
      this.setState({
        nameError: true,
        nameErrorText: "Name is required.",
      });

      isValid = false;
    }
    if (!this.state.message.length) {
      this.setState({
        messageError: true,
        messageErrorText: "Message is required.",
      });

      isValid = false;
    }
    if (!this.state.email.length) {
      this.setState({
        emailError: true,
        emailErrorText: "Email is required.",
      });

      isValid = false;
    } else if (this.state.email.length >= 1) {
      var validEmail = this.validateEmail(this.state.email);
      if (!validEmail) {
        this.setState({
          emailError: true,
          emailErrorText: "Please enter a valid email address.",
        });

        isValid = false;
      }
    }

    return isValid;
  }

  /* 
		Validates email address
		@param {string} $email - the email address to be validated
	*/
  validateEmail($email) {
    return $email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  }

  /* 
		Adds error class
		@param {string} error - any form errors
	*/
  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  /* 
		Submits forms through Made proxy server to Wufoo api 
	*/
  submitForm() {
    var _this = this;

    this.validateForm();

    const data = querystring.stringify({
      Field1: this.state.name,
      Field2: this.state.email,
      Field3: this.state.message,
    });

    Axios({
      method: "post",
      url: "https://joelisadev.wufoo.com/api/v3/forms/zty5dpn1e0ixg6/entries.json",
      headers: {
        authorization:
          "Basic TVpHWS1PVDdCLVNGMEYtUERMQjpNWkdZLU9UN0ItU0YwRi1QRExC",
        "content-type": "application/x-www-form-urlencoded",
      },
      data: data,
    })
      .then(function (response) {
        console.log(response);
        if (response.data.Success === 1) {
          _this.setState({
            submitted: true,
            disabled: true,
            isValid: true,
            buttonDisabled: true,
          });
        } else {
          console.log("failed");
          console.log(response.data);
          _this.setState({
            submitted: false,
            buttonDisabled: false,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <section className="contact-wrapper" id="jsContactWrapper">
          <Helmet
            title="Contact - Joel Hansen | A developer and creative technical director"
            meta={[
              {
                name: "description",
                content:
                  "Joel Hansen, a developer and a creative technical director skilled in React, Sass, React Native, Javascript, jQuery, RESTful APIs, and Express",
              },
            ]}
          />
          <NavLayout history={this.props.history} />
          <h1 className="contact-headline">
            {this.state.isValid ? "Thank you!" : "Contact Me"}
          </h1>
          <form className="contact-form">
            <label className="visuallyhidden" htmlFor="contactName">
              Name
            </label>
            <input
              className={`${this.errorClass(
                this.state.nameErrorText
              )} contact-form__input ${this.state.disabled ? `disabled` : ""}`}
              type="text"
              id="contactName"
              name="name"
              value={this.state.name}
              disabled={this.state.disabled}
              onChange={this.onChange}
              placeholder="Name*"
              required
            />
            <label className="visuallyhidden" htmlFor="contactEmail">
              Email
            </label>
            <input
              className={`${this.errorClass(
                this.state.emailErrorText
              )} contact-form__input ${this.state.disabled ? `disabled` : ""}`}
              type="email"
              id="contactEmail"
              name="email"
              value={this.state.email}
              disabled={this.state.disabled}
              onChange={this.onChange}
              placeholder="Email*"
              required
            />
            <label className="visuallyhidden" htmlFor="contactMessage">
              Message
            </label>
            <textarea
              className={`${this.errorClass(
                this.state.messageErrorText
              )} contact-form__input ${this.state.disabled ? `disabled` : ""}`}
              type="text"
              id="contactMessage"
              name="message"
              value={this.state.message}
              disabled={this.state.disabled}
              onChange={this.onChange}
              rows="10"
              placeholder="Message*"
              required
            />
          </form>
          <div className="contact-form__errors">
            <p className="contact-form__error">{this.state.nameErrorText}</p>
            <p className="contact-form__error">{this.state.emailErrorText}</p>
            <p className="contact-form__error">{this.state.messageErrorText}</p>
          </div>
          <button
            className={
              this.state.showForm
                ? "contact-form__submit active jsFormSubmit"
                : "contact-form__submit jsFormSubmit"
            }
            type="submit"
            onClick={this.handleSubmit}
            disabled={this.state.buttonDisabled}
          >
            {this.state.isValid ? `I'll be in touch!` : `Submit`}
          </button>
        </section>
        <Footer scrollElement="jsContactWrapper" />
      </div>
    );
  }
}

export default Contact;
