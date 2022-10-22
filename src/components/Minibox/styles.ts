import styled from 'styled-components'
import { MiniboxProps } from '.'

export const Container = styled.div`
  display: flex;
  margin-top: 2.125rem;
`

export const Minibox = styled.div`
  display: flex;
  background: ${props => props.theme.white};
  border-radius: 4px;
  box-shadow: 0px 2px 4px #00000029;
  flex-direction: row;

  .text-minibox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 3.84rem 2rem 1.65rem;
    gap: 3;
  }

  .title-minibox {
    font-size: 1rem;
    font-weight: 500;
  }

  .subtitle-minibox {
    font-size: 0.75rem;
    font-weight: 400;
  }
`

export const Circle = styled.div<MiniboxProps>`
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  background: ${({ isOpen }) =>
    isOpen ? props => props.theme.purpleBold : props => props.theme.purpleWeak};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  margin-left: -23px;

  .text-circle {
    font-size: 0.5rem;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.white};
  }
`
