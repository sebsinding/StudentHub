import './LoginForm.css';

const LoginForm = () => {
    return (
        <form action="#"> 
            <div>
                <span>
                    <input className='InputBox' type="text" placeholder="Student-ID"></input>
                </span>
            </div>
            <div>
                <span>
                    <input className='InputBox' type="password" placeholder="Password"></input>
                </span>
            </div>
            <div>
                <form action='/Calendar'>
                    <input className='LoginButton' type="submit" value="Login" to="/Calendar"></input>
                </form>
            </div>
        </form>
    )
  };
  
  export default LoginForm;




