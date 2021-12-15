import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <>
            <input
              onChange={this.props.handleChange}
              type={this.props.inputType}
              name={this.props.inputName}
              checked={this.props.isChecked}
            ></input>
            <label>{this.props.inputName}</label>
          </>
        )
    }
}
