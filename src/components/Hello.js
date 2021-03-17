import React, { Component } from 'react';

class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      helloTranslations: []
    };
  }

  componentDidMount(){
    // fetch(this.props.helloTranslations)
    //   .then(res => res.json())
    //   .then(data => {
    //     let arr = data.translations.filter(translation => translation !== 'Hello')
    //     this.setState({helloTranslations: arr})
    //   })
    this.setState({ helloTranslations: this.props.helloTranslations.filter( trans => trans !== 'Hello')})
  }



  render() {
    console.log(this.state)
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        { this.translations }
      </ul>
    </div>
  )
  }
}

export default Hello