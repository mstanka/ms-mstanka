import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--light-color);
  color: var(--dark-color);
  border: 1px solid var(--primary-text-color);
  padding-top: 2rem;
  padding-bottom: 5rem;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`

export const ContactImageWrapper = styled.div`
  max-width: 20rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 768px) {
    max-width: 35rem;
  }

  img {
    width: 100%;
  }
`
