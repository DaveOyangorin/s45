import { Fragment ,useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function Login(){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isActive, setIsActive] = useState(false);



	useEffect(()=>{
		//Validation to enable submit button when all fields are populated and both passwords match
		if((email !== '' && password !== '')){
			setIsActive(true);
		}else{
			setIsActive(false);
		}

	}, [email, password ])

	function Login(e){
		e.preventDefault();
		//to clear out the data in our input fields
		setEmail('')
		setPassword('')
		

		
//swal effect
		Swal.fire({
			title: 'Yaaaaaaaaaaaaaay!!!!',
			icon: 'success',
			text: 'You have successfuly Login!'
		})
	}

	return (
		<Fragment>
			<h1>Login</h1>
			<Form onSubmit={(e) => Login(e)}>
				<Form.Group>
					<Form.Label>Email address:</Form.Label>
					<Form.Control
						type="email" 
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder="Input Email"
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label> Password</Form.Label>
					<Form.Control 
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="Input Password"
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