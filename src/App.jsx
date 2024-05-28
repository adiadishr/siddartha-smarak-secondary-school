import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Popup from './components/global/Popup'
import Topbar from './components/global/Topbar'
import Navbar from './components/global/Navbar'
import Main from './pages/Main'
import Books from './pages/Books'
import About from './pages/About'
import Contact from './pages/Contact'
import Academics from "./pages/Academics";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/global/Footer";
import News from "./pages/News";
import Blog from "./pages/Blog";
import BlogPage from "./components/blog/BlogPage";
import Gallery from "./pages/Gallery";
AOS.init();

const App = () => {

  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Popup />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Academics' component={Academics} />
          <Route exact path='/News' component={News} />
          <Route exact path='/Blog' component={Blog} />
          <Route exact path='/Books' component={Books} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/blog/:id' component={BlogPage} />
          <Route exact path='/Gallery' component={Gallery} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App