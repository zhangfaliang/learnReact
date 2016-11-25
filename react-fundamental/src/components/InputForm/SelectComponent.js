import React,{ Component, PropTypes} from 'react'
import ReactDOM,{ findeDOMNode } from 'react-dom'
export default class SelectComponent extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h2>请选择</h2>
				<select name='selectBtn' defaultValue={'B'}>
					<option value='A'>A</option>
					<option value='B'>B</option>
					<option value='C'>C</option>
					<option value='D'>D</option>
				</select>
			</div>

			)
	}
}