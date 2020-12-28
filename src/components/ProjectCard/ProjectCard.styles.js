import styled from "styled-components"

export const CardWrapper = styled.div`
  display: flex;
  min-height: 150px;
  margin-bottom: 6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.textQuat};
  border-radius: 10px;
  padding: 2rem 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const ImgWrapper = styled.div`
  width: 70vw;
  max-width: 300px;
  margin: 0 20px;

  img {
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.textQuat};
  padding-top: 2rem;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`

export const Subtitle = styled.h3`
  color: ${props => props.theme.colors.textQuat};
  padding-bottom: 1rem;
  margin-top: 0.5rem;
`

export const TextWrapper = styled.div`
  max-width: 800px;

  h2 {
    margin: 0;
  }
`
