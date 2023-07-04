const BlurConfig = (props) => {
    if (props.loginState) {
        document.querySelector('header')?.classList.add('blur-all');
        document.querySelector('main')?.classList.add('blur-all');
        document.querySelector('footer')?.classList.add('blur-all');
    } else {
        document.querySelector('header')?.classList.remove('blur-all');
        document.querySelector('main')?.classList.remove('blur-all');
        document.querySelector('footer')?.classList.remove('blur-all');
    }

    return null;
}

export default BlurConfig;