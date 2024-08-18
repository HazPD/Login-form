import React from "react";
import FormButtons from "./buttons";
import './forms.css'

function SignUp({viewForm,setviewForm}) {
    return (
        <div className="form">
            <form className="login">
                <h1>SignUp</h1>
                <div className="input-icons">
                    <i className="fa-regular fa-circle-user"></i>
                    <input 
                        type = 'text'
                        placeholder = 'Enter name...'
                        className = 'input-field'>
                    </input>
                </div>

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

                <div className="button-container">
                    <FormButtons viewForm={viewForm} setviewForm={setviewForm} />  
                </div>
            </form>

        </div>
    )
}

export default SignUp;