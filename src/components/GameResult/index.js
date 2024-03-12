import './index.css'
import {
  GameContainer,
  GameButton,
  GameImage,
  ResultContainer,
  ResultName,
  ResultText,
} from './styledComponents'

const GameResult = props => {
  const {
    choicesList,
    opponentRandomChoice,
    isShow,
    text,
    newArray,
    restartGame,
  } = props

  return (
    <GameContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => opponentRandomChoice(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => opponentRandomChoice(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => opponentRandomChoice(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultText>{text}</ResultText>
            <button
              type="button"
              className="play-again-button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ResultContainer>
        </>
      )}
    </GameContainer>
  )
}

export default GameResult
