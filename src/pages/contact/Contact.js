import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  const Wrapper = styled.section`
    padding: 4rem 0 5rem 0;
    text-align: center;
  `
  const FormContainer = styled.div`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .contact-form {
      max-width: 50rem;
      margin: auto;
      padding: 1rem;
      background-color: #f2f2f2;
      border: 1px solid #ddd;
      border-radius: 5px;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type='text'],
        input[type='email'],
        textarea {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 3px;
          font-size: 16px;

          &:focus {
            outline: none;
            border: 1px solid #f8bf02;
          }
        }

        input[type='submit'] {
          cursor: pointer;
          background-color: #f8bf02;
          color: #fff;
          font-size: 18px;
          border: none;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          transition: background-color 0.2s;

          &:hover {
            background-color: #f8bf02;
          }
        }
      }
    }
  `
  return (
    <Wrapper>
      <h1>Contact</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.890329962205!2d91.8981724906183!3d24.89985199318626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054aeedc809bb%3A0x60b5f614c843a3bf!2sTilagor%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1699074902887!5m2!1sen!2sbd"
        width="100%"
        height="400"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <FormContainer>
        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mgejqyzk"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
                autoComplete="off"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                name="Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder="Enter your message"
              ></textarea>

              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </FormContainer>
    </Wrapper>
  )
}

export default Contact
