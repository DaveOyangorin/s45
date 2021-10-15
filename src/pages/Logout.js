import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext'

export default function Logout(){
	const { setUser, unsetUser } = useContext(UserContext)

	//clear the localStorage of the user's information
	unsetUser();

	useEffect(() => {
		setUser({ accessToken: null })
	}, [])

	return(
		//Redirected back to login
		< Redirect to= "/login" />
		)
}