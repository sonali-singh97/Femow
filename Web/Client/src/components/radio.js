import React from 'react'
// Create component for radio input
class Radio extends React.Component {
    render() {
      return (
        <fieldset>
          <label
            htmlFor={this.props.htmlFor}
            label={this.props.label}
          >
            <input
              id={this.props.htmlFor}
              name={this.props.name || null}
              required={this.props.required || null}
              type='radio'
            />
            {this.props.label}
          </label>
        </fieldset>
      );
    }
  }
export default Radio;