import React, {Component} from 'react';
import './app.less';
import {Link} from "react-router-dom";
class Timer extends Component {

  state = {
	time: 0,
	status: 'start'
  }
  //TODO
  handleStart = () => {
    if (this.state.time<=0){
	  this.setState(
		  {
			time:0,
			status:'end'
		  })
	}
  else{
	  this.setState(
		  {
			status:'continue'
		  });
	  let cur_time =setInterval(()=>{
			this.setState(
				{
				  time:this.state.time-1,
				}
			)
		if (this.state.time<=0){
		  clearInterval(cur_time);
		  this.setState(
			  {
				time:0,
				status:'end'
			  })
		}
	  },1000);
	}
  }
  handleChange=(event) => {
    if(!isNaN(event.target.value))
	this.setState({
	  time:event.target.value
		}
	)
  }

  render() {
	return (
		<div className="timer">
		  <h1>在线倒计时器</h1>
		  <form>
			<label htmlFor="set-time">设置时间</label>
			<input type="text" className="time" placeholder="请输入倒计时间" value={this.state.time} onChange={(event) => this.handleChange(event)}/>
			<button type="submit" className="submit"
					onClick={this.handleStart}
					disabled={this.state.status==='continue'}>Start
			</button>
		  </form>
		  <p>剩余时间为{this.state.time}秒</p>
		  <Link to="/" className="back-home">回到主页</Link>
		</div>
	);
  }
}

export default Timer;
