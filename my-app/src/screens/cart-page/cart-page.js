import Navigation from '../../components/navigation/navigation';

import linkButton from '../../components/buttons-for-navigation/link-buttons';

let buttonList = [];
//process.env.PUBLIC_URL + '/navigation-images/user-profile-icon.png'
buttonList.push(new linkButton('/login', <p>Account</p>, null, false))
buttonList.push(new linkButton('/', <p>Stores</p>, null, false))
buttonList.push(new linkButton('/menu', <p>Menu</p>, null, true))

const CartPage = () => {
    return(
        <>
            <Navigation button={buttonList} darkMode={true} />
        </>
    );
}

export default CartPage;