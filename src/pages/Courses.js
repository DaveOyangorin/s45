import{ useState, useEffect, useContext} from 'react';

//bootstrap
import{ Container } from 'react-bootstrap';
//components
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';
//react context
import UserContext from '../UserContext';


export default function Courses() {
	const { user } = useContext(UserContext);
	const [allCourses, setAllCourses] = useState([])

	const fetchData = () => {
		fetch('http://localhost:4000/courses/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setAllCourses(data)
		})
	}
	useEffect(()=>{
		fetchData()
	},[])


	return(
		<Container>
			{
				(user.isAdmin === true) ?
				<AdminView coursesData = {allCourses} />
				:
				<UserView coursesData = {allCourses} />
			}	
		</Container>
		)
}