import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {createContext,useContext,useState} from 'react'
import NavBar from '../Navbar/Navbar';
import Home from './Home';
import Blog from '../Blog-page/Blog';
import BlogDetails from '../BlogDetails/BlogDetails';
import Admin from '../Admin/Admin';
import About from '../About-page/About';
import Genre from '../Genre/Genre';
import Circle from './Circle';
import Share from '../TechnicalComponents/Share';
import Cursor from '../TechnicalComponents/cursor';
import Error from '../Error-page/Error';
import Preloader from '../Preloader/Preloader';
import Signup from '../Auth-Component/Sign-up/Signup';


// const paginationContext = createContext(null)
function App() {
  // const [queryValue,setQueryValue] = useState(null);
  return (

    <Router>
      <div className="App">

        <Circle />
        <Cursor />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Preloader />
              <NavBar />
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/blogs/:id">
              <NavBar />
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <NavBar/>
              <BlogDetails />
            </Route>
            <Route path="/about">
              <NavBar/>
              <About />
            </Route>
            <Route path="/genre">
              <NavBar/>
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
