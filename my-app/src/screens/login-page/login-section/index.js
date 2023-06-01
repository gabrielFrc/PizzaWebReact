import './index.css'

const LoginSection = () => {
    return(
        <div className='container'>
            <form className='input-label'>
                <label>
                    <h1>Login</h1>
                    <input type="text" name="name" placeholder='Name'/>
                </label>
            </form>
        </div>
    )
}

export default LoginSection;