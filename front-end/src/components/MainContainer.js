import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {style} from 'root/style'

export class Main extends Component {
	render() {
    const { children } = this.props
		const loading = this.props.fetch !== 'success' ?
			<div className="absolute">
				<div className="loading"></div>
			</div> : null
		return (
			<div className={`h_w_100  ${style.col_container}`}>
				<div className="h_w_100">
					{children}
					{loading}
				</div>
			</div>
		)
	}
}
Main.propTypes = {
  fetch: PropTypes.string.isRequired,
}
function mapStateToProps (state) {
	return {
		fetch: state.fetch,
	}
}
function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
