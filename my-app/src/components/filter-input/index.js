import { useEffect, useState } from 'react'
import './index.css'

const suggetions = ['Pizza', 'Drink']

const InputFieldComponent = ({setFilter}) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/api/products.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch((err) => { console.log(err) });
    }, [])
    
    useEffect(() => {
        if (data != null){
            Object.values(data).map(k => {
                return k.map(element => {
                    return element.tags.map(tag => {
                        if(!suggetions.includes(tag)){
                            suggetions.push(tag)
                        }
                        return tag
                    })
                    
                })
            })
        }
    }, [data])

    const [focus, setFocus] = useState(false);

    const [tag, setTag] = useState('');
    
    useEffect(() => {
        const localInputFilter = document.getElementById('input-filter');

        localInputFilter.addEventListener("focusout", (event) => {
            setTimeout(() => {
                setFocus(false);
            }, 150);
        });

        localInputFilter.addEventListener("keyup", (event) => {
            if(event.key === "Enter"){
                setFilter(localInputFilter.value)
            }
        })
    }, [setFilter])

    const [elementC, setElementC] = useState(null);

    useEffect(() => {
        const inputValue = tag.toLowerCase();
        let filterResult = 0;

        setElementC(suggetions.filter(word => {
            const wordValue = word.toLowerCase()
            
            if(wordValue.includes(inputValue) && filterResult < 5){
                filterResult ++;
                return true
            }
            else{
                return false
            }
        }).map((element) => {
            const button = <button onClick={() => {
                document.getElementById('input-filter').value = element;
                setFilter(element)

            }} key={element}>{element}</button>

            return button;
        })
        )
    }, [tag, setFilter])

    return (
        <>
            <div className='input-field'>
                <input id='input-filter' type='text' placeholder={'Filter'} autoComplete='off'
                    onChange={(e) => {
                        setTag(e.currentTarget.value)
                        setFocus(true);
                    }} />
                <img src={process.env.PUBLIC_URL + '/images/main-images/lupa-icon.png'}
                    alt='lupa icon'
                    onClick={() => {
                        setFilter(tag);
                    }}></img>
                {focus ?
                    <div className='suggestion'>
                        {elementC}
                    </div>
                    : null}
            </div>
        </>
    )
}

export default InputFieldComponent;