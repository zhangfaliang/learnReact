import React,{ Component, PropTypes } from 'react'
import ReactDOM,{ findeDOMNode } from 'react-dom'

export default class CheckeBox extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h2>请选择</h2>
				A
				<input type='checkbox' value='A' name='checkGroup'/>
				B
				<input type='checkbox' value='B' name='checkGroup'/>
				C
				<input type='checkbox' value='C' name='checkGroup'/>
			</div>
			)
	}
}