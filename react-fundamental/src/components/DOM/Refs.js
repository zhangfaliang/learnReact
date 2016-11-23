import React,{ Component, PropTypes } from 'react'
import ReactDOM ,{ findDOMNode } from 'react-dom'

export default class Refs extends Component{
	constructor(props){
		super(props);
		this.setState={
			red:0,
			green:0,
			blue:0
		}
		this.handleUpdate=this.handleUpdate.bind(this);
	}
	handleUpdate(){
		this.setState({
			red:this.refs.red.value,

		})
	}
	render(){
		return(
			<div>
				<Slider 
					ref='red'
					update={this.handleUpdate}/>
					<br/>
				<Slider 
					ref='green'
					update={this.handleUpdate}/>
					<br/>
				<Slider 
					ref='blue'
					update={this.handleUpdate}/>
				
			</div>
			)
	}
}

class Slider extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<input type='range'
				min='0'
				max='255'
			 onChane={this.props.update}/>
			)
	}
}