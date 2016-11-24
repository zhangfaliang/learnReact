import React,{ Component, PropTypes } from 'react'
import ReactDOM ,{ findDOMNode } from 'react-dom'

class Slider extends Component{
	constructor(props){
		super(props)
		
	}
	render(){
		return(
			<input type='range'
				min='0'
				max='255'
			 onChange={this.props.update}/>
			)
	}

}

export default class Refs extends Component{
	constructor(props){
		super(props);
		this.state={
			red:'0',
			blue:'0',
			green:0
		}
		this.handleUpdate=this.handleUpdate.bind(this)
	}
	handleUpdate(e){
		this.setState({
			red:findDOMNode(this.refs.red).value,
			green:findDOMNode(this.refs.green).value,
			blue:findDOMNode(this.refs.blue).value,

		})
	//console.dir(this.refs.blue)
	}
	render(){
		let { red, green, blue } = this.state
		return( 
			<div>
				<Slider 
					ref='red'
					update={this.handleUpdate}/>
					{red}
										<br/>
				<Slider 
					ref='green'
					update={this.handleUpdate}/>
					{green}
					<br/>
				<Slider 
					ref='blue'
					update={this.handleUpdate}/>
					{blue}
				
			</div>
			)
	}
}

