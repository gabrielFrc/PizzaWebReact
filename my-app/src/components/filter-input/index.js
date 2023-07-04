import { useEffect, useState } from 'react'
import './index.css'

const suggetions = ['Pizza', 'Drink']

const InputFieldComponent = () => {
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        document.getElementById('input-filter').addEventListener("focusout", (event) => {
            setTimeout(() => {
                setFocus(false);
            }, 100);
        });
    }, [])

    return (
        <>
            <div className='input-field'>
                <input id='input-filter' type='text' placeholder={'Filter'}
                    onChange={() => {
                        setFocus(true);
                    }} />
                <img src={process.env.PUBLIC_URL + '/main-images/lupa-icon.png'}
                    alt='lupa icon'></img>
                {focus ?
                    <div className='suggestion'>
                        {suggetions.filter(word => {
                            const inputValue = document.getElementById('input-filter').value.toLowerCase();
                            const wordValue = word.toLowerCase()

                            console.log(inputValue + wordValue)

                            return inputValue.includes(wordValue)
                        }).map((element) => {
                                return <button onClick={() => {
                                    document.getElementById('input-filter').value = element
                                }} key={element}>{element}</button>
                            })}
                    </div>
                : null}
            </div>
        </>
    )
}

export default InputFieldComponent;