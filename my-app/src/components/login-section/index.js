import './index.css';

const LoginSection = (props) => {
    return(
        <>
            <div className='container'>
                <figure className='close-icon'>
                    <img src={process.env.PUBLIC_URL + '/navigation-images/close-icon.png'} alt='close login' onClick={() => {
                        props.setLogin(false);
                    }}></img>
                </figure>
                <form className='input-label'>
                    <h1>Welcome Back!</h1>
                    <label>
                        <input type="text" name="name" placeholder='Name'/>
                    </label>
                    <label>
                        <input type="email" name="email" placeholder='Email'/>
                    </label>
                    <label className='submit-button'>
                        <input type="submit" value="Log In"/>
                    </label>
                </form>
            </div>
        </>
    )
}

export default LoginSection;