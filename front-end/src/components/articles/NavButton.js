import { browserHistory } from 'react-router'
import React, { PureComponent } from 'react'
import {style} from 'root/style'

export default class NavButton extends PureComponent {
  render() {
    const { ...props } = this.props
    let text = ''
    let offset = 0
    switch(props.type){
      case 'prev':
        if(props.offset >= 5) offset = props.offset - 5
        text = "Предыдущая"
        break
      case 'next':
        offset = props.offset + 5
        text = "Следующая"
        break
    }
    return (
      <button
        className={`${style.nav_button_green} min_width_25`}
        onClick={() => {
          if( props.offset >= 5 && props.type === 'prev' || props.type === 'next' ) props.articlesFetch(offset)
        }}
        >{text}</button>
  	)
  }
}
