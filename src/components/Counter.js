import {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap';



/*useEffect allow us to perform tasks/function on initial render:
	-when the component is displayed for the first time 

what allows us to control when our useEffect will run Afeter the initial render?
	-we add an optional dependency ARRAY to control when useEffect will run , instead that it runs on initial render AND when states are updated , we can control the useEffect to run only when the states/s in the dependency array is updated*/

export default function Counter (){
	const [count, setCount] = useState(0)

	useEffect(() =>{
		document.title = `You click ${count} times`
	},[count])

	return(
		<Fragment>
			<p>You click {count}</p>
			<Button variant="primary" onClick={() => setCount(count +1 )} > Click me </Button>
		</Fragment>
		)
}