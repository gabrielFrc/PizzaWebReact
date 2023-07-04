// NODE MODULES
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
// MY COMPONENTS
import LoginSection from '../login-section';
import ShowCartList from '../show-cart-list';
import BlurConfig from './blur-config';
import Menu from './menu-config';

const Navigation = (props) => {
    /* Login configs */
    let [isLoginOn, setLogin] = useState(false);

    /* Cart configs */
    let [cart, setCart] = useState({
        showCart: false,
        cartQuantity: 0
    });
    const updateCart = (newValue) => {
        setCart((prevCart) => ({...prevCart, showCart : newValue}))
    }
    if(cart.showCart || isLoginOn){
        document.querySelector('body')?.classList.add('hide-scroll')
    }
    else{
        document.querySelector('body')?.classList.remove('hide-scroll')
    }

    useEffect(() => {
        if( !props.isOnMobile){
            if(props.windowHeight < -40){
                document.querySelector('header')?.classList.remove('solid-header');
            }
            document.querySelector('.sub-nav')?.classList.add('display-none');
        }

    }, [props.isOnMobile, props.windowHeight])

    /* Direct configs */
    let navigate = useNavigate();
    const directTo = (id) => {
        navigate(`${id}`);
    }

    let lastHeight = useRef(0)
    const [positive, setPositive] = useState(false)

    useEffect(() => {
        const scrollHandle = () => {
            const dif = lastHeight.current - window.scrollY;
            if(dif < 0){
                lastHeight.current = window.scrollY;
                setPositive(false)
            }else if (dif > 0){
                lastHeight.current = window.scrollY;
                setPositive(true)
            }
        }
        console.log(positive)

        window.addEventListener('scroll', scrollHandle)
    })
    useEffect(() => {
        setPositive(true);
    }, [])

    return (
        <> {/* Principal Return */}
            { 
                <header className={`${!props.darkMode ? 'solid-header' : 'transparent-header'} ${positive ? null : ' hide-nav'}`}>
                    <nav>
                        <div className='main-nav'>
                            <figure>
                                <img style={props.darkMode ? {filter: "grayscale(100%)"} : null} 
                                    className={`logo-img`} 
                                    src={process.env.PUBLIC_URL + '/navigation-images/logo.png'} 
                                    alt='Site Logo' 
                                    onClick={() => directTo('/')}>

                                </img>
                            </figure>
                            <Menu screenPos={props.windowHeight} isOnMobile={props.isOnMobile}/>
                        </div>
                        <div className='sub-nav display-none'>
                            <div className='create-button'>
                                {
                                    props.button.map((element, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <button className={!props.darkMode ? 'black-letter' : 'white-letter'} onClick={() => {
                                                    setCart( (prevCart) => ({...prevCart, showCart : false}) );
                                                    
                                                    if(element.routeId === '/login')
                                                        setLogin(!isLoginOn);
                                                    
                                                    return element.redirect ? directTo(`${element.routeId}`) : null
                                                }}>
                                                    {element.name}
                                                </button>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                            { props.showCategories ?
                                <div className='cart-button'>
                                    <button onClick={() => {
                                        setCart( (prevCart) => ({...prevCart, showCart : !cart.showCart}) );
                                        setLogin(false);
                                    }}>
                                        <div className={`cart-quantity ${!props.darkMode ? '' : 'filter-grayscale'}`}>
                                            <p>{cart.cartQuantity}</p>
                                        </div>
                                        <p className={!props.darkMode ? 'black-letter' : 'white-letter'}>Cart</p>
                                    </button>
                                </div> 
                                : null
                            }
                        </div>
                    </nav>
                    {props.extraNav != null ? <>{props.extraNav}</> : null}
                    {!props.darkMode ? null : <hr id='navigation-hr'/>}
                </header>
             }
            
            {/* Blur the page when log in */}
            <BlurConfig loginState={isLoginOn}/>

            {/* Show login & cart configs */}
            {isLoginOn ? <LoginSection setLogin={(newValue) => {
                setLogin(newValue)
            }}/> : null}
            {cart.showCart ? <ShowCartList quant={cart.cartQuantity} 
            updateCart={updateCart} cartState={cart.showCart} /> : null}
        </>
    )
}

export default Navigation;