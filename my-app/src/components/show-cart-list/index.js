import './index.css'

function ShowCartList(props){
    let order = <button>Order</button>
    let noProduct = <button>See our products</button>

    return(
        <>
            <div className='cart-div'>
                <div className='close-menu'>
                    <img src={process.env.PUBLIC_URL + '/navigation-images/close-icon.png'} alt='close icon' onClick={() => {
                        props.updateCart(false)
                    }}></img>
                </div>
                <h1>Your cart</h1>
                <hr/>
                <div className='list-of-pizzas'>
                    {
                        props.quant > 0 ?
                         <p>{`You have ${props.quant} pizzas`}</p> :
                          <p>You dont have any item on your cart.</p>
                    }
                </div>
                {/* <img src={process.env.PUBLIC_URL + '/navigation-images/cheese-pizza-image.png'} alt='pizza'>
                </img> */}
                <div className='order-button'>
                    {props.quant > 0 ? order : noProduct}
                </div>
            </div>
        </>
    )
}

export default ShowCartList;