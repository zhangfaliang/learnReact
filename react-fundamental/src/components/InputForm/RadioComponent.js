import React,{ Component, PropTypes } from 'react'
import ReactDOM,{ findeDOMNode } from 'react-dom'

export  default class RadioButtons extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<h2>请选择</h2>
				<input type='radio' value='可以' name='radioGroup'/>
				<input type='radio' value='不可以' name='radioGroup'/>
			</div>
			)
	}
}