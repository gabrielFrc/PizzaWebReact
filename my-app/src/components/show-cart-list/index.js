import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddProduct, RemoveProduct } from '../../features/products-on-cart/productsCartSlice';

import { useNavigate } from 'react-router-dom';

import SetLocalStorageProducts from '../../screens/menu-page/menu-options/localStorage-products';

function ShowCartList(props) {
    const dispatch = useDispatch();

    let nav = useNavigate();
    const RedirectTo = (id) => {
        nav(`/${id}`);
    }

    let order = <button onClick={
        () => RedirectTo('cart')
    }>Order all</button>

    let noProduct = <button onClick={
        () => {
            props.updateCart(false);
        }
    }>See our products</button>

    const { productsOnCart } = useSelector(state => state.productsOnCart);

    let productsTotal = {
        totalItens: 0,
        totalDolar: 0.00,
    }
    

    if(localStorage.getItem("myproducts") != null)
        productsOnCart.forEach(element => {
            productsTotal.totalItens += element.quantity;
            productsTotal.totalDolar += element.quantity * parseFloat(element.price.replace('$', ''));
        });

    return (
        <>
            <div className='cart-div'>
                <div className='close-menu'>
                    <img src={process.env.PUBLIC_URL + '/navigation-images/close-icon.png'} alt='close icon' onClick={() => {
                        props.updateCart(false)
                    }}></img>
                </div>
                <div id='cart-header'>
                    <h1 style={{ lineHeight: '25px' }}>Your Cart</h1>
                    <h2 style={{ lineHeight: '25px' }}>Items: {productsTotal.totalItens}</h2>
                </div>
                <hr />
                <div className='list-of-pizzas'>
                    {
                        productsOnCart.length > 0 ?
                            <div>{productsOnCart.map(el => {
                                return (
                                    <div id='product-container' key={el.title}>
                                        <div id='image-title'>
                                            <img src={el.image_url}
                                                alt='product'
                                                width={100}
                                                height={100}>
                                            </img>
                                            <h3 id='product'>
                                                {`${el.title} `}
                                                {/* <p>{el.description}</p> */}
                                            </h3>
                                        </div>
                                        <div id='button-price'>
                                            <div id='product-price'>
                                                <h4>{'$' + parseFloat(el.price.replace('$', '') * el.quantity).toFixed(2)}</h4>
                                            </div>
                                            <div id='button-add-remove'>
                                                <button onClick={ () => {
                                                        dispatch(AddProduct(el))
                                                        SetLocalStorageProducts()
                                                    }}>+</button>
                                                <p id='product-quantity'>{el.quantity}</p>
                                                <button onClick={() => {
                                                    dispatch(RemoveProduct(el))
                                                    SetLocalStorageProducts()
                                                }}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}</div> :
                            <p>You dont have any item on your cart.</p>
                    }
                    <div id='total-value'>
                        <h3>{`Value total: ${'$' + productsTotal.totalDolar.toFixed(2)}`}</h3>
                    </div>
                </div>
                <div className='order-button'>
                    { localStorage.getItem("myproducts") != null && JSON.parse(localStorage.getItem("myproducts")).length > 0 ? order : noProduct}
                </div>
            </div>
        </>
    )
}

export default ShowCartList;