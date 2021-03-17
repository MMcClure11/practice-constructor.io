import React, { Component } from 'react';

class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      helloTranslations: []
    };
  }

  render() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
  }
}

export default Hello