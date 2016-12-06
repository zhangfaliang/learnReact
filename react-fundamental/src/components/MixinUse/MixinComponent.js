import React,{ Component,PropTypes } from 'react'
// 注意这里传入一个React组件然后返回一个React组件
var SetIntervalMixin = ComposedComponent => 
	class extends Component {
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
        ...
        return 'XX天XX时XX分XX秒';
    }
}
export default SetIntervalMixin(Timer);

//渲染React元素
ReactDOM.render(
    <Timer timestamp="66666666"/> ,
    document.querySelector("body")
);