import React,{ Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

const defaule={
	flag:'default value'
}
export default class DefaultProps extends Component{
	constructor(props){
		//经测试发现set defaultProps不可以写在组件里面设置
		super(props);
	}

	render(){
		return(
				<span>{this.props.flag}</span>
			)
	}
}
DefaultProps.defaultProps=defaule
//他可以他可以字面量的初始化判断传入的数据
DefaultProps.propTypes={
	name:PropTypes.string
}