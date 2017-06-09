import { browserHistory } from 'react-router'
import React, { PureComponent } from 'react'
import {style} from 'root/style'

export default class SaveArticle extends PureComponent {
  render() {
    const { ...props } = this.props
    return (
      <button
        className={`${style.nav_button_green} min_width_25`}
        onClick={() => props.savePaperAndToBack(props.offset, props.text, props.title)}
        >Сохранить</button>
  	)
  }
}
