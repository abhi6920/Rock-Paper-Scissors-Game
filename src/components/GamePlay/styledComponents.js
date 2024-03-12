import styled from 'styled-components'

export const GamePlayMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #223a5f;
  padding: 20px;
`

export const GameRuleView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 45vw;
  margin-top: 80px;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 360px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 70%;
`
