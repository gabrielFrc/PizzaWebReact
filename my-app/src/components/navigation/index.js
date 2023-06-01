import { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import LoginSection from '../../screens/login-page/login-section';

const Navigation = (props) => {
    let [blur, setBlur] = useState(true);
    const blurPage = () => {
        if(blur){
            document.querySelector('header').classList.add('blur-all')
            document.querySelector('main').classList.add('blur-all')
            document.querySelector('footer').classList.add('blur-all')
        }
        else{
            document.querySelector('header').classList.remove('blur-all')
            document.querySelector('main').classList.remove('blur-all')
            document.querySelector('footer').classList.remove('blur-all')
        }
        console.log(blur);
        setBlur(!blur)
    }

    let navigate = useNavigate();
    const directTo = (id) => {
        navigate(`${id}`);
    }
    
    return(
        <>
            <header>
                <nav>
                    <img className='logo-img' src='/navigation-images/logo.png' alt='Site Logo' onClick={() => directTo('/')}></img>
                    <div className='create-button'>
                        {
                            props.button.map((element) => {
                                return(
                                    <>
                                        <button onClick={() => {
                                            blurPage();
                                            return element.redirect ? directTo(`${element.routeId}`) : null
                                        }}>
                                            <div>
                                                { element.img != null ? <img src={element.img} alt='User Icon'></img> : null}
                                                <p>{`${element.name}`}</p>
                                            </div>
                                        </button>
                                    </>
                                )
                            })
                        }
                    </div>
                </nav>
            </header>
            {blur ? null : <LoginSection/>}
        </>
    )
}

export default Navigation;