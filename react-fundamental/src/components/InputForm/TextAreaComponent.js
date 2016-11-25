import React,{ Component, PropTypes } from 'react'
import ReactDOM,{ findeDOMNode } from 'react-dom'

export default class TextAreaComponent extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
				<div>
					<h2>请输入</h2>
					<textarea />
				</div>
			)
	}
}