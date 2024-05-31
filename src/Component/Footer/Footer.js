import 'bootstrap/dist/css/bootstrap.css'       

import './footer.css'
// import logo from '../Navbar/logo.png'
// import facebook from './facebook.svg'
// import instagram from './instagram.svg'
// import twitter from './twitter.svg'
// import applestore from './applestore.png'
import playstore from './image.png'


export function Footer() {
    return (
        <>
        
            <div className="fut">
                <div class="futter">
                {/* <img className="icon" src={logo} />  */}

                    <div>
                        <ul className="ul">
                            <h5>About </h5>
                            <li>Our Heritage</li>
                            <li>Coffeehouse</li>
                            <li>Our Company</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="ul">             
                            <h5>Responsibility</h5>
                            <li>Diversity</li>
                            <li>Comunity</li>
                            <li>Ethical Sourcing</li>
                            <li>Environmental</li>
                            <li>Stewardship</li>
                            <li>Learn More</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="ul">
                            <h5>Quick Links</h5>
                            <li>Privacy Policy</li>
                            <li>FAQs</li>
                            <li>Terms and Conditions</li>
                            <li>Starbucks India Mobile</li>
                            <li>App Terms of Use</li>
                            <li>Customer Service</li>
                            <li>Starbucks Rewards Day</li>
                            <li>offer</li>
                            <li>Delivery</li>
                            <li>Season's Gifting</li>
                            <li>Offer for Beverage</li>
                            <li>subscription at. </li>
                            <li>Starbuks.</li>
                            <li>Beverage Subscription</li>
                        </ul>
                    </div>

                    
                    <img src='' />

                    <div >
                        <center>
                            <h3>Social media</h3>
                            <a> <img className="icon" src='' /></a>
                            <a> <img className="icon" src='' /></a>
                            <a> <img className="icon" src='' /></a>
                        </center>

                    </div>
                    <div  className='appdiv'>
                       
                            <a> <img className="iconapp" src='' /></a>
                            <a> <img className="iconapp" src={playstore} /></a>
                      

                    </div>
                </div>

            </div>

        </>
    );
}