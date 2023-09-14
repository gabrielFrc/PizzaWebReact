import './index.css'
import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer';
import MenuOptions from './menu-options';
import { useEffect, useRef, useState } from 'react';

import FilterInput from '../../components/filter-input';

import linkButton from '../../components/buttons-for-navigation/link-buttons';
import { useDispatch } from 'react-redux';
import { ResetProducts } from '../../features/products-on-cart/productsCartSlice';

let buttonList = [];
//process.env.PUBLIC_URL + '/navigation-images/user-profile-icon.png'
buttonList.push(new linkButton('/login', <p>Account</p>, null, false))
buttonList.push(new linkButton('/', <p>Stores</p>, null, false))
buttonList.push(new linkButton('/', <p>Promotions</p>, null, false))

const Menu = () => {
    const [ filter, setFilter ] = useState('')

    const dispatch = useDispatch()

    let onetime = useRef(true)

    useEffect(() => {
        if(onetime.current){
            onetime.current = false;
            if(localStorage.getItem("myproducts") != null)
                dispatch(ResetProducts(JSON.parse(localStorage.getItem("myproducts"))))
        }
    }, [dispatch])

    return (
        <>
            <Navigation button={buttonList} darkMode={true} windowHeight={-50} showCategories={true}/>
            <main id='menu-main'>
                <div className="upper-menu">
                    <h1 id='menu-title'>Our food</h1>
                    <FilterInput setFilter={setFilter}/>
                </div>
                <MenuOptions filter={filter}/>
            </main>
            <Footer />
        </>
    )
}

export default Menu;