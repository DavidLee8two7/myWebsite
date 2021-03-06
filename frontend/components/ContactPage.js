import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./styles/ErrorMessage";
import styled from "styled-components";

const CREATE_MEMO_MUTATION = gql`
  mutation CREATE_MEMO_MUTATION(
    $name: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    createMemo(
      name: $name
      email: $email
      subject: $subject
      message: $message
    ) {
      id
    }
  }
`;

const ContactMessage = styled.div`
  width: 100%;
  img {
    z-index: 1;
    width: 10rem;
    margin: 1rem 2rem;
    padding: 5px;
    box-shadow: ${props => props.theme.sbs};
    transition: all 0.3s ease;
    transform: scale(0.9);
    :hover {
      transform: scale(1);
    }
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.8rem;
    h4 {
      font-size: 2rem;
    }
    button {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 700px) {
    font-size: 1.6rem;
    h4 {
      font-size: 1.8rem;
    }
    button {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
    h4 {
      font-size: 1.6rem;
    }
    button {
      font-size: 1.4rem;
    }
  }
`;

class Memo extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_MEMO_MUTATION} variables={this.state}>
        {(createMemo, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createMemo();
              alert("Your message has been submited.");
              Router.push({
                pathname: "/"
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <ContactMessage>
                <span>
                  <a
                    href="https://docs.google.com/document/d/1-HSiQEATsuxw9Bfm5WBKV9BpmWIALeewlxBOLwy3YWo/edit?usp=sharing"
                    target="_blank"
                  >
                    <img src="/static/logo/resumeIcon.png" alt="resume" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/david-lee-480985119/"
                    target="_blank"
                  >
                    <img src="/static/logo/linkedin.png" alt="linkedin" />
                  </a>
                </span>
                <span>
                  <a href="https://github.com/SanBuNam" target="_blank">
                    <img src="/static/logo/git.jpg" alt="github" />
                  </a>
                </span>
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=""
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="subject">
                  Subject
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder=""
                    required
                    value={this.state.subject}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="message">
                  Message
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter message"
                    required
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
              </ContactMessage>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Memo;
