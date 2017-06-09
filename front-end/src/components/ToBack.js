import { browserHistory } from 'react-router'
import React, { PureComponent } from 'react'
import {style} from 'root/style'

export default class ToBack extends PureComponent {
  render() {
    const { to_back } = this.props
    return (
      <button
        className={`${style.nav_button_red} min_width_25`}
        onClick={() => browserHistory.push('/')}
        >Назад</button>
  	)
  }
}
