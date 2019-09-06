import React, { Component } from 'react';
import chars from './chars.json';
import Wrapper from './components/wrapper';
import Nav from './components/nav/nav';
import Header from './components/header';
import Scoreboard from './components/scoreboard';
import ImgCard from './components/imgCard';
import GameOver from './components/gameover';

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
}
export default App;