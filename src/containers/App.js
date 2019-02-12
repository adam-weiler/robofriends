import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
		console.log('1 - constructor');
	}

	componentDidMount() {
		//console.log('Component mounted.')
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ robots: users}))
		console.log('2 - componentDidMount');
	}

	onSomeSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}

	render() {
		//console.log(event.target.value);

		const { robots, searchField } = this.state;
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
					<Scroll>
						<SearchBox searchChange={this.onSomeSearchChange}/>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
	}
}

export default App;