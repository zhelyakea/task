import { browserHistory } from 'react-router'
import React, { PureComponent } from 'react'
import {style} from 'root/style'

export default class AddArticle extends PureComponent {
  render() {
    const { addPaper } = this.props
    return (
      <button
        className={`${style.nav_button_green} width_15`}
        onClick={() => browserHistory.push('/addpaperpage')}
        >Добавить</button>
  	)
  }
}
