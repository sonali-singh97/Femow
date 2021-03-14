// Create component for input
import React from 'react'
import Label from '../components/label'
class Input extends React.Component {
    render() {
      return (
        <fieldset>
          <Label
            hasLabel={this.props.hasLabel}
            htmlFor={this.props.htmlFor}
            label={this.props.label}
          />
  
          <input
            id={this.props.htmlFor}
            max={this.props.max || null}
            min={this.props.min || null}
            name={this.props.name || null}
            placeholder={this.props.placeholder || null}
            required={this.props.required || null}
            step={this.props.step || null}
            type={this.props.type || 'text'}
          />
        </fieldset>
      );
    }
  }
  export default Input;