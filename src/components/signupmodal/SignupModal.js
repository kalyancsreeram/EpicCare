import React, {useState} from 'react'

import './styles.scss';
import FadeLoader from "react-spinners/FadeLoader";
import axios from 'axios';
import { CONSTANTS } from '../../Constants';

function SignupModal() {
    const [formData, setFormData] = useState({
        email:"",
        password:"",    
        confirmPwd: "",
    });
    const [color] = useState("#9b2c79");
    const [loading, setLoading] = useState(false);
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    // useEffect(() => {  
    //     window.onclick = function(event) {            
    //         if (event.target.id === 'signupModal') {
    //             document.getElementById('signupModal').style.display='none';  
    //             setFormData({ email: '', password: '', confirmPwd: '', });  
    //         }
    // }}, []);

    const closeHandler = () => {
        document.getElementById('signupModal').style.display='none';         
        setFormData({ email: '', password: '', confirmPwd: '', });        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const signupHandler = (event) => {        
        if(formData.email && formData.password && formData.confirmPwd){
            let confirm_password = document.getElementById("signupconfirmpwd");
            if(formData.password !== formData.confirmPwd){  
                event.preventDefault();              
                confirm_password.setCustomValidity("Passwords Don't Match");  
                confirm_password.reportValidity();             
            }else{
                document.getElementById("signupModal").disabled = true;
                console.log(formData);
                setLoading(true);   
                event.preventDefault();
                signupCall();  
                confirm_password.setCustomValidity('');
            }           
        }
    }

    const signupCall = ()=> {                  
        axios
         .post(`${CONSTANTS.serverURL}/signup`, { ...formData })
         .then(response => {
              console.log(response);             
              setFormData({ email: '', password: '', confirmPwd: '', });            
              setLoading(false);                   
              document.getElementById('signupModal').style.display='none'   
              alert('Account created successfully!!');         
         })
         .catch(() => {
              document.getElementById("signupModal").disabled = false;
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
        <div id="signupModal" className="signupmodal modal">        
            <form className="modal-content animate">
                <div className="container">
                    <span onClick={closeHandler} className="close" title="Close Modal">&times;</span>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr></hr>
                   
                    <label htmlFor="email"><b>Email</b></label>                    
                    <input type="text" placeholder="Enter Email" name="email" required  
                           value={formData.email} onChange={handleChange}></input>
                   
                    <label htmlFor="psw"><b>Password</b></label>
                    <input id="signuppwd" type="password" placeholder="Enter Password" name="password" required
                           value={formData.password} onChange={handleChange}></input>

                    <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
                    <input id="signupconfirmpwd" type="password" placeholder="Confirm Password" name="confirmPwd" required 
                           value={formData.confirmPwd} onChange={handleChange}></input>
                    
                    <p>By creating an account you agree to our <a href="http://seizurecarenet.com/" style={{color:'red'}}>Terms & Privacy</a>.</p>

                    <div className="clearfix">
                        <button type="button"  onClick={closeHandler}  className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn" onClick={signupHandler}>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    </>
       
  )
}

export default SignupModal