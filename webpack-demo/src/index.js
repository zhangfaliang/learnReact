import  React,{ Component, PropType } from  'react'
import { render } from 'react-dom'

class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<h1>欢迎shiny教学</h1>
			)
	}
}

let root=document.getElementById('app')

render(<app/>,root)