import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddProduct, RemoveProduct, ResetProducts } from '../../features/products-on-cart/productsCartSlice';
import { useEffect } from 'react';

function ShowCartList(props) {
    const dispatch = useDispatch();

    let order = <button>Order all</button>
    let noProduct = <button>See our products</button>
    
    const { productsOnCart } = useSelector(state => state.productsOnCart);

    useEffect(() => {
        dispatch(ResetProducts(JSON.parse(localStorage.getItem("myproducts"))))
    }, [dispatch])

    let productsTotal = {
        totalItens: 0,
        totalDolar: 0.00,
    }
    

    let listOfProducts = [];

    Object.values(JSON.parse(localStorage.getItem("myproducts"))).map(keyV => {
        let elementAlrExists = false;

        for (let index = 0; index < listOfProducts.length; index++) {
            if (listOfProducts[index].title.includes(keyV.title)) {
                listOfProducts[index] = { ...listOfProducts[index], quantity: listOfProducts[index].quantity + 1 }

                const dolarValue = productsTotal.totalDolar + parseFloat(keyV.price.replace('$', ''));
                productsTotal = { ...productsTotal, totalDolar: dolarValue}

                elementAlrExists = true;
            }
        }
        if(!elementAlrExists){
            listOfProducts.push({...keyV, quantity: 1})

            const dolarValue = productsTotal.totalDolar + parseFloat(keyV.price.replace('$', ''));
            productsTotal = { ...productsTotal, totalDolar: dolarValue}
        }
        productsTotal = { ...productsTotal, totalItens: productsTotal.totalItens + 1 }

        return null
    });

    return (
        <>
            <div className='cart-div'>
                <div className='close-menu'>
                    <img src={process.env.PUBLIC_URL + '/navigation-images/close-icon.png'} alt='close icon' onClick={() => {
                        props.updateCart(false)
                    }}></img>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 40px"
                }}>
                    <h1 style={{ lineHeight: '25px' }}>Your Cart</h1>
                    <h2 style={{ lineHeight: '25px' }}>Items: {productsTotal.totalItens}</h2>
                </div>
                <hr />
                <div className='list-of-pizzas'>
                    {
                        listOfProducts.length > 0 ?
                            <div>{listOfProducts.map(el => {
                                return (
                                    <div id='product-container' key={el.title}>
                                        <div id='image-title' style={{display: 'flex'}}>
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
                                        <div id='product-price'>
                                            <h4>{'$' + parseFloat(el.price.replace('$', '') * el.quantity).toFixed(2)}</h4>
                                        </div>
                                        <div id='button-add-remove'>
                                            <button onClick={ () => {
                                                    delete el.quantity
                                                    dispatch(AddProduct(el))
                                                }}>+</button>
                                            <p id='product-quantity'>{el.quantity}</p>
                                            <button onClick={() => {
                                                delete el.quantity;
                                                dispatch(RemoveProduct(el))
                                            }}>-</button>
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
                    {productsOnCart.length > 0 ? order : noProduct}
                </div>
            </div>
        </>
    )
}

export default ShowCartList;