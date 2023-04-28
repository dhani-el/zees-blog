import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import Home from './Home';
import Blog from '../Blog-page/Blog';
import BlogDetails from '../BlogDetails/BlogDetails';
import Admin from '../Admin/Admin';
import About from '../About-page/About';
import Genre from '../Genre/Genre';
import Circle from './Circle';
import Share from '../TechnicalComponents/Share';
import Error from '../Error-page/Error';
import Preloader from '../Preloader/Preloader';
import Signup from '../Auth-Component/Sign-up/Signup';
import Login from '../Auth-Component/Login/Login';



function App() {
  return (

    <Router>
      <div className="App">
        {/* <Cursor /> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Preloader />
              <NavBar />
              <Circle />
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/blogs/:id">
              <NavBar />
              <Circle />
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <Circle />
              <BlogDetails />
            </Route>
            <Route path="/about">
              <NavBar/>
              <Circle />
              <About />
            </Route>
            <Route path="/genre">
              <NavBar/>
              <Circle />
              <Genre />
            </Route>
            <Route path="/share">
              <Share />
            </Route>
            <Route path="/admin">
              <NavBar/>
              <Admin />
            </Route>
            <Route path="">
              <Error />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
