import React, { Component, PropTypes } from 'react';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

  constructor(props) {
    console.log('enter constructor: ' + props.caption);
    super(props);

    //作用:当实例中的onClickIncrementButton函数被调用时，this始终指向当前组件的实例
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    //使用this.state赋值完成状态的初始化
    this.state = {
      count: props.initValue
    }
  }

  //紧贴着自己组件的render函数之前被调用
  componentWillMount(){
    console.log('enter componentWillMount'+this.props.caption);
  }

  //当所有组件render函数被调用之后才一起调用
  componentDidMount(){
    console.log('enter componentDidMount'+this.props.caption);
  }

  onClickIncrementButton() {
    this.updateCount(true);
  }

  onClickDecrementButton() {
    this.updateCount(false);
  }
  
  /*
  getInitialState() {
    console.log('enter getInitialState');
  }

  getDefaultProps() {
    console.log('enter getDefaultProps');
  }
  */

  componentWillReceiveProps(nextProps) {
    console.log('enter componentWillReceiveProps ' + this.props.caption)
  }

  componentWillMount() {
    console.log('enter componentWillMount ' + this.props.caption);
  }

  componentDidMount() {
    console.log('enter componentDidMount ' + this.props.caption);
  }

  // onClickIncrementButton() {
  //   this.setState({count: this.state.count + 1});
  // }

  // onClickDecrementButton() {
  //   this.setState({count: this.state.count - 1});
  // }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

    this.setState({count: newValue});
    //可以直接调用父组件的onUpdate函数
    this.props.onUpdate(newValue, previousValue)
  }

  render() {
    console.log('enter render ' + this.props.caption);
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  //caption: PropTypes.string.isRequired,
  //initValue: PropTypes.number
  //onUpdate: PropTypes.func
};

Counter.defaultProps = {
  initValue: 0,
  //onUpdate: f => f //什么都不做的函数
};

export default Counter;

