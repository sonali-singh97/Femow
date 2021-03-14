// Create component for label
import React from 'react'
class Label extends React.Component {
    render() {
      if (this.props.hasLabel === 'true') {
        return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
      }
    }
  }

  export default Label;
  