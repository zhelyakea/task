
import React, { PureComponent } from 'react'
import {render} from 'react-dom'
import {style} from 'root/style'

export default class ListPaper extends PureComponent {
  render() {
    const { ...props } = this.props
    return (
      <div className={`${style.order_container} justify_space_between margin_5_2`}>

        <div className={`${style.row_item} white box_shadow width_40`} >
          <h2 className="flex_item_column">{props.paper.date}</h2>
        </div>

        <div className={`flex_grow ${style.row_item} white box_shadow`}
          onClick={() => {props.toPaper(props.paper.id)}} >
          <h2 className="flex_item_column">{props.paper.title}</h2>
        </div>
        <div className={`${style.row_item} width_15`}>
          <button
            className={`flex_item_column ${style.nav_button_red} delete_button`}
            onClick={() => {props.deletePaper(props.paper.id)}}
            >Удалить</button>
        </div>

      </div>
  	)
  }
}
