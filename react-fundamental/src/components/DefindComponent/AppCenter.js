import React,{ Component, PropTypes} from 'react'
import LeftCenter from './LeftCenter.js'

export default class AppCenter extends Component{
	constructor(props){
		super(props);
		this.state={
			sum:0,
			stopFlag:false
		}
		this.handleAdd=this.handleAdd.bind(this);
		this.handleDistory=this.handleDistory.bind(this);
	}
	handleAdd(){
		this.setState({
			sum:this.state.sum*1+1
		})
	}
	handleDistory(){
		this.setState({
			stopFlag:true
		})
	}
	render(){
		const { sum } = this.state
		if(this.state.stopFlag){
			return null
		}
		return(
			<div>
				<button onClick={this.handleAdd}>
					click me add one by one 
				</button>
				<button onClick={this.handleDistory}>
					click me distory 
				</button>
				<LeftCenter sum={sum} />
			</div>
			)
	}
}