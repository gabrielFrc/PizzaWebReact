import { Fragment, useEffect, useState } from 'react';
import './index.css'

const MenuOptions = (props) => {
    let [products, setProducts] = useState();
    
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/api/products.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch((err) => { console.log(err) });
    }, [])

    let pizzaElement =
        products?.pizza.map((p) => {
            return (
                <Fragment key={p.id}>
                    <div className='option'>
                        <img src={p.image_url} alt='pizza'></img>
                        <div className='option-info'>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <h4>{p.price}</h4>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </Fragment>
            )
        })


    let drinkElement =
        products?.drink.map((p) => {
            return (
                <Fragment key={p.id}>
                    <div className='option'>
                        <img src={p.image_url} alt='pizza'></img>
                        <div className='option-info'>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <h4>{p.price}</h4>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </Fragment>
            )
        })


    return (
        <>
            <div className='option-container'>
                <div className='abs-button'>
                    <button onClick={() => {
                        props.setCategory('null')
                    }}>Categories</button>
                </div>
                {/* {props.categorySelected === 'pizza' ? pizzaElement : null}
                {props.categorySelected === 'drink' ? drinkElement : null} */}
                {pizzaElement}
                {drinkElement}
            </div>
        </>
    )
}

export default MenuOptions;