import { browserHistory } from 'react-router'
import React, { PureComponent } from 'react'
import {style} from 'root/style'

export default class AddComment extends PureComponent {
  render() {
    const { ...props } = this.props
    return (
      <button
        className={`${style.nav_button_green}`}
        onClick={() => props.saveComment()}
        >Добавить комментарий</button>
  	)
  }
}
