import  React,{ Component, PropType } from  'react'
import { render } from 'react-dom'
import component from './component'
console.log(component)
import * as styles from './css/index.css'
class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<h1 className={styles['h2']}>react34</h1>
			)
	}
}

let root=document.getElementById('app')

render(<App/>,root)