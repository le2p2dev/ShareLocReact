import {Link} from "react-router-dom";
import {useState} from "react";

function App() {


    return (
        <>

            <nav>
                <h1>ShareLoc</h1>
                <Link to="/signin"> ToSignin</Link>
                <Link to="/signup"> ToSingup </Link>
            </nav>


        </>
    );
}

export default App;
