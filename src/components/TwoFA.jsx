import './forms.css'

function TwoFactor({ onProceed }) {  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      onProceed();
    };
  
    return (
      <form className="Reset" onSubmit={handleSubmit}>
        <h2>Enter verification code</h2>
        <div className="input-icons">
          <i className="fa-regular fa-circle-user"></i>
          <input 
            type='text'
            placeholder='Enter 2FA code'
            className='input-field'
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className='reset-button'>Proceed</button>
        </div>
      </form>
    );
  }
  
  export default TwoFactor;