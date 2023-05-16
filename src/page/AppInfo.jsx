import { Component } from 'react';

export default class AppInfo extends Component {
  render() {
    return (
      <div>
        <p>Environment: {process.env.NODE_ENV}</p>
        <p>Git Version: {GIT_VERSION}</p>
      </div>
    );
  }
}
