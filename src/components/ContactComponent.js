import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const send = <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0909 1L2 9.72727L14.7273 15.5455L16.0909 1Z" stroke="white" />
    <path d="M9.72727 13.1212L13.3636 5.36365L7 11.6667" stroke="white" />
    <path d="M7 12.1515V17L10.1818 13.6061" stroke="white" />
</svg>

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Thank-You for your Email!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <Form onSubmit={this.handleSubmit} className="contactFormStyling">
                <FormGroup>
                    <Label for="exampleName">NAME</Label>
                    <Input id="exampleName" type="text" name="name" value={name} onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">EMAIL</Label>
                    <Input id="exampleEmail" type="email" name="email" value={email} onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">MESSAGE</Label>
                    <Input id="exampleText" type="textarea" name="message" value={message} onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup check row className="pl-0">
                    <Col sm={{ size: 10 }} className="mx-auto text-center">
                        <Button className="mainButton contactFormButton">{send}</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}


export default Contact;