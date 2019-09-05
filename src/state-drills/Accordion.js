import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  }
  state = {
    currentIndex: null
  }
  handleClick = index => {
    this.setState({ currentIndex: index });
  }
  render() {
    return (
      <ul>
        {
          this.props.sections.map((section, index) => {
            return (
              <li key={index}>
                <button onClick={() => this.handleClick(index)}>{section.title}</button>
                {this.state.currentIndex === index && <p>{section.content}</p>}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Accordion;

