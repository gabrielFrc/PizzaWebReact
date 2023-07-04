import './index.css'
import Navigation from "../../components/navigation";
import Footer from '../../components/footer';
import MenuOptions from './menu-options';
import { useState } from 'react';

import FilterInput from '../../components/filter-input';

const Menu = () => {
    class linkButton {
        constructor(routeId, name, img, redirect) {
            this.routeId = routeId;
            this.name = name;
            this.img = img;
            this.redirect = redirect;
        }
    }

    let [categorySelected, setCategory] = useState('null');


    let buttonList = [];
    //process.env.PUBLIC_URL + '/navigation-images/user-profile-icon.png'
    buttonList.push(new linkButton('/login', <p>Account</p>, null, false))
    buttonList.push(new linkButton('/', <p>Stores</p>, null, false))
    buttonList.push(new linkButton('/', <p>Promotions</p>, null, false))

    // let categorySelectElement = <div className='food-category'>
    //     <div className='food-container' onClick={() => {
    //         setCategory('pizza');
    //     }}>
    //         <img src='https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pizza-png5.png?resize=696%2C395&ssl=1' alt='category'></img>
    //         <h2>Pizza</h2>
    //     </div>
    //     <div className='food-container' onClick={() => {
    //         setCategory('drink');
    //     }}>
    //         <img src='https://freepngimg.com/thumb/drinks/6-2-drink-png-9-thumb.png' alt='category'></img>
    //         <h2>Drink</h2>
    //     </div>
    // </div>

    let menuTitle = ""
    switch (categorySelected) {
        case "pizza":
            menuTitle = "Pizzas"
            break;
        case "drink":
            menuTitle = "Drinks"
            break;
        default:
            menuTitle = "Menu"
            break;
    }

    return (
        <>
            <Navigation button={buttonList} darkMode={true} windowHeight={-50} showCategories={true}/>
            <main id='menu-main'>
                <div className="upper-menu">
                    <h1 id='menu-title'>{menuTitle}</h1>
                    <FilterInput/>
                </div>
                {/* {categorySelected === 'null' ? <>{categorySelectElement}</> : null} */}
                <MenuOptions categorySelected={categorySelected} setCategory={setCategory}/>
            </main>
            <Footer />
        </>
    )
}

export default Menu;