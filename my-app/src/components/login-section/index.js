import { useState } from 'react';
import './index.css';

const LoginSection = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    // const [setIsLogged] = useState();

    let account;
    if(localStorage.getItem('account') != null){
        account = JSON.parse(localStorage.getItem('account'));
    }else{
        localStorage.setItem('account', JSON.stringify({logged: false}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(username === 'John' && email === 'johndoe@email.com'){
            localStorage.setItem('account', JSON.stringify({logged: true}))
            // setIsLogged(true);
            setUsername('');
        }
    }

    return(
        <>
            <div className='container'>
                <figure className='close-icon'>
                    <img src={process.env.PUBLIC_URL + '/images/navigation-images/close-icon.png'} alt='close login' onClick={() => {
                        props.setLogin(false);
                    }}></img>
                </figure>
                {!account.logged && <form className='input-label' onSubmit={handleSubmit}>
                    <h1>Welcome Back!</h1>
                    <label>
                        <input type="text" name="name" placeholder='Name'
                        value={username} onChange={(event) => {
                            setUsername(event.target.value)
                        }}/>
                    </label>
                    <label>
                        <input type="email" name="email" placeholder='Email'
                        value={email} onChange={(event) => {
                            setEmail(event.target.value)
                        }}/>
                    </label>
                    <label className='submit-button'>
                        <input type="submit" value="Log In"/>
                    </label>
                </form>}
                {account.logged && <div>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/gender-neutral-user.png" alt="gender-neutral-user"/>
                    <div id='account-info'>
                        <h4>johndoe@email.com</h4>
                        <h2>John Doe</h2>
                    </div>
                    <button id='logout-button'>Log out</button>
                </div>}
            </div>
        </>
    )
}

export default LoginSection;