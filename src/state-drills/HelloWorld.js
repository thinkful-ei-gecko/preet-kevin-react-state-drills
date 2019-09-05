import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'Moto',
  }
  handleClick(message) {
    this.setState({ who: message});
  }
  renderButtons() {
    return (
      <>
        <button onClick={() => this.handleClick('world!')}>World</button>
        <button onClick={() => this.handleClick('friend!')}>Friend</button>
        <button onClick={() => this.handleClick('React!')}>React</button>
      </>
    )
  }
  render() {
    return (
      <div>
        <p>
          Hello, {this.state.who}
        </p>
        {this.renderButtons()}
      </div>
    )
  }
}

export default HelloWorld;