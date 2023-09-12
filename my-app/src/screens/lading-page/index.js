import Nav from '../../../src/components/navigation/navigation'
import Footer from '../../components/footer';
import './index.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useDispatch, useSelector } from 'react-redux';
import { SetMobile } from '../../features/events-control/eventsControlSlice';

import linkButton from '../../components/buttons-for-navigation/link-buttons';

let buttonList = [];
//process.env.PUBLIC_URL + '/navigation-images/user-profile-icon.png'
buttonList.push(new linkButton('/login', <p>Account</p>, null, false))
buttonList.push(new linkButton('/menu', <p>Menu</p>, null, true))
buttonList.push(new linkButton('/', <p>Stores</p>, null, false))
buttonList.push(new linkButton('/cart', <p>Promotions</p>, null, true))

const LandingPage = () => {
    AOS.init();
    const dispatch = useDispatch();

    const { isOnMobile } = useSelector(state => state.controlEvents)

    useEffect(() => {
        const videoSetter = () => {
            if (window.innerWidth < 900 && !isOnMobile) {
                dispatch(SetMobile(true))
            }
            else if (window.innerWidth > 900 && isOnMobile) {
                dispatch(SetMobile(false))
            }
        }

        window.addEventListener("resize", videoSetter);

        return () => {
            window.removeEventListener("resize", videoSetter);
        }
    }, [dispatch, isOnMobile])
    return (
        <>
            <Nav button={buttonList} windowHeight={-50} darkMode={true} showCategories={false} />
            <main>
                <div className='banner-landing'
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/main-images/princ-bg.webp"})` }}>
                    <div className='inside-banner'>
                        <h1>Pizza Project</h1>
                        <img id='start-banner' src={process.env.PUBLIC_URL + "/images/main-images/pizza-banner.png"}
                            alt='pizza banner'>
                        </img>
                    </div>
                </div>
                <div id='content'>
                    <div className='number-info' data-aos="zoom-in">
                        <h2 id='n01'><span>01</span></h2>
                        <h4>Here at <span>Project Pizza</span>, we pride ourselves on our delicious pizza. Our pizza is made with the freshest ingredients and is cooked to perfection. We believe that our pizza is the best in town because of our commitment to quality and taste. Our pizza is made with love and care, and we believe that you will taste the difference. <br /><br />
                            We offer a wide variety of toppings to choose from, so you can customize your pizza to your liking. Whether you prefer classic toppings like pepperoni and mushrooms or something more unique like pineapple and jalapenos, we have something for everyone.When you order from us, you can be sure that you are getting the best pizza in town. We use only the freshest ingredients and our dough is made from scratch every day. We believe that our pizza is not just a meal, but an experience. So why not try it for yourself today?</h4>
                    </div>
                    <div className='number-info' data-aos="zoom-in">
                        <h2 id='n02'><span>02</span></h2>
                        <h4>Our pizza is made with the freshest ingredients. We use flour, yeast, salt, olive oil, meats, mushrooms, vegetables, cheese and more to create our delicious pizzas. We believe that the quality of our ingredients is what sets us apart from other pizza places. We use only the freshest ingredients and our dough is made from scratch every day.<br /><br />
                            When you order from us, you can be sure that you are getting the best pizza in town. Our commitment to quality and taste is what makes us stand out from the rest. So why not try it for yourself today?</h4>
                    </div>
                    <div className='number-info' data-aos="zoom-in">
                        <h2 id='n03'><span>03</span></h2>
                        <h4>We are located at <span>123 Main Street</span>, <span>456 Elm Street</span>, <span>789 Oak Street</span>. We hope to see you soon!. We have a variety of pizzas to choose from, including vegetarian and gluten-free options. Our menu also includes garlic bread, salads, and desserts. <br /><br />
                            We take pride in using only the freshest ingredients and making our dough from scratch every day. When you order from us, you can be sure that you are getting the best pizza in town. Our commitment to quality and taste is what makes us stand out from the rest.</h4>
                    </div>
                    <div className='number-info' data-aos="zoom-in">
                        <h2 id='n04'><span>04</span></h2>
                        <h4>Our recommendation when buying our pizza is to try our <span>signature pizza</span>. It’s made with our special blend of spices and is sure to satisfy your taste buds. We also recommend trying our garlic bread and dipping sauce. It’s the perfect complement to any pizza. <br /><br />
                            When you order from us, you can be sure that you are getting the best pizza in town. Our commitment to quality and taste is what makes us stand out from the rest. So why not try it for yourself today?</h4>
                    </div>
                    <h4 id='motivation' data-aos='fade-up'><i>
                        "Life is like a pizza. You can choose your toppings and make it your own. You can add some spice or keep it simple. But no matter how you slice it, it’s always delicious.<br/><br/>
                            So when life gets tough, remember that you have the power to create something amazing. Just like a pizza, you can take control and make it your own. And when you do, the results are always worth it.<br/><br/>
                            So go ahead and take a slice of life. You won’t regret it!"
                    </i></h4>
                </div>
                <div className='banner-landing'
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/main-images/princ-bg.webp"})` }}>
                    <div className='inside-banner'>
                        <img id='end-banner' src={process.env.PUBLIC_URL + "/images/main-images/pizza-banner-end.png"}
                            alt='pizza banner'>
                        </img>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default LandingPage;