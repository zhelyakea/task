import { browserHistory } from 'react-router'
import React, { PureComponent } from 'react'
import {style} from 'root/style'

export default class FilterButton extends PureComponent {
  render() {
    const { ...props } = this.props
    const selected = props.type === props.selected_type ? style.nav_button_selected : style.nav_button_green
    return (
      <button
        className={`${selected} width_15`}
        onClick={() => props.setFilter(props.type)}
        >{props.text}</button>
  	)
  }
}
