import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {style} from 'root/style'

import * as middlewares from 'actions/middlewares'

import ToBack from '../ToBack'
import ShowComment from './ShowComment'
import AddComment from './AddComment'


export class ArticlePage extends Component {
  constructor(){
    super()
    this.state = { comment: ''}
    this.inputComment = ::this.inputComment
    this.saveComment = ::this.saveComment
  }
  inputComment(event){
    this.setState({
      comment: event.target.value
    })
  }
  saveComment(){
    const { addComment } = this.props.middlewares
    addComment(this.props.selected_paper, this.state.comment)
    this.setState({
      comment: ''
    })
  }
	componentDidMount(){
		const { ...props } = this.props
		const { getPaper } = this.props.middlewares
		getPaper(props.selected_paper)
	}
	render() {
		const { ...props } = this.props
		const { papers_texts, selected_paper, comments, comment_visible } = this.props
		const { showComment } = this.props.middlewares
		const text = papers_texts[selected_paper]

		const comment = comment_visible ? comments.records.filter(value => {
			return value.article === props.selected_paper
		}): []
		const comment_text = comment.map(value => {
			return <div className="comment_div" key={value.id}>
				<p className="comment_title box_shadow">{value.user}</p>
				<p className="comment_text box_shadow">{value.text}</p>
			</div>
			})
			const comment_div = comment_visible ?
			<div>
				{comment_text}
  			<div className={`${style.order_container} justify_center padding_0_15px`}>
      		<textarea className="flex_grow"
        		placeholder="Комментарий"
        		value={this.state.comment}
        		onChange={(event) => this.inputComment(event)}
      		/>
      		<AddComment
      			selected_paper={selected_paper}
      			saveComment={this.saveComment}
    			/>
        </div>
      </div> : null
		return (
    	<div className={`h_w_100 ${style.col_container}`}>
				<h1 className={`${style.order_container} justify_center padding_15px`}> {props.paper.title} </h1>
        <div className={`${style.order_container} justify_end padding_15px`}>
				    <p className="comment_text flex_grow">{text}</p>
        </div>
        <div className={`${style.order_container} justify_end padding_0_15px`}>
  				<ShowComment
  					showComment={showComment}
  					comment_visible={comment_visible}
  				/>
        </div>
      <div className={`${style.col_container} justify_center scroll_height padding_15px`}>
  			<div className={`scroll_height_inside list_order`}>
  				{comment_div}
      </div>
    </div>
        <div className={`${style.order_container} justify_space_between padding_15px`}>
				    <ToBack />
        </div>
			</div>
		)
	}
}
ArticlePage.propTypes = {
  selected_paper: PropTypes.string.isRequired,
  paper: PropTypes.object.isRequired,
  papers_texts: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
  comment_visible: PropTypes.bool.isRequired,
}
function mapStateToProps (state) {
	return {
		selected_paper: state.selected_paper,
		paper: state.paper,
		papers_texts: state.papers_texts,
		comments: state.comments,
		comment_visible: state.comment_visible,
	}
}
function mapDispatchToProps(dispatch) {
  return {
    middlewares: bindActionCreators(middlewares, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage)
