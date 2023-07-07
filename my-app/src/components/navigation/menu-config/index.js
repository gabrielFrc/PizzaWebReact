import { useEffect, useState } from 'react';

const Menu = (props) =>{
    let [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setShowMenu(false)
    }, [props.isOnMobile])

    let invertColor = {
        filter: 'invert(100%)'
    }

    return(
        <div className='menu'>
            <img style={props.screenPos > -40 || showMenu ? null : invertColor} src={process.env.PUBLIC_URL + '/navigation-images/menu_icon.png'} alt='menu icon' onClick={() => {
                const element = document.querySelector('.sub-nav');
                if(!showMenu){
                    element.classList.remove('display-none');
                    document.querySelector('header').classList.add('solid-header')
                    document.querySelector('body').classList.add('hide-scroll')
                    setShowMenu(true);
                }else if(showMenu){
                    element.classList.add('display-none');
                    setShowMenu(false);
                    document.querySelector('header').classList.remove('solid-header')
                    document.querySelector('body').classList.remove('hide-scroll')
                }
            }}></img>
        </div>
    )
}

export default Menu;