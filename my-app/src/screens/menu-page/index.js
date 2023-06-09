import './index.css'
import Navigation from "../../components/navigation";
import Footer from '../../components/footer';
import MenuOptions from './menu-options';
import { useState } from 'react';

import FilterInput from '../../components/filter-input';

class linkButton {
    constructor(routeId, name, img, redirect) {
        this.routeId = routeId;
        this.name = name;
        this.img = img;
        this.redirect = redirect;
    }
}

let buttonList = [];
//process.env.PUBLIC_URL + '/navigation-images/user-profile-icon.png'
buttonList.push(new linkButton('/login', <p>Account</p>, null, false))
buttonList.push(new linkButton('/', <p>Stores</p>, null, false))
buttonList.push(new linkButton('/', <p>Promotions</p>, null, false))

const Menu = () => {
    const [ filter, setFilter ] = useState('')
    console.log('Updated MENU-PAGE filter to ' + filter)

    return (
        <>
            <Navigation button={buttonList} darkMode={true} windowHeight={-50} showCategories={true}/>
            <main id='menu-main'>
                <div className="upper-menu">
                    <h1 id='menu-title'>Menu</h1>
                    <FilterInput setFilter={setFilter}/>
                </div>
                <MenuOptions filter={filter}/>
            </main>
            <Footer />
        </>
    )
}

export default Menu;