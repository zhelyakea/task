import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {style} from 'root/style'

import * as middlewares from 'actions/middlewares'
import * as actions from 'actions'

import ListArticle from './ListArticle'
import AddArticle from './AddArticle'
import FilterButton from './FilterButton'
import NavButton from './NavButton'

const { map, sort } = Array.prototype

export class Articles extends Component {
  constructor(){
    super()
    this.state = { filter: null}
    this.setFilter = ::this.setFilter
  }
  setFilter(type){
    this.setState({
      filter: type
    })
  }
	componentDidMount(){
		const { articlesFetch } = this.props.middlewares
		articlesFetch(this.props.current_offset)
	}
	render() {
		const { ...props } = this.props
		const { toPaper, articlesFetch } = this.props.middlewares
		const { deletePaper } = this.props.actions

		let papers_list_array = null
		const list_to_map = props.papers

		switch(this.state.filter){
			case null:
				papers_list_array = list_to_map
				break;
			case 'title':
				papers_list_array = list_to_map::sort((curr, next) => {
				  return curr.title > next.title
				})
				break;
			case 'date':
				papers_list_array = list_to_map::sort((curr, next) => {
				  return curr.date > next.date
				})
				break;
		}
    const orders_list = papers_list_array::map(paper =>{
			 return <ListArticle
				key = {paper.id}
				paper = {paper}
				toPaper = {toPaper}
				deletePaper = {deletePaper}
				/>
		})
		return (
    	<div className={`h_w_100 ${style.col_container}`}>
				<h1 className={`${style.order_container} justify_center padding_15px`}>Список статей</h1>


          <div className={`${style.col_container} justify_center scroll_height padding_0_15px`}>
            <div className="scroll_height_inside list_order ">
              <div className={`${style.order_container} justify_end`}>
        				<FilterButton
        					type="title"
        					selected_type={this.state.filter}
        					setFilter={this.setFilter}
        					text="Название"
        				/>
        				<FilterButton
        					type="date"
        					selected_type={this.state.filter}
        					setFilter={this.setFilter}
        					text="Дата"
        				/>
              </div>
      				{orders_list}
              <div className={`${style.order_container} justify_end`}>
        				<AddArticle />
              </div>
            </div>
          </div>
        <div className={`${style.order_container} justify_space_between padding_15px`}>
  				<NavButton
  					offset={props.current_offset}
  					articlesFetch={articlesFetch}
  					type="prev"
  				/>
  				<NavButton
  					offset={props.current_offset}
  					articlesFetch={articlesFetch}
  					type="next"
  				/>
        </div>
			</div>
		)
	}
}
Articles.propTypes = {
  papers: PropTypes.array.isRequired,
  current_offset: PropTypes.number.isRequired,
}
function mapStateToProps (state) {
	return {
		papers: state.papers,
		current_offset: state.current_offset,
	}
}
function mapDispatchToProps(dispatch) {
  return {
    middlewares: bindActionCreators(middlewares, dispatch),
    actions: bindActionCreators(actions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Articles)
