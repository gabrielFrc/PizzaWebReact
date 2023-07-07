import './index.css'
import { useSelector } from 'react-redux'

function ShowCartList(props){
    let order = <button>Order all</button>
    let noProduct = <button>See our products</button>

    const {productsOnCart} = useSelector(state => state.productsOnCart);

    let productsTotal = {
        totalItens: 0,
        totalDolar: 0.00,
    }

    let listOfProducts = []; 
    
    Object.values(productsOnCart).map(keyV => {
        let elementAlrExists = false;

        for (let index = 0; index < listOfProducts.length; index++) {
            if(listOfProducts[index].product.includes(keyV.title)){
                listOfProducts[index] = {...listOfProducts[index], quantity: listOfProducts[index].quantity + 1}
                elementAlrExists = true;
            }
        }
        !elementAlrExists && listOfProducts.push({product: keyV.title, quantity: 1})
        productsTotal = {...productsTotal, totalItens: productsTotal.totalItens + 1}

        return null
    });

    return(
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
                    margin: "0 40px"}}>
                    <h1 style={{lineHeight: '25px'}}>Your Cart</h1>
                    <h2 style={{lineHeight: '25px'}}>Items: {productsTotal.totalItens}</h2>
                </div>
                <hr/>
                <div className='list-of-pizzas'>
                    {
                        productsOnCart.length > 0 ?
                         <div>{listOfProducts.map(el => {
                            return(
                                <p id='product' key={el.product}>
                                    { `${el.product}: `} <span id='product-quantity'>{el.quantity}</span>
                                </p>
                            )
                         })}</div> :
                          <p>You dont have any item on your cart.</p>
                    }
                </div>
                <div className='order-button'>
                    {productsOnCart.length > 0 ? order : noProduct}
                </div>
            </div>
        </>
    )
}

export default ShowCartList;