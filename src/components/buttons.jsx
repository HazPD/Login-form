import React from "react";

function FormButtons({ viewForm, setviewForm }) {
    return (
        <div className="form-buttons">
            <button 
                onClick={() => setviewForm('signup')} 
                className={viewForm === 'signup' ? 'active' : ''}
                type="button"  // Prevents form submission
            >
                Sign Up
            </button>
            <button 
                onClick={() => setviewForm('login')} 
                className={viewForm === 'login' ? 'active' : ''}
                type="button"  // Prevents form submission
            >
                Login
            </button>   
        </div>
    );
}

export default FormButtons;