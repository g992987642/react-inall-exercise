import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
  render() {
	return (
		<div className="header">
		  <div className='toolbar'>
			<Link to='/' >Home</Link>
			<Link to='/calculator'>在线计算器</Link>
			<Link to='/timer'>在线倒计时器</Link>
		  </div>
		</div>
	);
  }
}

export default Header;
