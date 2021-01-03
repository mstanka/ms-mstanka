import React from "react"

import ContactImage from "../../images/undraw_contact.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  fa500px,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"

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
          margin: "2rem auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <a
          href="https://github.com/mstanka"
          alt="Github"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="3x"
            color="var(--quat-color)"
            style={{ margin: "0 .5rem" }}
          />
        </a>

        <a
          href="https://twitter.com/StankovaMarketa"
          alt="Twitter"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            size="3x"
            color="var(--quat-color)"
            style={{ margin: "0 .5rem" }}
          />
        </a>
        <a
          href="https://500px.com/mstanka"
          alt="500px"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon
            icon={fa500px}
            size="3x"
            color="var(--quat-color)"
            style={{ margin: "0 .5rem" }}
          />
        </a>
        <a
          href="https://codepen.io/mstanka"
          alt="Codepen"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon
            icon={faCodepen}
            size="3x"
            color="var(--quat-color)"
            style={{ margin: "0 .5rem" }}
          />
        </a>
      </div>
    </Wrapper>
  )
}

export default ContactComp
