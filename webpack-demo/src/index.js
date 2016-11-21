import  React,{ Component, PropType } from  'react'
import { render } from 'react-dom'
import component from './component'
console.log(component)
class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<h1>react</h1>
			)
	}
}

let root=document.getElementById('app')

render(<App/>,root)