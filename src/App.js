import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getRepos } from './redux';

// App.js
export class App extends Component {
  state = { username: 'iamalexchip' };

  componentDidMount() {
    this.updateRepoList(this.state.username);
  }

  updateRepoList = username => this.props.getRepos(username);

  

  render() {
    return (
      <div>
        <h1>MHC DEV ASYNC APP 🚀🌡</h1>

        <strong>Enter Github username: </strong>
        <input
          type="text"
          value={this.state.username}
          onChange={ev => this.setState({ username: ev.target.value })}
          placeholder="Github username..."
        />&nbsp;
        <button onClick={() => this.updateRepoList(this.state.username)}>
          Get Lastest Repos
        </button>

        <ul>
          {this.props.repos.map((repo, index) => (
            <li key={index}>
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({ repos: state.repos });
const mapDispatchToProps = { getRepos };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;