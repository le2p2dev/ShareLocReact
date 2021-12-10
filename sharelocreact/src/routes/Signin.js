import {useState} from "react";

export default function Signin( ) {


    const [user, setUser] = useState({login: "", password: ""})
    const [error, setError ] = useState("")

    const Login = (details) => {
        console.log(details)
    }

    const Submit = (e) => {
        e.preventDefault();
        Login(user)
    }


    return (
       <>
           <form onSubmit={Submit}>
               <div className="form-inn">
                   <h2>Login</h2>
                   <div className="form-group">
                       <label htmlFor="login">login</label>
                       <input type="text" name="login" id="loginInpt"
                              value={user.login} onChange={ e => setUser({...user, login: e.target.value}) }
                       />
                   </div>
                   <div className="form-group">
                       <label htmlFor="password">password</label>
                       <input type="password" name="password" id="passwordInpt"
                              value={user.password} onChange={ e => setUser({...user, password: e.target.value}) }
                       />
                   </div>
                   <input type="submit" value="submit"/>
               </div>
           </form>

       </>
    );
}