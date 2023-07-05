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

    const compare = (filter, tags) => {
        if(filter.length >= 0 && tags.length > 0){
            let result = false;
            tags.map(element => {
                console.log('tag ' + element)
                if(element.toLowerCase().includes(filter.toLowerCase())){
                    result = true;
                }
                return true;
            })
            return result;
        }
        else{
            return false;
        }
    }

    let elementProducts;
    if (products != null){
        elementProducts = Object.values(products).map(k => {
            return k.map(element => {
                if(compare(props.filter, element.tags)){

                    return (
                        <Fragment key={element.id}>
                            <div className='option'>
                                <img src={element.image_url} alt='product'></img>
                                <div className='option-info'>
                                    <h3>{element.title}</h3>
                                    <p>{element.description}</p>
                                    <h4>{element.price}</h4>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        </Fragment>
                    )
                }else{
                    return null
                }
            })
        })
    }

    return (
        <>
            <div className='option-container'>
                <div className='abs-button'>
                    <button onClick={() => {
                        props.setCategory('null')
                    }}>Categories</button>
                </div>
                {elementProducts}
            </div>
        </>
    )
}

export default MenuOptions;