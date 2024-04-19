import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';

import './styles.scss';

function LoginModal() {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
  
    useEffect(() => {       
        let modal = document.getElementById('loginModal');
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
    }}, []);

    const closeHandler = () => {
        document.getElementById('loginModal').style.display='none'
    }
    const loginHandler = (event) => {           
        auth.login(user);
        navigate('physician-portal');
        event.preventDefault();
        document.getElementById('loginModal').style.display='none'
    }

  return (  
    <div id="loginModal" className="modal">
        <form className="modal-content animate">
            <div className="imgcontainer">
                <span onClick={closeHandler} className="close" title="Close Modal">&times;</span>
                {/* <img src='' style={{ width: '50px', height:'50px'}} alt='Avatar' className='avatar'/> */}
            </div>
            <div className="loginModalContainer" >
                <label htmlFor="uname"><b>Username</b></label>
                <input type='text' className='loginInput' placeholder='Enter Username' 
                       name='uname' required onChange={(e) => setUser(e.target.value)}></input>
                <label htmlFor="psw"><b>Password</b></label>
                <input type='password' className='loginInput' placeholder='Enter Password' name='psw' required></input>          
                <button type="submit" onClick={loginHandler}>Login</button>  
                <label>
                    <input type='checkbox' checked="checked" name='remember'></input>
                    Remember me
                </label>
            </div>
            <div className='loginModalCancelContainer'>              
               <a href="/">Forgot password?</a>
            </div>  
        </form>
    </div>

   )
}        

export default LoginModal