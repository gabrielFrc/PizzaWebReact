import './index.css';

class footerLinks{
    constructor(linkName, url, id){
        this.linkName = linkName;
        this.url = url;
        this.id = id;
    }
}

let footerLinksArray = [];
footerLinksArray.push(new footerLinks('Google', 'https://google.com', footerLinksArray.length));
footerLinksArray.push(new footerLinks('Google', 'https://google.com', footerLinksArray.length));
footerLinksArray.push(new footerLinks('Google', 'https://google.com', footerLinksArray.length));
footerLinksArray.push(new footerLinks('Instagram', 'https://instagram.com', footerLinksArray.length))

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='another-links'>
                <ul>
                    {footerLinksArray.map((element, i) => {
                        if(i < footerLinksArray.length-1){
                            return <>
                                <li key={element.id}><a href={element.url} target='_blank' rel="noreferrer">{element.linkName}</a></li>
                                |
                            </>
                        }
                        else
                            return <li key={element.id}><a href={element.url}>{element.linkName}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer;