import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Calculator extends Component {

  state={
	formula:'',
	result:'',
  }

  handleInputNumber = (event) => {
	this.setState(
		{
		  formula: this.state.formula+event.target.value
		}
	)
  }
  handleReset=()=>{
	this.setState(
		{
		  formula:'',
		  result:'',
		}
	)
  }
  handleFormula=()=>{
	try {
	  let tempResult=eval(this.state.formula)
	  this.setState(
		  {
			formula:'',
			result:tempResult
		  }
	  )
	}catch (e) {
	  alert('wrong formula')
	  this.setState(
		  {
			formula:''
		  }
	  )
	}

  }


  render() {
	return (
		<div className="calculator">
		  <p>在线计算器</p>
		  <div className="screen">
			<div className="input-group mb-3">
			  <span className="input-group-text bg-light" id="inputScreen">输入</span>
			  <input type="text"
					 aria-describedby="inputScreen"
					 className="form-control"
					 disabled
					 value={this.state.formula}
			  />
			</div>
			<div className="input-group mb-3 ">
			  <span className="input-group-text bg-light" id="result">结果</span>
			  <input type="text"
					 aria-describedby="result"
					 className="form-control"
					 disabled
					 value={this.state.result} />

			</div>
		  </div>
		  <br/>
		  <div className="row">
			<div className="col">
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={7}
					  onClick={this.handleInputNumber}
			  >7
			  </button>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={8}
					  onClick={this.handleInputNumber}
			  >8
			  </button>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={9}
					  onClick={this.handleInputNumber}
			  >9
			  </button>
			  <button type="button"
					  className="btn btn-warning btn-lg m-3"
					  value="*"
					  onClick={this.handleInputNumber}
			  >*
			  </button>
			  <br/>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={4}
					  onClick={this.handleInputNumber}
			  >4
			  </button>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={5}
					  onClick={this.handleInputNumber}
			  >5
			  </button>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={6}
					  onClick={this.handleInputNumber}
			  >6
			  </button>
			  <button type="button"
					  className="btn btn-warning btn-lg m-3"
					  value="-"
					  onClick={this.handleInputNumber}
			  >-
			  </button>
			  <br/>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={1}
					  onClick={this.handleInputNumber}
			  >1
			  </button>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={2}
					  onClick={this.handleInputNumber}
			  >2</button>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={3}
					  onClick={this.handleInputNumber}
			  >3
			  </button>
			  <button type="button"
					  className="btn btn-warning btn-lg m-3"
					  value="+"
					  onClick={this.handleInputNumber}
			  >+
			  </button>
			  <br/>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={0}
					  onClick={this.handleInputNumber}
			  >0</button>
			  <button type="button"
					  className="btn btn-light btn-lg m-3"
					  value={'.'}
					  onClick={this.handleInputNumber}
			  >.</button>
			  <button type="button"
					  className="btn btn-primary btn-lg m-3"
					  onClick={this.handleReset}
			  >C
			  </button>
			  <button type="button"
					  className="btn btn-danger
                        btn-lg m-3"
					  disabled={!(this.state.formula.length > 0)}
					  onClick={this.handleFormula}
			  >=
			  </button>
			</div>
		  </div>
		  <Link to="/" className="back-home">回到主页</Link>
		</div>
	);
  }
}

export default Calculator;
