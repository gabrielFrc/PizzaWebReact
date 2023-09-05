import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer';

import './cart-page.css'

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

            <main id='cart-page-main'>
                <section id='cart-page-background'>
                    <div id='products-table'>
                        <div id='table-header'>
                            <div id='table-header-infos'>
                                <h2>Produtos</h2>
                                <h4>Espero que esteja satisfeito!</h4>
                            </div>
                            <div id='buy-button'>
                                <button>Compre</button>
                            </div>
                        </div>

                        <hr></hr>
                        
                        <div id='table-categories'>
                            <p className='name-categorie'>Name</p>
                            <p>Id</p>
                            <p>Date</p>
                            <span></span>
                        </div>

                        <hr></hr>

                        <div id='table-itens'>
                            <ul>
                                <li>
                                    <p className='name-categorie'>Pizza braba</p>
                                    <p>blabla</p>
                                    <p>blabla</p>
                                    <span></span>
                                </li>
                                <hr></hr>
                                <li>
                                    <p className='name-categorie'>Bebida brabona</p>
                                    <p>blabla</p>
                                    <p>blabla</p>
                                    <span></span>
                                </li>
                                <hr></hr>
                                <li>
                                    <p className='name-categorie'>Pizza boladona</p>
                                    <p>blabla</p>
                                    <p>blabla</p>
                                    <span></span>
                                </li>
                                <hr></hr>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default CartPage;