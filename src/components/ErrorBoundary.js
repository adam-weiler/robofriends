import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) { //If something goes wrong, this life cycle triggers.
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) { //If there is an error, returns message.
			return <h1>Oooops.. That is not good!</h1>
		} //Else returns content.
		return this.props.children
	}
}

export default ErrorBoundary