import React, {useState} from 'react';
import './App.css'
import SignUp from './components/signup'
import Login from './components/login'
import Reset from './components/reset'  
import TwoFactor from './components/TwoFA';
import NewPassword from './components/newpassword';


function App() {

  const [viewForm, setviewForm] = useState('signup');
  const [showTwoFA, setShowTwoFA] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleResetProceed = () => {
    setShowTwoFA(true);
  };

  const handleTwoFAProceed = () => {
    setShowNewPassword(true);
  };

    return (
        <div className="App">
          <div className="form-container">
            {viewForm === 'signup' && <SignUp setviewForm={setviewForm}/>}
            {viewForm === 'login' && <Login setviewForm={setviewForm}/>}
            {viewForm === 'reset' && !showTwoFA && !showNewPassword && (
            <Reset setviewForm={setviewForm} onProceed={handleResetProceed} />
            )}
            {viewForm === 'reset' && showTwoFA && !showNewPassword && (
            <TwoFactor onProceed={handleTwoFAProceed} />
            )}
            {viewForm === 'reset' && showNewPassword && (
            <NewPassword />
            )}      
          </div>
        </div>
    );

}

export default App
