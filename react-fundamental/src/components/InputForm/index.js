import React,{ Component, PropTypes } from 'react'
import ReactDOM,{ findDOMNode } from  'react-dom'
import RadioComponent from  './RadioComponent.js'
import ChecketComponent from './ChecketComponent.js'
import TextAreaComponent from './TextAreaComponent.js'
import SelectComponent from './SelectComponent.js'
export default class InputComponent extends Component{
	constructor(props){
		super(props)
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	 state = {
      inputValue: '请输入...',
      selectValue: 'A',
      radioValue:'B',
      checkValues:[],
      textareaValue:'请输入...'
  }

	handleSubmit(e){
		e.preventDefault();

      let formData = {
        /*  select: findDOMNode(this.refs.goodSelect).value,
          textarea: findDOMNode(this.refs.goodTextarea).value,
          radio: findDOMNode(this.state.radioValue),
          check: findDOMNode(this.state.checkValues),*/
      }

      console.log('你提交的数据是:')
      console.log(findDOMNode(this.refs.goodSelect));
	}
	render(){
		return (
				<div>
					<form onSubmit={this.handleSubmit}>
						<RadioComponent defaultValue={this.state.radioValue}  ref='radioValue'/>
						<ChecketComponent defaultValue={this.state.checkValues} ref='checkValues'/>
						<SelectComponent defaultValue={this.state.selectValue} ref='goodSelect'/>
						<TextAreaComponent defaultValue={this.state.inputValue} ref='goodTextarea'/>
						<input type='submit' value='submit'/>
					</form>
				</div>
			)
	}
}
