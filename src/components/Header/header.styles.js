import styled from "styled-components"
import { colors } from "styles/GlobalStyles"


export const HeaderWrapper = styled.div`
  background: ${props => props.theme.colors.headerBG};
  margin-bottom: 1.45rem;
  font-size: 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`

export const Logo = styled.img`
  max-width: 90px;
  padding: 3px;  
  border: 1px solid ${colors.lightColor};
  border-radius: 50%;
`

