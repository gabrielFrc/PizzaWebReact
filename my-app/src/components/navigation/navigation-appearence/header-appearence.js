const Appearence = ({ head, darkMode, isOnMobile, positive }) => {
    if(darkMode){
        head?.classList.add('transparent-header');
    }
    if(!positive){
        head?.classList.add('hide-nav');
    }
    else{
        head?.classList.remove('hide-nav');
    }
}

export default Appearence;