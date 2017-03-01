import React from 'react'
class MyClassComponent extends React.Component {
  render() {
    return (
      <h1 className={this.props.color}>{this.props.title}</h1>

    )
  }
}
export default MyClassComponent
