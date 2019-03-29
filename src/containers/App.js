import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions'

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: []
		}
		console.log('1 - constructor');
	}

	componentDidMount() {
		//console.log('Component mounted.')
		// console.log(this.props.store.getState());
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ robots: users}))
		console.log('2 - componentDidMount');
	}

	// onSomeSearchChange = (event) => {
	// 	this.setState({ searchField: event.target.value })
	// }

	render() {
		//console.log(event.target.value);

		// const { robots, searchField } = this.state;
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return !robots.length ? 
			<h1>Loading</h1> :

			//console.log(filteredRobots)
			//console.log('3 - render');
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

