import './app.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'

// const MyFuncComponent = props => {
//   return (
// <h1 className={props.color}>
// <span>{props.title}</span>
// </h1>
//
//   )
// }
//
// class MyClassComponent extends React.Component {
//   render() {
//     return (
//       <h1 className={this.props.color}>{this.props.title}</h1>
//
//     )
//   }
// }
//
// var MyComponent=React.createClass({
//   render: function () {
//     return (
//       <h1 className={this.props.color}>{this.props.title}</h1>
//     )
//   }
// })

ReactDOM.render(
  <App/>,
  document.getElementById('root')

)

  // <div>
  // <h1 className="red">Hello World</h1>
  // <h2>Goodbye</h2>
  // <MyComponent color="blue" title="Suzanne component" />
  // <MyFuncComponent color="red" title="Lisa component" />
  // <MyClassComponent title="hello component" />
  // <MyComponent title="Suzanne component" />
  // <footer>All rights...</footer>
  // </div>,
