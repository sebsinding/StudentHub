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
                <input className='LoginButton' type="submit" value="Login"></input>
            </div>
        </form>
    )
  };
  
  export default LoginForm;




