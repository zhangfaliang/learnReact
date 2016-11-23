import React,{ Component, PropTypes} from 'react'

export default class LeftCenter extends Component{
	constructor(props){
		super(props)
	}
	componentWillReceiveProps(nextP,nextS){
		console.log(arguments,'componentReceiceProps')
	}
	shouldComponentUpdate(nextP,nextS){
		console.log(arguments,'shouldComponentUpdate')
		return true
	}
	componentWillUpdate(nextP,nextS){
		console.log(arguments,'componentWillUpdate')
	}
	componentDidUpdate(nextP,nextS){
		console.log(arguments,'componentDidUpdate')
	}
	componentWillMount(){
		console.log('componentWillMount')
	}
	render(){
		console.log('runder')
		const {sum}=this.props;
		return(
			<span>{sum}</span>
			)
	}
	componentDidMount(){
		console.log('componentDidMount')
	}
	componentWillUnmount(prevProps,prevState) {
      console.log('componentWillUnmount');
  }
}
LeftCenter.propsTypes={
	sun:PropTypes.number
}