import React from 'react';
import './home.less';
import homeImg from '../images/hero-image.png';
import timer from '../images/timer.png';
import calculator from '../images/calculator.png';
import {Link} from 'react-router-dom';
const Home = () => {
  return (<div className="home">
    <div className='imgs'>
      <div className='theme'>
    <img src={homeImg} alt='hero' className='hero' />
    <p>在线实用工具</p>
      </div>
    <div className='tools'>

    <div className='timer-enter'>
      <img src={timer} alt='timer' className='timer-png' width='200px'/>
      <br/>
      <Link to='/timer' className="calculator-name"  >计算器</Link>
    </div>

    <div className='calculator-enter'>
    <img src={calculator} alt='calculator' className='calculator-png'  width='200px'/>
      <br/>
    <Link to='/calculator' className="timer-name" >倒计时器</Link>
    </div>

    </div>

    </div>

  </div>);
};

export default Home;