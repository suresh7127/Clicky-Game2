import React, { Component } from 'react';
import chars from './chars.json';
import Wrapper from './components/wrapper';
import Nav from './components/nav/nav';
import Header from './components/header';
import Scoreboard from './components/scoreboard';
import ImgCard from './components/imgCard';
import GameOver from './components/gameover';

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
}
export default App;