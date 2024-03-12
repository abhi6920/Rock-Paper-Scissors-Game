import {
  GameScoreContainer,
  GameScoreNameContainer,
  GameName,
  GameScoreBoardContainer,
  GameScoreHeading,
  GameScoreShow,
} from './styledComponents'

const GameScore = props => {
  const {score} = props
  return (
    <GameScoreContainer>
      <GameScoreNameContainer>
        <GameName>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </GameName>
      </GameScoreNameContainer>
      <GameScoreBoardContainer>
        <GameScoreHeading>Score</GameScoreHeading>
        <GameScoreShow>{score}</GameScoreShow>
      </GameScoreBoardContainer>
    </GameScoreContainer>
  )
}

export default GameScore
