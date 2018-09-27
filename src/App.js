import React, { Component } from 'react';
import './App.css';

class Output extends Component {
  render() {
    return (
      <div className="output">
        <div><span>{this.props.display}</span></div>
      </div>
    )
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleNumInput = this.handleNumInput.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePlusMinus = this.handlePlusMinus.bind(this);
  }

  handleNumInput(e) {
    this.props.onNumInput(e.target.value);
  }

  handleAction(e) {
    this.props.onAction(e.target.value);
  }

  handleEquals(e) {
    this.props.onEquals(e.target.value);
  }

  handleClear(e) {
    this.props.onClear(e.target.value);
  }

  handlePlusMinus(e) {
    this.props.onPlusMinus(e.target.value);
  }

  render() {
    return (
      <div>
        <form className="row1">
          <input id="react-image" />
          <input value="C" onClick={this.handleClear} />
          <input value="+/-" onClick={this.handlePlusMinus} />
          <input className="operator" value="/" onClick={this.handleAction} />
        </form>
        <form className="row2">
          <input value="7" onClick={this.handleNumInput} />
          <input value="8" onClick={this.handleNumInput} />
          <input value="9" onClick={this.handleNumInput} />
          <input className="operator" value="*" onClick={this.handleAction} />
        </form>
        <form className="row3">
          <input value="4" onClick={this.handleNumInput} />
          <input value="5" onClick={this.handleNumInput} />
          <input value="6" onClick={this.handleNumInput} />
          <input className="operator" value="-" onClick={this.handleAction} />
        </form>
        <form className="row4">
          <input value="1" onClick={this.handleNumInput} />
          <input value="2" onClick={this.handleNumInput} />
          <input value="3" onClick={this.handleNumInput} />
          <input className="operator" value="+" onClick={this.handleAction} />
        </form>
        <form className="row5">
          <input id="react-image" />
          <input value="0" onClick={this.handleNumInput} />
          <input value="." onClick={this.handleNumInput} />
          <input className="operator" value="=" onClick={this.handleEquals} />
        </form>
      </div>
    )
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      value: '',
      storedValue: '',
      display: '0',
      operator: '+',
    })
    this.handleNumInput = this.handleNumInput.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePlusMinus = this.handlePlusMinus.bind(this);
  }

  handleNumInput(value) {
    const newValue = this.state.value + value

    this.setState({
      value: this.state.value + value,
      display: this.state.value + value,
    })
  }

  handleAction(value) {
    if (this.state.operator === '+') {
      this.setState({
        operator: value,
        storedValue: Number(this.state.storedValue) + Number(this.state.value),
        value: ''
      })
    }
    else if (this.state.operator === "-") {
      this.setState({
        operator: value,
        storedValue: Number(this.state.storedValue) - Number(this.state.value),
        value: ''
      })
    }
    else if (this.state.operator === "*") {
      this.setState({
        operator: value,
        storedValue: Number(this.state.storedValue) * Number(this.state.value),
        value: ''
      })
    }
    else if (this.state.operator === "/") {
      this.setState({
        operator: value,
        storedValue: Number(this.state.storedValue) / Number(this.state.value),
        value: ''
      })
    }
  }

  handleEquals(value) {

    const operators = {
      '+': function (a, b) { return a + b },
      '-': function (a, b) { return b - a },
      '*': function (a, b) { return b * a },
      '/': function (a, b) { return b / a }
    };

      this.setState({
        display: operators[this.state.operator](Number(this.state.value), this.state.storedValue),
      })
  }

  handleClear(value) {
    this.setState({
      value: '',
      storedValue: '',
      display: '0',
      operator: '+',
    })
  }

  handlePlusMinus(value) {
    this.setState({
      value: this.state.value * -1,
      display: this.state.display * -1
    })
  }

  render() {
    return (
      <div className="calculator">
        <h1>React Calculator</h1>
        <Output
          display={this.state.display}
          storedValue={this.state.storedValue}
        />
        <Input
          onNumInput={this.handleNumInput}
          onAction={this.handleAction}
          onEquals={this.handleEquals}
          onClear={this.handleClear}
          onPlusMinus={this.handlePlusMinus}
        />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
