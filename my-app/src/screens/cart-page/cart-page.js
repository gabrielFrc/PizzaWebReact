import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer';

import './cart-page.css'
import './cart-page-mobile.css'

import linkButton from '../../components/buttons-for-navigation/link-buttons';
import { Fragment } from 'react';

let buttonList = [];
//process.env.PUBLIC_URL + '/navigation-images/user-profile-icon.png'
buttonList.push(new linkButton('/login', <p>Account</p>, null, false))
buttonList.push(new linkButton('/', <p>Stores</p>, null, false))
buttonList.push(new linkButton('/menu', <p>Menu</p>, null, true))

const CartPage = () => {
    const products = JSON.parse(localStorage.getItem("myproducts"));
    let atualTitle = '';
    
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
                                <button>Logue para comprar</button>
                            </div>
                        </div>
                        <div id='tap-to-view'>
                                <span>
                                    <i>Tap to view</i>
                                </span>
                        </div>

                        <hr></hr>
                        
                        <div id='table-categories'>
                            <p className='name-categorie product'>Name</p>
                            <p className='quantity-categorie-number quantity-categorie product'></p>
                            <p className='date-categorie product'>Date</p>
                        </div>

                        <hr></hr>

                        <div id='table-itens'>
                            <ul>
                                {products != null && products.map((element, i) => {
                                    if(element.title !== atualTitle){
                                        atualTitle = element.title;
                                        return <Fragment key={i}>
                                            <li>
                                                <p className='name-categorie product'>{element.title}</p>
                                                <p className='quantity-categorie product'>{element.quantity}</p>
                                                <p className='date-categorie product'>{element.date}</p>
                                            </li>
                                            <hr></hr>
                                        </Fragment>
                                    }
                                    return null
                                })}
                                {/* <li>
                                    <p className='name-categorie product'>Pizza de calabresa</p>
                                    <p className='quantity-categorie product'>x3</p>
                                    <p className='product'>blabla</p>
                                    <span></span>
                                </li>
                                <hr></hr>
                                <li>
                                    <p className='name-categorie product'>Coca cola</p>
                                    <p className='quantity-categorie product'>x4</p>
                                    <p className='product'>blabla</p>
                                    <span></span>
                                </li>
                                <hr></hr>
                                <li>
                                    <p className='name-categorie product'>Pizza de pepperoni</p>
                                    <p className='quantity-categorie product'>x2</p>
                                    <p className='product'>blabla</p>
                                    <span></span>
                                </li>
                                <hr></hr> */}
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