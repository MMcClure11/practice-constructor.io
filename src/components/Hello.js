import React, { Component } from 'react';

class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      helloTranslations: []
    };
  }

  componentDidMount(){
    fetch(this.props.helloTranslations)
      .then(res => res.json())
      .then(data => console.log(data))
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