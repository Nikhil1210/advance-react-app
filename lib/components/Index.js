import ReactDOM from 'react-dom';
import React, {Component} from 'react';

class App extends Component {
  state = {
    val: 'state value is nikhil'
  };
  asyncFunc = () => {
    return Promise.resolve('Value from the promise');
  }

  async componentDidMount() {
    this.setState({
      val: await this.asyncFunc()
    });
  }

  render() {
    return (
      <div>
        Inside React Class Component : {this.state.val}
      </div>
    );
  }
}

ReactDOM.render(< App / >, document.getElementById('root'));
