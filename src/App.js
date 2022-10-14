import {getAuth} from 'firebase/auth'
import './App.css';
import ResisterReactBootstrap from './Components/ResisterReactBootstrap';
import app from './firebase/firebase.init';
function App() {
  const auth = getAuth(app);

  const handleResister = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password)
  }

  const handleEmailBlur = event =>{
    console.log(event.target.value)
  }

  const handlePasswordBlur = event =>{
    console.log(event.target.value)
  }

  return (
    <div className="">
      <ResisterReactBootstrap></ResisterReactBootstrap>











      {/* <form onSubmit={handleResister}>
        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='your email'/>
        <br/>
        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='your password' />
        <br/>
        <button type="submit">Resister</button>
      </form> */}
    </div>
  );
}

export default App;
