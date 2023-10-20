import './index.css';
import React from 'react';

class footerLinks{
    constructor(linkName, url, id, newWindow){
        this.linkName = linkName;
        this.url = url;
        this.id = id;
        this.newWindow = newWindow;
    }
}

let footerLinksArray = [];
footerLinksArray.push(new footerLinks('About Pizza', '#', footerLinksArray.length, false));
footerLinksArray.push(new footerLinks('Who We Are', '#', footerLinksArray.length, false));
footerLinksArray.push(new footerLinks('Terms', '#', footerLinksArray.length, false));
footerLinksArray.push(new footerLinks('API', '#', footerLinksArray.length, false));
footerLinksArray.push(new footerLinks('Icons8', 'https://icons8.com', footerLinksArray.length, true));


const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='another-links'>
                <ul>
                    {footerLinksArray.map((element, i) => {
                        return <React.Fragment key={i}>
                            <li>
                                <a href={element.url}
                                    target='_blank'
                                    rel='noreferrer'>
                                    {element.linkName}
                                </a>
                            </li>
                        </React.Fragment>
                    })}
                </ul>
            </div>
            <div>
                <div className='social-partner'>
                    <div className='social-icons'>
                        <a href="https://github.com/gabrielFrc" rel='noreferrer' target='_blank'>
                            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github icon'>
                            </img>
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-f-82328b214/" target='_blank' rel='noreferrer'>
                            <img src='https://ytpr.co.ke/wp-content/uploads/2020/06/linkedin-icon-png-transparent-background-8.png' alt='linkedin icon'>
                            </img>
                        </a>
                    </div>
                    <div className='partner-logo'>
                        <img src={process.env.PUBLIC_URL + '/images/footer-images/pepsi-logo.png'}
                            alt='pepsi logo'>
                        </img>
                    </div>
                </div>
                <p>Service available in delivery areas... Pizza, every day, according to each store's operating hours. ...'s Pizza reserves the right to change or end the offers without prior notice. All promotions displayed are not cumulative with each other or with other promotions and discounts. We charge a delivery fee. All our products CONTAIN GLUTEN. Allergenic: all our products contain or may contain traces of Wheat, Eggs, Milk, and Soy. Payment methods vary according to each store. Images are for illustration purposes only. Check if your preferred store offers the chosen promotion.</p>
                <p>*Prices 'from' may vary slightly depending on the store's region. Confirm the price in the shopping cart before confirming your order.</p>
                <p>...'S PIZZA BRAZIL, Av. x xx, xxx - Block x - xth floor - x, Rio de Janeiro/RJ - xxxxx-xxx</p>
            </div>
        </div>
    )
}

export default Footer;