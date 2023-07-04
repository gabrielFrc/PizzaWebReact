import './index.css';
import React from 'react';

class footerLinks{
    constructor(linkName, url, id){
        this.linkName = linkName;
        this.url = url;
        this.id = id;
    }
}

let footerLinksArray = [];
footerLinksArray.push(new footerLinks('Sobre a pizza', '#', footerLinksArray.length));
footerLinksArray.push(new footerLinks('Quem somos', '#', footerLinksArray.length));
footerLinksArray.push(new footerLinks('Termos', '#', footerLinksArray.length));
footerLinksArray.push(new footerLinks('API', '#', footerLinksArray.length))

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='another-links'>
                <ul>
                    {footerLinksArray.map((element, i) => {
                        return <React.Fragment key={i}>
                            <li>
                                <a href={element.url}>
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
                        <img src={process.env.PUBLIC_URL + '/footer-images/pepsi-logo.png'}
                            alt='pepsi logo'>
                        </img>
                    </div>
                </div>
                <p>Serviço disponível nas áreas de entrega ...´s Pizza, todos os dias, de acordo com o horário de funcionamento de cada loja. A/O ...´s Pizza se reserva no direito de alterar ou encerrar as ofertas sem aviso prévio. Todas as promoções expostas não são cumulativas entre si ou com outras promoções e descontos. Cobramos taxa de entrega. Todos os nossos produtos CONTÉM GLÚTEN. Alérgicos: todos os nossos produtos contém ou podem conter traços de Trigo, Ovos, Leite e Soja. As formas de pagamento variam de acordo com cada loja. Imagens meramente ilustrativas. Consulte se sua loja de preferência pratica a promoção escolhida</p>
                <p>*Preços "a partir de" podem sofrer pequenas variações de acordo com a região da loja. Confirme o preço no carrinho de compras antes de confirmar seu pedido.</p>
                <p>...´S PIZZA BRASIL, Av. x xx, xxx - Bloco x – xº andar – x, Rio de Janeiro/RJ - xxxxx-xxx</p>
            </div>
        </div>
    )
}

export default Footer;