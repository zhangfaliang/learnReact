import 'babel-polyfill'
import React,{ Component, PropTyte } from 'react'
import ReactDOM from 'react-dom'
import * as styles  from './index.css'
import TestState from './components/test/TestState.js'
import DefaultProps from './components/test/DefaultProps.js'
import AppCenter from './components/DefindComponent/AppCenter.js'
import FindDom from './components/DOM/FindDom.js'
import Refs from './components/DOM/Refs.js'
import EventDemo from './components/Event/EventDemo.js'
import UseChildrenComponent from './components/Childrens/Childrens.js'
import InputComponent from './components/InputForm/index.js'
const obj={
	name:true,
	type:'A'
}
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			numb:1
		},
	this.defaultProps={
			number:2
		}
	}

  Props = {
    number: '开始渲染'
  }

	render(){
		const { name, type }=this.props
		return(
			<h1 className='bb'>{name+type+this.props.number+this.state.numb}</h1>
			)
	}
}
const RootEle=document.getElementById('app')
//react cpmponent ReactDOM.render() 
ReactDOM.render(
	<InputComponent />,RootEle
	)