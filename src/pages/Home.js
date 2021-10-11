import { Fragment } from 'react';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
/*import CourseCard from '../components/CourseCard';*/
/*import Welcome from '../components/Welcome';*/


export default function Home(){
	return(
		<Fragment>
			{/*< Welcome kahitAno="Jane" age={25} />*/}
			< Banner />
			< Highlights />
		</Fragment>
		)
}