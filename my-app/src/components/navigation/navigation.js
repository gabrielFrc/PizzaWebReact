// NODE MODULES
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './index.css';
import './mobile.css';
import { useNavigate } from 'react-router-dom';

// MY COMPONENTS
import LoginSection from '../login-section';
import ShowCartList from '../show-cart-list';
import BlurConfig from './blur-config';
import Menu from './navigation-mobile';

// REDUX 
import { useSelector, useDispatch } from 'react-redux';
import { SetMobile } from '../../features/events-control/eventsControlSlice';

const Navigation = (props) => {
    /* Login configs */
    let [isLoginOn, setLogin] = useState(false);

    /* Cart configs */
    let [cart, setCart] = useState({
        showCart: false,
        cartQuantity: 0
    });

    const { productsOnCart } = useSelector(state => state.productsOnCart)

    useEffect(() => {
        if(localStorage.getItem("myproducts") != null)
            setCart((prevCart) => ({ ...prevCart, cartQuantity : JSON.parse(localStorage.getItem("myproducts")).length }))
    }, [productsOnCart])

    const updateCart = (newValue) => {
        setCart((prevCart) => ({...prevCart, showCart : newValue}))
    }

    const { isOnMobile } = useSelector(state => state.controlEvents)
    const [mobile, setMobile] = useState();
    useEffect(() => {
        setMobile(isOnMobile);
    }, [isOnMobile])
    
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            if (window.innerWidth < 800) {
                dispatch(SetMobile(true))
            }
            else if (window.innerWidth > 800) {
                dispatch(SetMobile(false))
            }
        })
        if (window.innerWidth < 800) {
            dispatch(SetMobile(true))
        }
        else if (window.innerWidth > 800) {
            dispatch(SetMobile(false))
        }
    }, [dispatch])

        if(cart.showCart || isLoginOn){
            document.querySelector('body')?.classList.add('hide-scroll')
        }
        else{
            document.querySelector('body')?.classList.remove('hide-scroll')
        }

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

        window.addEventListener('scroll', scrollHandle)
    }, [])
    useEffect(() => {
        setPositive(true);
    }, [])

    const head = useRef();
    useEffect(() => {
        if(!positive)
            head.current.classList.add('nav-bar-disappear')
        else{
            head.current.classList.remove('nav-bar-disappear')
        }
    }, [positive])

    return (
        <>
            { 
                <header ref={head}>
                    <nav id='nav'>
                        <div className='main-nav'>
                            <figure className='figure-logo'>
                                <img style={props.darkMode ? {filter: "grayscale(100%)"} : null} 
                                    className={`logo-img`} 
                                    src={process.env.PUBLIC_URL + '/navigation-images/logo.png'} 
                                    alt='Site Logo' 
                                    onClick={() => directTo('/')}>

                                </img>
                            </figure>
                            { /* This below might not have an utility0.*/ }
                        </div>
                        <div className='sub-nav display-none'>
                            <div className='create-button'>
                                {
                                    props.button.map((element, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <button onClick={() => {
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
                        { mobile && <Menu />}
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
            {cart.showCart ? <ShowCartList
            updateCart={updateCart} /> : null}
        </>
    )
}

export default Navigation;