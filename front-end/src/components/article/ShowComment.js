import { browserHistory } from 'react-router'
import React, { PureComponent } from 'react'
import {style} from 'root/style'

export default class ShowComment extends PureComponent {
  render() {
    const { ...props } = this.props
    const text = props.comment_visible ? "Скрыть комментарии" : "Показать комментарии"
    return (
      <button
        className={`${style.nav_button_green} min_width_25`}
        onClick={() => props.showComment(props.comment_visible)}
        >{text}</button>
  	)
  }
}
