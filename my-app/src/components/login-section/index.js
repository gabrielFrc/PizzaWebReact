import { useEffect, useRef, useState } from 'react';
import './index.css';

const LoginSection = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')))
    
    const checkInput = useRef();
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('account')) != null){
            if(checkInput.current){
                checkInput.current.checked = JSON.parse(localStorage.getItem('account')).rememberPass;
            }
            if(JSON.parse(localStorage.getItem('account')).rememberPass &&
                JSON.parse(localStorage.getItem('account')).logged != null){
                setPassword('John123');
                setEmail('johndoe@email.com');
            }
        }
    }, [account])
      

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(password === 'John123' && email === 'johndoe@email.com'){
            localStorage.setItem('account', JSON.stringify({...account, logged: true}));
            setPassword('');
            setEmail('');
            setAccount(JSON.parse(localStorage.getItem('account')));
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
                {(account == null || !account.logged) && <form className='input-label' onSubmit={handleSubmit}>
                    <h1>Welcome Back!</h1>
                    <label>
                        <input className='text-input' type="email" name="email" placeholder='Email'
                        value={email} onChange={(event) => {
                            setEmail(event.target.value)
                        }}/>
                    </label>
                    <label>
                        <input className='text-input' type="text" name="name" placeholder='Password'
                        value={password} onChange={(event) => {
                            setPassword(event.target.value)
                        }}/>
                    </label>
                    <input type="checkbox" value="" id="flexCheckDefault" ref={checkInput} onClick={() => {
                        if(account != null){
                            localStorage.setItem('account', JSON.stringify({...account, rememberPass: !account.rememberPass}));
                            setAccount(JSON.parse(localStorage.getItem('account')));
                        }else{
                            localStorage.setItem('account', JSON.stringify({...account, rememberPass: true}));
                            setAccount(JSON.parse(localStorage.getItem('account')));
                        }
                    }}/>
                    <label className='label-checkbox'>
                        Remember me
                    </label>
                    <label className='submit-button'>
                        <input type="submit" value="Log In"/>
                    </label>
                </form>}
                {(account != null && account.logged) && <div id='profile-logged'>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/gender-neutral-user.png" alt="gender-neutral-user"/>
                    <div id='account-info'>
                        <h4>johndoe@email.com</h4>
                        <h2>John Doe</h2>
                    </div>
                    <button id='logout-button' onClick={() => {
                        localStorage.setItem('account', JSON.stringify({...account, logged: false}));
                        
                        setAccount(null);
                        setAccount(JSON.parse(localStorage.getItem('account')));
                    }}>Log out</button>
                </div>}
            </div>
        </>
    )
}

export default LoginSection;