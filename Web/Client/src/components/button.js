import React from 'react'
// Create component for button
class Button extends React.Component {
    render() {
      return (
        <fieldset>
          <button
            type={this.props.type || 'button'}
            value={this.props.value || null}
          >
            {this.props.text}
          </button>
        </fieldset>
      );
    }
  };
  
  export default Button;