import 'babel-polyfill'
import React,{ Component, PropTyte } from 'react'
import ReactDOM from 'react-dom'

class App extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<h1>shiny-react</h1>
			)
	}
}
const RootEle=document.getElementById('app')

ReactDOM.render(
	<App/>,RootEle
	)