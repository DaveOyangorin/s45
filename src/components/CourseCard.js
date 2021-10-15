import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CourseCard({courseProp}) {

	//Checks to see if the data was successfully passed
	//console.log(props)
	//console.log(typeof props)

	//Deconstruct the course properties into their own variables(destructuring)
	const { name, description, price } = courseProp;

	//Use the state hook for this component to be able to store its state
	//States are used to keep track of information related to individual component
	//Syntax
		//const [getter, setter] = useState(initialGetterValue)
		//getter = stored initial(default value)
		//setter = updated value
	const [count, setCount] = useState(0)
	const [seats, setSeats] = useState(10)
	//state hook that indicates the button for enrollment
	const [isOpen, setIsOpen] = useState(true);

	useEffect(()=>{
		if(seats === 0){
			setIsOpen(false);
		}
	}, [seats])

	//console.log(useState(0))

	function enroll() {
		if (seats > 0){
			setCount(count + 1);
			console.log('Enrollees: ' + count);
			setSeats(seats - 1);
			console.log('Seats: ' + seats);
		} else {
			alert("No more seats available")
		}
	}

	return(
			<Card>
				<Card.Body>
					<Card.Title><h2>{name}</h2></Card.Title>
					<Card.Subtitle>Description:</Card.Subtitle>
					<Card.Text>{description}</Card.Text>
					<Card.Subtitle>Price:</Card.Subtitle>
					<Card.Text>Php {price}</Card.Text>
					<Card.Text>Enrollees: {count}</Card.Text>
					<Card.Text>Seats: {seats}</Card.Text>
					{isOpen ? 
					<Button variant="primary" onClick={enroll}>Enroll</Button>
					:
					<Button variant="primary" disabled>Enroll</Button>
					}

				</Card.Body>
			</Card>

		)
}


//Check if the CourseCard Component is getting the correct prop types
//Proptypes are used for validating information passed to a component and is a tool normally used to help developers ensure the correct information is passed from one component to the next
CourseCard.propTypes = {
	//The 'shape' method is used to check if a prop object conforms to a specific 'shape'
	courseProp: PropTypes.shape({
		//define the properties and their expected types
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}

/*
mounting > updating > unmounting
mounting > rendering > re rendering > unmounting

login page (mounting)> typing data in inputs (rendering) (re rendering) > home (unmounting)

*/