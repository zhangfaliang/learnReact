import 'babel-polyfill'
import React,{ Component, PropType } from 'react'
import ReactDOM from 'react-dom'

export default class TestState extends Component{
	constructor(props){
		super(props);
		this.state={
			numb:1
		}
	
		this.handleClick=this.handleClick.bind(this)
	}
	
	shouldComponentUpdate(){
		console.log('shoundComponentUpdata')
		return true
	}
	componentWillReceiveProps(){
		console.log('componentWillReceiveProps')
	}
	componentWillUpdate(){
		console.log('componmentUpdate')
	}
	componentDidUpdate(){
		console.log('componentDidUpdate')
	}
	componentWillMount(){
		console.log("componentWillMount")
	}
	componentDidMount(){
		console.log("componentDidMount")
	}
	componentWillUnmount(){
		console.log('componentWillUnmonut')
	}
	handleClick(){
	/*	this.replaceState({
			把之前的全部给提
		})*/
		this.setState({
			numb:this.state.numb*1+1
		})
	}
	render(){
		return(
			<div>
				<span>{'numb: '+this.state.numb}</span>

				<button onClick={this.handleClick}>click me add numb</button>
			</div>
			)
	}
}