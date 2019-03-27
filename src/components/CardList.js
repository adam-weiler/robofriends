import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if (true) { //This shows the Error Boundary in action.
	// 	throw new Error('NOOOOOO!')
	// }
	return (
	<div>
		{
			robots.map((user, i) => {
				return (
					<Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
				);
			})
		}
	</div>		
	);
}

export default CardList;