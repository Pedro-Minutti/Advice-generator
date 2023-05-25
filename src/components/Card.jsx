import React, { Component } from 'react'
import styles from './Card.module.css'
import mobile from '../images/divider-mobile.svg'
import desktop from '../images/divider-desktop.svg'
import next from '../images/icon-dice.svg'
import fetchAPI from '../services/advice-api'

export default class Card extends Component {
 
  state = {
    advice: '',
  };

  componentDidMount = () => {
    this.takeAdvice();
  }; 

  takeAdvice = () => { 
    fetchAPI()
      .then((data) => {
        this.setState({
          advice: data,
        });
      });
  };


  handleClick = () => {
    this.takeAdvice();
  };
  

  render() {
    const { advice } = this.state;
    return (
  
      <div className={ styles.container }>
        <div className={ styles.content}>
          <p className={ styles.messageID}>Daily Wise Message</p>
          <h1 className={ styles.message }> { advice }</h1>
          <picture>
            <source media= "(max-width: 540px)" srcSet={ mobile }/>
            <img src={ desktop } alt='desktopDivisor'/>
          </picture>
          <button className= { styles.next } onClick={ () => this.handleClick()}> 
        <img src={ next } alt='Next'/>
          </button>
        </div>
      </div>
    )
  }
}
