import React from "react";
import FormButtons from "./buttons";
import './forms.css'

function Login({viewForm,setviewForm}) {
    return (
        <div className="form">
            <form className="login">
                <h1>Login</h1>

                <div className="input-icons">
                    <i className="fa-regular fa-envelope"></i>
                    <input 
                        type = 'email'
                        placeholder = 'Enter Email...'
                        className = 'input-field'>
                    </input> 
                </div>

                <div className="input-icons">
                    <i className="fa-solid fa-key"></i>
                    <input 
                        type = 'password'
                        placeholder = 'Enter password...'
                        className = 'input-field'>
                    </input> 
                </div>

                <div className="reset-container">
                    <p>Forgot password?</p>
                    <button id="reset-button"
                            onClick={() => setviewForm('reset')}
                            >Click here
                    </button>
                </div>

                <div className="button-container">
                    <FormButtons viewForm={viewForm} setviewForm={setviewForm} />  
                </div>
            </form>

        </div>
    )
}

export default Login;