
import React, { PureComponent } from 'react'
import {render} from 'react-dom'
import {style} from 'root/style'

export default class ListPaper extends PureComponent {
  render() {
    const { ...props } = this.props
    const date = props.paper.date.split('T')[0]
    const time = props.paper.date.split('T')[1].split('.')[0]
    return (
      <div className={`${style.order_container} justify_space_between margin_5_2`}>

        <div className={`${style.row_item} white box_shadow width_40`} >
          <h2 className="flex_item_column">{date} {time}</h2>
        </div>


        <div className={`flex_grow ${style.row_item}`}>
          <button
            className={`flex_item_column ${style.nav_button_blue} width_100`}
            onClick={() => {props.toPaper(props.paper.id)}}
            >{props.paper.title}...</button>
        </div>
        <div className={`${style.row_item} width_15`}>
          <button
            className={`flex_item_column ${style.nav_button_red} width_100`}
            onClick={() => {props.deletePaper(props.paper.id)}}
            >Удалить</button>
        </div>

      </div>
  	)
  }
}
