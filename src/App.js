import './App.css';
import NavSlide from './components/NavSlide'
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sockett from "./Socket"
import { GlobalProvider } from "./context/Provider"

function App(props) {
  return (
    <GlobalProvider>
      <div className="App">
        {props.location.pathname === "/login" || props.location.pathname === "/" ||
          props.location.pathname === "/signup" ? (
            <div className=" signin-container container mt-md-0 mt-3">
              {props.children}
            </div>
          ) : (
            <div>
              <NavSlide />
              <div className="mt-1">{props.children}</div>
            </div>
          )}
      </div>
    </GlobalProvider>
  );
}

export default withRouter(App);
