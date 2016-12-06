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
/*class App extends Component{
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
	)*/

// 注意这里传入一个React组件然后返回一个React组件
var SetIntervalMixin = ComposedComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: this.props.timestamp
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.changeState.bind(this), 1000);    
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    changeState() {
        this.setState({
            timestamp: this.state.timestamp - 1000
        });
    }
    render() {
        return <ComposedComponent {...this.props} {...this.state} />;
    }
};

class Timer extends React.Component {
    constructor(props) {
        super(props);        
    }
    render() {
        // 注意，这里通过props取得属性值
        var timestamp = this.props.timestamp;        
        return <p>{this.renderTime(timestamp)}</p>
    }
    renderTime(timestamp){
        // 省略掉时间计算转换
      //  ...
        return 'XX天XX时XX分XX秒';
    }
}
export default SetIntervalMixin(Timer);

//渲染React元素
ReactDOM.render(
    <Timer timestamp="66666666"/> ,
    document.querySelector("body")
);