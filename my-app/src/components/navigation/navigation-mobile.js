import { useEffect, useState } from 'react';

const Menu = () =>{
    
    let [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        document.querySelector('.sub-nav').classList.add('display-none');
    }, [])

    let invertColor = {
        filter: 'invert(100%)'
    }

    return(
        <div className='menu'>
            <img style={showMenu ? null : invertColor} src={process.env.PUBLIC_URL + '/images/navigation-images/menu_icon.png'} alt='menu icon' onClick={() => {
                const element = document.querySelector('.sub-nav');
                const nav = document.getElementById('nav');
                
                if(!showMenu){
                    element.classList.remove('display-none');
                    document.querySelector('header').classList.add('solid-header');
                    nav.classList.add('align-baseline');
                    setShowMenu(true);
                }else if(showMenu){
                    element.classList.add('display-none');
                    document.querySelector('header').classList.remove('solid-header');
                    nav.classList.remove('align-baseline');
                    setShowMenu(false);
                }
            }}></img>
        </div>
    )
}

export default Menu;