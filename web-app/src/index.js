import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.scrollTo(0, 0);

if (localStorage["TutorialComplete"] === "true") {
  document.getElementById("TutorialPage").style.display = "none";
  document.getElementById("MainPage").style.display = "flex";
} else {
  document.getElementById("TutorialPage").style.display = "flex";
  document.getElementById("MainPage").style.display = "none";
}

document.activeElement.blur();