import React, { Component } from 'react';
import chars from './chars.json';
import Wrapper from './components/wrapper/wrapper';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Scoreboard from './components/scoreboard/scoreboard';
import ImgCard from './components/imgCard/imgCard';
import GameOver from './components/gameover/gameover';

function randomChars(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    msg: 'Click any character to begin',
    score: 0,
    highScore: 0,
    chars: chars,
    selected: [],
    gameover: false,
    countdown: '',
  }

  shuffleChars = () => {
    let shuffled = randomChars(chars);
    this.setState({ chars: shuffled });
  }
  handleClick = (name) => {
    if (!this.state.gameover) {
      if (this.state.selected.indexOf(name) === -1) {
        this.increment();
        this.setState({ selected: [...this.state.selected, name] });
      } else {
        this.setState({ msg: 'GAME OVER', gameover: true })
        console.log("Oops!! You Guess wrong , Game-Over");
        this.reset();
        setTimeout(() => {
          this.setState({ countdown: 3 });
        }, 1000)
        setTimeout(() => {
          this.setState({ countdown: 2 });
        }, 2000)
        setTimeout(() => {
          this.setState({ countdown: 1 });
        }, 3000)
      }
    } else {
      this.setState({
        msg: 'Click any character to begin',
        selected: [],
        score: 0,
        gameover: false
      });
    } console.log("clicked");
  }

  increment = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      msg: 'You guessed correctly!'
    });
    console.log("correct guess");
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    if (newScore === 10) {
      this.setState({
        msg: 'You win!',
        selected: [],
        gameover: true
      });
    }
    this.shuffleChars();
    console.log("You win !!");
  };

  reset = () => {
    setTimeout(() => {
      this.setState({
        msg: 'Click any character to begin',
        score: 0,
        highScore: this.state.highScore,
        selected: [],
        gameover: false,
        countdown: 3
      });
      this.shuffleChars()
    }, 4000);
  }

  render() {
    if (!this.state.gameover) {
      return (
        <Wrapper>
          <Header />
          <Scoreboard
            msg={this.state.msg}
            score={this.state.score}
            highScore={this.state.highScore}
          />

          <div className="container">
            {
              this.state.chars.map(char => (
                <ImgCard
                  key={char.name}
                  name={char.name}
                  img_url={char.img_url}
                  shuffleChars={this.shuffleChars}
                  handleClick={this.handleClick}
                  increment={this.increment}
                  reset={this.reset}
                />
              ))
            }
          </div>
          <Nav />
        </Wrapper>
      )
    } else {
      return (
        <Wrapper>
          <Header />
          <Scoreboard
            msg={this.state.msg}
            score={this.state.score}
            highScore={this.state.highScore}
          />
          <div className="container">
            <GameOver
              msg={this.props.msg}
              score={this.state.score}
              gameover={this.state.gameover}
              countdown={this.state.countdown}
              handleClick={this.handleClick}
              reset={this.reset}
            />
          </div>
          <Nav />
        </Wrapper>
      )
    }
  }
}


export default App;