import { Fragment, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';


export default function Register(){

	//State hooks to store the values of the input fields
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const [isActive, setIsActive] = useState(false);

	//Check if values are successfully binded
	console.log(email)
	console.log(password1)
	console.log(password2)

	useEffect(()=>{
		//Validation to enable submit button when all fields are populated and both passwords match
		if((email !== '' && password1 !== '' && password2 !== '') && (password1 === password2)){
			setIsActive(true);
		}else{
			setIsActive(false);
		}

	}, [email, password1, password2])


	function registerUser(e){
		e.preventDefault();
		//to clear out the data in our input fields
		setEmail('')
		setPassword1('')
		setPassword2('')

		Swal.fire({
			title: 'Yaaaaaaaaaaaaaay!!!!',
			icon: 'success',
			text: 'You have successfuly registered!'
		})
	}

	//Two way binding
	//The values in the fields of the form is bound to the getter of the state and the event is bound to the setter. This is called two way binding
	//The data we changed in the view has updated the state
	//the data in the state has updated the view

	return(
		<Fragment>
			<h1>Register</h1>
			<Form onSubmit={(e) => registerUser(e)}>
				<Form.Group>
					<Form.Label>Email address:</Form.Label>
					<Form.Control
						type="email" 
						placeholder="Enter email"
						value={email}
						onChange={e => setEmail(e.target.value)}// the e.target.value property allows us to gain access to the input field's current value to be used when submitting form data
						required
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control 
						type="password"
						placeholder="Enter your Password"
						onChange={e => setPassword1(e.target.value)}
						value={password1}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Verify Password</Form.Label>
					<Form.Control 
						type="password"
						placeholder="Verify your Password"
						value={password2}
						onChange={e => setPassword2(e.target.value)}
						required
					/>
				</Form.Group>
				{isActive ?
				<Button variant="primary" type="submit" id="submitBtn">
					Submit
				</Button>
				:
				<Button variant="primary" type="submit" id="submitBtn" disabled>
					Submit
				</Button>
				}

			</Form>
		</Fragment>



		)
}
