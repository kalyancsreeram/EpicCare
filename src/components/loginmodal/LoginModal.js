import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';
import axios from 'axios';
import { CONSTANTS } from '../../Constants';
import FadeLoader from "react-spinners/FadeLoader";

import './styles.scss';

function LoginModal() {   
    const [color] = useState("#9b2c79");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        username:"",
        password:"",       
    });
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };
    
    const auth = useAuth();
    const navigate = useNavigate();
  
    // useEffect(() => {    
    //     window.onclick = function(event) {          
    //         if (event.target.id === 'loginModal') {
    //             console.log(event.target.id);
    //             document.getElementById('loginModal').style.display='none';
    //         }
    // }}, []);

    const closeHandler = () => {
        document.getElementById('loginModal').style.display='none';
        setUser({ username: '', password: '' });       
    }
    const loginHandler = (event) => {  
        if(user.username && user.password){
            document.getElementById("loginModal").disabled = true;
            console.log(user);
            setLoading(true);   
            event.preventDefault();
            loginCall();  
        }
    }

    const loginCall = ()=> {                  
          axios
           .post(`${CONSTANTS.serverURL}/login`, { ...user })
           .then(response => {
                console.log(response);
                const { token } = response.data;
                // Store the token in local storage
                localStorage.setItem('token', token);
                auth.login(token);
                setUser({ username: '', password: '' });            
                setLoading(false);   
                navigate('physician-portal');       
                document.getElementById('loginModal').style.display='none'          
           })
           .catch(() => {
                document.getElementById("loginModal").disabled = false;
                setLoading(false); 
                alert('Something went wrong. Try again later');            
           })
    }
    
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: '2' };

  return (  
    <>
        <div style={style}>
            <FadeLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"            
            />
        </div>    
        <div id="loginModal" className="modal">
        <form className="modal-content animate">
            <div className="imgcontainer">
                <span onClick={closeHandler} className="close" title="Close Modal">&times;</span>
                {/* <img src='' style={{ width: '50px', height:'50px'}} alt='Avatar' className='avatar'/> */}
            </div>
            <div className="loginModalContainer" >
                <label htmlFor="uname"><b>Username</b></label>
                <input type='text' className='loginInput' placeholder='Enter Username' 
                       name='username' required  value={user.username}
                       onChange={handleChange}></input>
                <label htmlFor="psw"><b>Password</b></label>
                <input type='password' className='loginInput' placeholder='Enter Password' name='password' required
                value={user.password} onChange={handleChange}></input>          
                <button type="submit" onClick={loginHandler}>Login</button>  
                <label>
                    <input type='checkbox' checked="checked" onChange={() => {}} name='remember'></input>
                    Remember me
                </label>
            </div>
            <div className='loginModalCancelContainer'>              
               <a href="/">Forgot password?</a>
            </div>  
        </form>
    </div>

    </>
   
   )
}        

export default LoginModal