import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${colors.lightColor};
  color: ${colors.darkColor};
  border: 1px solid ${colors.primColor};
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
