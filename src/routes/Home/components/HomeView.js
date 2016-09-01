import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import RaisedButton from 'material-ui/RaisedButton';

function handleTouchTap() {
  alert('Hello from material-ui in react.');
}

const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />
    <p>
      <RaisedButton label="Bingo" onTouchTap={handleTouchTap}/>
    </p>
  </div>
)

export default HomeView
