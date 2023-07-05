import { useEffect, useState } from 'react'
import './index.css'

const suggetions = ['Pizza', 'Drink']

const InputFieldComponent = ({setFilter}) => {
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        const localInputFilter = document.getElementById('input-filter');

        localInputFilter.addEventListener("focusout", (event) => {
            setTimeout(() => {
                setFocus(false);
            }, 100);
        });

        localInputFilter.addEventListener("keyup", (event) => {
            if(event.key === "Enter"){
                console.log('Search ' + localInputFilter.value + ' Entered')
            }
        })
    }, [])

    const [tag, setTag] = useState('');
    const [elementC, setElementC] = useState(null);

    useEffect(() => {
        const inputValue = tag.toLowerCase();

        setElementC(suggetions.filter(word => {
            const wordValue = word.toLowerCase()

            return wordValue.includes(inputValue)
        }).map((element) => {
            const button = <button onClick={() => {
                document.getElementById('input-filter').value = element;

                console.log('Search ' + element);
            }} key={element}>{element}</button>

            return button;
        })
        )
    }, [tag])

    return (
        <>
            <div className='input-field'>
                <input id='input-filter' type='text' placeholder={'Filter'} autoComplete='off'
                    onChange={() => {
                        setTag(document.getElementById('input-filter').value)
                        setFocus(true);
                    }} />
                <img src={process.env.PUBLIC_URL + '/main-images/lupa-icon.png'}
                    alt='lupa icon'
                    onClick={() => {
                        console.log('Search ' + tag);
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