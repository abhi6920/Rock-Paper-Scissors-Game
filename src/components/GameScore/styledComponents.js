import styled from 'styled-components'

export const GameScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 80%;
  border-radius: 8px;
  border: 2px solid #ffffff;
  background-color: transparent;
  margin-top: 2%;
`

export const GameScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameName = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const GameScoreBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 15%;
  border-radius: 8px;
  padding-top: 10px;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`

export const GameScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
  padding-top: 10px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const GameScoreShow = styled.p`
  color: #223a5f;
  font-size: 42px;
  margin-top: 0px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
