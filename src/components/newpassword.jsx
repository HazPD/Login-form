import './forms.css'

function NewPassword () {
    return (
        <form className="new-password">
                <h2>Enter new password</h2>
                <div className="input-icons">
                    <i className="fa-regular fa-circle-user"></i>
                    <input type = 'password'
                        placeholder = 'Enter new password'
                        className='input-field'>
                    </input>
                </div>

                <div className="input-icons">
                    <i className="fa-regular fa-circle-user"></i>
                    <input type = 'password'
                        placeholder = 'Confirm your new password'
                        className='input-field'>
                    </input>
                </div>
                <button>Confirm</button>
            </form>
    )
}

export default NewPassword