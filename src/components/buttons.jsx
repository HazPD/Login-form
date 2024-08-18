import React from "react";

function FormButtons({ viewForm, setviewForm }) {
    return (
        <div className="form-buttons">
            <button onClick={() => setviewForm('signup')} className={viewForm === 'signup'}>
                Sign Up
            </button>
            <button onClick={() => setviewForm('login')} className={viewForm === 'login'}>
                Login
            </button>   
            
        </div>
    );
}

export default FormButtons;