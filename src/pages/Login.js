import { useState, useEffect, Fragment, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
//React Context
import UserContext from '../UserContext';
//routing
import { Redirect , useHistory} from 'react-router-dom'

export default function Login(){
	const history = useHistory();
	//useContext is a react hook used to unwrap our context. It will return the data passed as values by a provider(UserContext.Provider component in App.js)
	const { user, setUser } = useContext(UserContext)

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [loginButton, setLoginButton] = useState(false)


	useEffect(() =>{
		if(email !== '' && password !== ''){
			setLoginButton(true)
		}else{
			setLoginButton(false)
		}
	}, [email, password])


	function login(e){
		e.preventDefault();

		fetch('http://localhost:4000/users/login', {method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})

		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.accessToken !== undefined){
				localStorage.setItem('accessToken', data.accessToken);
				setUser({ accessToken: data.accessToken});

				Swal.fire({
				title: "Yaaaaay!",
				icon: "Success",
				text: "Thank You For Loggin in to Zuitt Bootcamp!"
				})
			//get user's details from our token
				fetch('http://localhost:4000/users/details' ,{
					headers:{
						Authorization:`Bearer ${data.accessToken}`
					}
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					if(data.isAdmin === true){
						localStorage.setItem('email', data.email)
						localStorage.setItem('isAdmin', data.isAdmin)
						setUser({
							email:data.email,
							isAdmin: data.isAdmin
						})
						history.push('/courses')
					}else{
						//if not admin
						history.push('/')
					}

				})

			}else{
				Swal.fire({
				title: "Ooppps!",
				icon: "error",
				text: "Something Went Wrong.!"
				})
			}

			setEmail('')
			setPassword('')

		})


	}

	//redicrect the user to the homepage when user login

	return(
		(user.accessToken !== null) ?
			<Redirect to="/" />
			:

	<Fragment>
		<h1>Login</h1>
		<Form onSubmit={e => login(e)}>
			<Form.Group>
				<Form.Label>Email Address:</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter you email here"
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Password:</Form.Label>
				<Form.Control
					type="password"
					placeholder="Enter you password here"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
			</Form.Group>

			{loginButton ?
			<Button variant="primary" type="submit">Submit</Button>
			:
			<Button variant="primary" type="submit" disabled>Submit</Button>
			}

		</Form>
	</Fragment>

		)
}