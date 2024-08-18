import React from "react";

function FormButtons({ viewForm, setviewForm }) {
    const handleSignUpClick = () => {
        console.log("SignUp button clicked, current viewForm:", viewForm);
        if (viewForm === 'signup') {
            alert('Account created!');
        } else {
            console.log("Switching to SignUp form");
            setviewForm('signup');  
        }
    };

    const handleLoginClick = () => {
        console.log("Login button clicked, switching to Login form");
        setviewForm('login');  
    };

    return (
        <div className="form-buttons">
            <button 
                onClick={handleSignUpClick}  
                type="button"  
            >
                Sign Up
            </button>
            <button 
                onClick={handleLoginClick} 
            >
                Login
            </button>   
        </div>
    );
}

export default FormButtons;