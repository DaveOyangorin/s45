import { Fragment, useState ,useEffect} from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
//pages
import Home from './pages/Home';
import Courses from './pages/Courses'
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';
//routing components
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

//Bootstrap
import { Container } from 'react-bootstrap';
//React Context
import UserContext from './UserContext';

/*
BrowserRouter component will enable us to simulate page navigation by synchronizing the shown content and the shown URL in the web browser

Switch component then declares with Route we can go to

Route component will render components within the switch container based on the defined route

exact property disables the partial matching for a route and makes sure that it only returns the route if the path is an exact match to the current url

If exact and path is missing, the Route component will make it undefined route and will be loaded into a specified component

*/
/*
react context is a global state to the app. It is a way to make a particular data available to all the components no matter  how they are nested.Context helps you to bradcast the data and changes happening to the data to all components.
*/

function App() {

  //add a state hook for user, 
  //The getItem() method returns value of the specified Storage Object item


  const [user, setUser] = useState({ 
    accessToken: localStorage.getItem('accessToken'),
    email: localStorage.getItem('email'),
   isAdmin: localStorage.getItem('isAdmin')== 'true'
   })

  //function for clearing localstorage on logout
  const unsetUser = () => {
    localStorage.clear()
  }

  //to check if properly stored upon login
  useEffect(() =>{
    console.log(user);
    console.log(localStorage)
  },[user])

//Provider Component that allows consuming components to subscribe to context changes
  return (
    <UserContext.Provider value={ {user, setUser, unsetUser} }>
        <Router>
          < AppNavbar />
          <Container>
            <Switch>
              < Route exact path="/" component={Home} />
              < Route exact path="/courses" component={Courses} />
              < Route exact path="/register" component={Register} />
              < Route exact path="/login" component={Login} />
              < Route exact path="/logout" component={Logout} />
              <Route component={Error} />
            </Switch>
          </Container>
        </Router>
    </UserContext.Provider>
  );
}

export default App;

/*
NOTES:

With the React Fragment component, we can group multiple components and avoid adding extra code

<Fragment> is preferred over <></> (shorcut syntax) because it is not universal and can cause problems in some other editors


JSX Syntax
JSX, or Javascript XML is an extension to the syntax of JS. It allows us to write HTML-like syntax within our React js projects and it includes JS features as well.

Install the Js(Babel) linting for code readability
1. Ctrl + Shift + P
2. In the input field type the word "install" and select the "package control: install package" option to trigger an installation of an add-on feature
3. Type "babel" in the input field to be installed

*/