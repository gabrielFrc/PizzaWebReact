import Nav from '../../../src/components/navigation'
import Footer from '../../components/footer';
import './index.css'

class linkButton{
    constructor(routeId, name, img, redirect){
        this.routeId = routeId;
        this.name = name;
        this.img = img;
        this.redirect = redirect;
    }
}

let buttonList = [];
buttonList.push(new linkButton('/login', 'Login', '/navigation-images/user-profile-icon.png', false))
buttonList.push(new linkButton('/menu', 'Menu', null, true))


const LandingPage = () => {
    return(
        <>
            <Nav button={buttonList}/>
            <main>
                <div>
                    <h1>Deliver | Go to place</h1>
                </div>
                <div className='images-container'>
                    <img src='https://cache.dominos.com/wam/prod/market/BR/_pt/images/promo/b2c7ee9f-cdee-425d-a36a-23d69acc26e9.png' alt=' '></img>
                    <aside className='aside-image-container'>
                        <img src='https://cache.dominos.com/wam/prod/market/BR/_pt/images/promo/bc20e5f5-35f6-4470-9660-cad68c93d2cc.png' alt=' '></img>
                        <img src='https://cache.dominos.com/wam/prod/market/BR/_pt/images/promo/0b3866a0-cf73-4960-9688-6c753bcead10.png' alt=' '></img>
                    </aside>
                    <img src='https://cache.dominos.com/wam/prod/market/BR/_pt/images/promo/c10755b7-268f-46b0-94f0-dbff645e66e7.png' alt=' '></img>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default LandingPage;