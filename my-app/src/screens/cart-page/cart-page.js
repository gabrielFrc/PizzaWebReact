import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer';

import './cart-page.css'
import './cart-page-mobile.css'

import linkButton from '../../components/buttons-for-navigation/link-buttons';
import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';

let buttonList = [];
//process.env.PUBLIC_URL + '/navigation-images/user-profile-icon.png'
buttonList.push(new linkButton('/login', <p>Account</p>, null, false))
buttonList.push(new linkButton('/', <p>Stores</p>, null, false))
buttonList.push(new linkButton('/menu', <p>Menu</p>, null, true))

const CartPage = () => {
    const products = JSON.parse(localStorage.getItem("myproducts"));
    let atualTitle = '';

    const limitPerPage = 5;
    const pages = Math.ceil(products.length / limitPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [viewImage, setViewImage] = useState({
        element: null,
        image: '',
        show: false,
    });
    
    const myNewImage = <img 
            src={viewImage.image}
            alt='product'
            id='view-product'>
        </img>
    
    const verifyNextPage = (next) => {
        if(pages > 0){
            if(next && currentPage !== pages){
                setCurrentPage(currentPage + 1);
                setViewImage({...viewImage, show: false});
            }else if(!next && currentPage !== 1){
                setCurrentPage(currentPage - 1);
                setViewImage({...viewImage, show: false});
            }
        }
    }

    let slicing = products.slice((currentPage * limitPerPage)-limitPerPage, currentPage * limitPerPage)

    return(
        <>
            <Navigation button={buttonList} darkMode={true} />

            
            { (viewImage.element != null && viewImage.show) && createPortal(myNewImage, viewImage.element) }

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
                            <p className='name-categorie'>Name</p>
                            <p className='quantity-categorie-number quantity-categorie'></p>
                            <p className='date-categorie'>Date</p>
                        </div>

                        <hr></hr>

                        <div id='table-itens'>
                            <ul>
                                {
                                products != null && slicing.map((element, i) => {
                                    if(element.title !== atualTitle){
                                        atualTitle = element.title;
                                        return <Fragment key={i}>
                                            <li onClick={(e) => { 
                                                    const isEqual = (e.currentTarget === viewImage.element) && viewImage.show;

                                                    setViewImage({element: e.currentTarget, image: element.image_url, show: !isEqual}) 
                                                    } }>
                                                <p className='name-categorie product'>{element.title}</p>
                                                <p className='quantity-categorie product'>{element.quantity}</p>
                                                <p className='date-categorie product'>{element.date}</p>
                                            </li>
                                            <hr></hr>
                                        </Fragment>
                                    }
                                    return null
                                })}
                            </ul>
                        </div>
                        <div id='table-page'>
                            <button onClick={
                                () => {verifyNextPage(false)}
                            }>
                                {'<'}
                            </button>
                            <span>{currentPage}</span>
                            <button onClick={
                                () => {verifyNextPage(true)}
                            }>
                                {'>'}
                            </button>
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