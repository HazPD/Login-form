import React, {useState} from "react";
import FormButtons from "./buttons";
import './forms.css'

function SignUp({viewForm,setviewForm}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        if (!name.trim()) {
            errors.name = "Name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            errors.email = "Invalid email address";
        }

        
        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully");
        }
    };

    return (
        <div className="form">
            <form className="signup" onSubmit={handleSubmit}>
                <h1>SignUp</h1>
                <div className="input-icons">
                    <i className="fa-regular fa-circle-user"></i>
                    <input 
                        type = 'text'
                        placeholder = 'Enter name...'
                        className = 'input-field'
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="input-icons">
                    <i className="fa-regular fa-envelope"></i>
                    <input 
                        type = 'email'
                        placeholder = 'Enter Email...'
                        className = 'input-field'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input> 
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="input-icons">
                    <i className="fa-solid fa-key"></i>
                    <input 
                        type = 'password'
                        placeholder = 'Enter password...'
                        className = 'input-field'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input> 
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="button-container">
                    <FormButtons viewForm={viewForm} setviewForm={setviewForm} />  
                </div>
            </form>

        </div>
    )
}

export default SignUp;