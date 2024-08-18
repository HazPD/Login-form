import './forms.css'

function Reset({ setviewForm, onProceed }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add any validation logic if needed
        onProceed();
    };

    return (
        <div className='reset form'>
            <form className="Reset" onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                <div className="input-icons">
                    <i className="fa-regular fa-circle-user"></i>
                    <input 
                        type='email'
                        placeholder='Enter your Email'
                        className='input-field'
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit" className='reset-button'>Proceed</button>
                </div>
            </form>
        </div>
    )
}

export default Reset