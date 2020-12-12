import React from "react"

import ContactImage from "images/undraw_contact.png"
import Github from "images/logo-github.svg"
import Twitter from "images/icons8-twitter.svg"
import Codepen from "images/icons8-codepen.svg"
import Foto from "images/icons8-500px.svg"

import { Wrapper, ContactImageWrapper } from "./ContactComp.styles"

const ContactComp = () => {
  return (
    <Wrapper>
      <ContactImageWrapper>
        <img src={ContactImage} alt="Contact" />
      </ContactImageWrapper>

      <h2>Contact</h2>
      <div
        style={{
          maxWidth: "200px",
          margin: "1rem auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <a
          href="https://github.com/mstanka"
          target="_blank"
          rel="noreferrer noopener"
        >
          <input
            type="image"
            alt="Github"
            src={Github}
            style={{ width: "4rem", height: "3rem" }}
          />
        </a>

        <a
          href="https://twitter.com/StankovaMarketa"
          target="_blank"
          rel="noreferrer noopener"
        >
          <input
            type="image"
            alt="Twitter"
            src={Twitter}
            style={{ width: "4rem", height: "4rem" }}
          />
        </a>
        <a
          href="https://500px.com/mstanka"
          target="_blank"
          rel="noreferrer noopener"
        >
          <input
            type="image"
            alt="500px"
            src={Foto}
            style={{ width: "4rem", height: "3rem" }}
          />
        </a>
        <a
          href="https://codepen.io/mstanka"
          target="_blank"
          rel="noreferrer noopener"
        >
          <input
            type="image"
            alt="Codepen"
            src={Codepen}
            style={{ width: "4rem", height: "3rem" }}
          />
        </a>
      </div>
    </Wrapper>
  )
}

export default ContactComp
