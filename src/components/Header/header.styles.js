import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const HeaderWrapper = styled.div`
  background: ${props => props.theme.colors.headerBG};
  font-size: 1.7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 0;  
`

export const Logo = styled.img`
  max-width: 100px;
  padding: 3px;  
  border: 1px solid ${colors.lightColor};
  border-radius: 50%;
`

