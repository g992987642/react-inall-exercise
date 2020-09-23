import React from 'react';
import './home.less';
import homeImg from '../images/hero-image.png';
import timer from '../images/timer.png';
import calculator from '../images/calculator.png';
import {Link} from 'react-router-dom';
const Home = () => {
  return (<div className="home">
    <div className='imgs'>
    <img src={homeImg} alt='hero' className='hero'/>
    <img src={timer} alt='timer' className='timer'/>
    <img src={calculator} alt='calculator' className='timer'/>
    </div>
    <Link to='/timer' className="calculator-name" >计算器</Link>
    <Link to='/calculator' className="timer-name" >倒计时器</Link>
  </div>);
};

export default Home;