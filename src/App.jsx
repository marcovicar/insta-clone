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
import CreateUserPage from "./pages/createUser/index.jsx";

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

        <div className={"h-screen bg-white overflow-hidden flex"}>
          <div
            className={
              `relative flex flex-col flex-1 mx-auto w-0 mb-2 pb-2 transition-transform duration-300 max-w-screen-fullHD md:px-6 z-0`
            }
          >
            <Routes> {/* Old Switch */}
              <Route
                path={"/"}
                element={<Home />}
              />
              <Route
                path={"/create-user"}
                element={<CreateUserPage />}
              />
              {/*<Redirect to={`/`} />*/}
            </Routes> {/* Old Switch */}
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
