import { Fragment } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
//pages
import Home from './pages/Home';
import Courses from './pages/Courses'
import Register from './pages/Register';
import Login from './pages/Login';

//Bootstrap
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      < AppNavbar />
      <Container>
        < Login />
        <br/>
      	< Register />
        < Home />
        < Courses />
      </Container>
    </Fragment>
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