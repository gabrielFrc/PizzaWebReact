import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Menu = (props) =>{
    const { isOnMobile } = useSelector(state => state.controlEvents)
    
    let [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        document.querySelector('.sub-nav').classList.add('display-none');
        document.querySelector('header').classList.remove('solid-header')
    }, [isOnMobile])

    let invertColor = {
        filter: 'invert(100%)'
    }

    return(
        <div className='menu'>
            <img style={props.screenPos > -40 || showMenu ? null : invertColor} src={process.env.PUBLIC_URL + '/navigation-images/menu_icon.png'} alt='menu icon' onClick={() => {
                const element = document.querySelector('.sub-nav');
                if(!showMenu){
                    element.classList.remove('display-none');
                    document.querySelector('header').classList.add('solid-header');
                    setShowMenu(true);
                }else if(showMenu){
                    element.classList.add('display-none');
                    document.querySelector('header').classList.remove('solid-header');
                    setShowMenu(false);
                }
            }}></img>
        </div>
    )
}

export default Menu;