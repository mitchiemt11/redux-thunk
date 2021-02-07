import React, { Component } from 'react';

class Content extends Component {

  componentDidMount() {
    console.log('Content: Mounted')
  }

  componentDidUpdate() {
    console.log("Content: updated")
  }

  componentWillUnmount() {
    console.log("Content: UnMount");
  }

  render() {
    return (
      <p>{this.props.text}</p>
    )
  }
}


export default class App extends Component {
  state = {
    showContent: false,
    summarise: false
  };

  componentDidMount() {
    console.log('App: Mounted')
  }

  componentDidUpdate() {
    console.log("App: updated")
  }

  componentWillUnmount() {
    console.log("App: UnMount");
  }

  render() {

    const summary = 'Lorem Ipsum...';
    const fullText = 'Lorem ipsum sit amet fefefe efef';

    return (
      <>
        <h1>Heading</h1>
        <button onClick={() => this.setState({ showContent: !this.state.showContent })}>{this.state.showContent ? "Hide" : "Show"} content</button>
        {this.state.showContent &&
          <>
            <button onClick={() => this.setState({ summarise: !this.state.summarise })}>Show {this.state.summarise ? 'full content' : 'summary'}</button>
            <Content text={this.state.summarise ? summary : fullText} />
          </>
        }
      </>
    )
  }
}
