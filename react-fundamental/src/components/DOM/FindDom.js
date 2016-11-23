import React,{ Component, PropTypes } from 'react'
import ReactDOM,{ findDOMNode } from 'react-dom'

export default class FindDom extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		let ele=findDOMNode(this.refs.contents),
				ele2=this.refs.contents;
				console.log(ele.innerHTML,ele2)
	}
	render(){
		return(
				<div>
					<h3>我们一起操作dom吧</h3>
					<span ref='contents'>me is dom</span>
				</div>
			)
	}
}
FindDom.propTypes={
	name:PropTypes.string
}