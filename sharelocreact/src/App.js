import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
            }}
        >
      <h1>ShareLoc</h1>
        <Link to="/signin"> ToSignin</Link>
        <Link to="/signup"> ToSingup </Link>
        </nav>
    </div>
  );
}

export default App;
