import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Redirect,
} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Toaster} from "react-hot-toast";
import Home from "./pages/home/index.jsx";
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <Router history={history}>
      <div>
        <Helmet>
          <title>Insta clone</title>
        </Helmet>
        <Toaster position="top-right" reverseOrder={false} />

        {/* TODO: Create sidebar*/}
        <Navbar/>

        <div className={""}>
          <Routes>
            <Route
              path={"/"}
              element={<Home />}
            />
            {/*<Redirect to={`/`} />*/}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
