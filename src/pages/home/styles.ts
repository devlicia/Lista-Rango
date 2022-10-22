import styled from 'styled-components'

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .green-bar {
    background: ${props => props.theme.greenBar};
    width: 100%;
    height: 3.875rem;
    box-shadow: 0px 4px 8px #00000029;
  }

  .title {
    padding-top: 2rem;
    color: ${props => props.theme.gray};
    font-size: 24px;
    text-align: center;
    font-weight: 500;
  }

  .box-search {
  }
`

export const MiniboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2.875rem;
`
