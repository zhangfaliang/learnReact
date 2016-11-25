import React,{Component, PropTypes } from 'react';
import RactDOM,{ findDOMNode } from 'react-dom'
// findDOMNode 这个方法可以结合 refs使用 挺方便

export default class EventDemo extends Component{
	constructor(props){
		super(props)
		this.state={
			likeFlage:true
		}
		this.handleLikeClick = this.handleLikeClick.bind(this)
	}
	handleLikeClick(){
		console.log("456")
		this.setState({
			likeFlage:!this.state.likeFlage
		})
	}
	render(){
		let { likeFlage } = this.state
		return(
			<div>
				<p>{this.state.likeFlage?'like me ': ' hate me  '}</p><br/>
				<button onClick={this.handleLikeClick}> {this.state.likeFlage?'hate me ': ' like me  '}
				</button>
			</div>
			)
	}
}
/*EventDemo.propTypes={
	属性名:PropTypes.string
}*/