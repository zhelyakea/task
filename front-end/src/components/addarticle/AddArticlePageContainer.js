import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {style} from 'root/style'

import * as middlewares from 'actions/middlewares'

import ToBack from '../ToBack'
import SaveArticle from './SaveArticle'

export class AddArticlePage extends Component {
  constructor(){
    super()
    this.state = { text: '', title: ''}
  }
  changeTitle(event){
    this.setState({
      title: event.target.value
    })
  }
  changeText(event){
    this.setState({
      text: event.target.value
    })
  }
  render() {
    const { ...props } = this.props
		const { savePaperAndToBack } = this.props.middlewares
    return (
    	<div className={`h_w_100 ${style.col_container}`}>

				<h1 className={`${style.order_container} justify_center padding_15px`}>Добавление статьи.</h1>

        <div className={`${style.order_container} justify_center padding_15px`}>
          <input className="width_100"
            placeholder="title"
            value={this.state.title}
            onChange={::this.changeTitle}
          ></input>
        </div>

        <div className={`${style.col_container} justify_center scroll_height padding_0_15px`}>

				<textarea className={`scroll_height_inside list_order`}
					placeholder="text"
					value={this.state.text}
					onChange={::this.changeText}
				></textarea>
			</div>
        <div className={`${style.order_container} justify_space_between padding_15px`}>
  				<ToBack />
  				<SaveArticle
  					offset={props.current_offset}
  					title={this.state.title}
  					text={this.state.text}
  					savePaperAndToBack={savePaperAndToBack}
  				/>
  			</div>
			</div>
  	)
  }
}
AddArticlePage.propTypes = {
  current_offset: PropTypes.number.isRequired,
}
function mapStateToProps (state) {
	return {
		current_offset: state.current_offset,
	}
}
function mapDispatchToProps(dispatch) {
  return {
    middlewares: bindActionCreators(middlewares, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddArticlePage)
