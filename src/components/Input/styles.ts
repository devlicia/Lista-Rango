import styled from 'styled-components'
import { InputProps } from '.'

export const Input = styled.div<InputProps>`
  display: flex;
  padding-left: 2.43rem;
  height: 2.5rem;
  width: ${({ width }) => width};
  background: ${props => props.theme.white};
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 1.25rem;
  align-items: center;

  input {
    width: 80%;
    border: none;
    outline: none;
  }

  svg {
    color: ${props => props.theme.gray};
  }
`
