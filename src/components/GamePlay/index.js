import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import GameScore from '../GameScore'
import GameResult from '../GameResult'
import './index.css'

import {
  GamePlayMainContainer,
  GameRuleView,
  PopUpView,
  PopUpImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GamePlay extends Component {
  state = {
    isShow: true,
    text: 'YOU WON',
    score: 0,
    newArray: [choicesList[0], choicesList[1]],
  }

  updateResult = (you, opponent) => {
    if (you.id === 'ROCK') {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (you.id === 'PAPER') {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  opponentRandomChoice = id => {
    const {score} = this.state
    const opponent = choicesList[Math.floor(Math.random() * choicesList.length)]
    const you = choicesList.filter(eachItem => eachItem.id === id)
    const result = this.updateResult(you[0], opponent)

    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      isShow: false,
      newArray: [you[0], opponent],
      text: result,
    })
  }

  restartGame = () => this.setState({isShow: true})

  render() {
    const {isShow, text, score, newArray} = this.state
    return (
      <GamePlayMainContainer>
        <GameScore score={score} />
        <GameResult
          choicesList={choicesList}
          opponentRandomChoice={this.opponentRandomChoice}
          restartGame={this.restartGame}
          isShow={isShow}
          text={text}
          newArray={newArray}
        />

        <GameRuleView>
          <Popup
            modal
            trigger={
              <button type="button" className="btn-rule">
                RULES
              </button>
            }
          >
            {close => (
              <PopUpView>
                <button
                  type="button"
                  className="btn-trigger"
                  aria-label="close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt=" rules"
                />
              </PopUpView>
            )}
          </Popup>
        </GameRuleView>
      </GamePlayMainContainer>
    )
  }
}

export default GamePlay
