import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Menuopen from "./components/menuopen"
import Menuclose from "./components/menuclose"
import Theme from "./components/turndark"
import Videoslider from "./components/videoslider"
import Cardslider from "./components/proizvodi-swiper"

function App() {
  return (

    <div className='layout'>
    <header>
            <div className="nav-1">
                <img src="img/logo.png" alt=""/>
                <ul>
                    <li><a href="#" id="srpski">Srpski</a></li>
                    <li><a href="#" id="engleski">English</a></li>
                    <li><a href="#" id="madjarski">Magyar</a></li>
                </ul>

                <Menuopen/>
                <Menuclose/>
                <Theme/>

            </div>
            <div className="nav-2">
                <ul>
                    <li><a href="#">O NAMA <br/> <span>vizija za uspeh</span></a></li>
                    <li><a href="#">DVG PROIZVODI <br/> <span>naši proizvodi</span></a></li>
                    <li><a href="#">BRENDOVI <br/> <span>koje zasupamo</span></a></li>
                    <li><a href="#">DISTRIBUCIJA <br/> <span>logistika i operativa</span></a></li>
                    <li><a href="#">SARADNJA <br/> <span>proširenje ponude</span></a></li>
                    <li><a href="#">NOVOSTI <br/> <span>aktuelnosti</span></a></li>
                    <li id="kontakt"><a href="#">KONTAKT <br/> <span>kontaktirajte nas</span></a></li>
                </ul>
            </div>
    </header>

    <Videoslider/>

    <section className="aboutsec">
        <div className="about-section">
                <div className="container">
                    <div className="left-about">
                        <img src="img/Rectangle 124.png" alt=""/>
                    </div>
                    <div className="right-about">
                        <h1>DVG Company</h1>
                        <h3>Veleprodaja i maloprodaja kozmetike i kućne hemije</h3>
                        <p>DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici.
                            Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije.
                            U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi 
                            distrubutivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora koji 
                            zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.</p>
                            <button>Saznajte više o nama</button>
                    </div>
                </div>
            </div>
    </section>



    <div className="distribucija-text">
        <h1>Pouzdana distribucija</h1>
    </div>
    
    <div className="information-section">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src="img/partner.png" alt=""/>
                    <h4>Postanite naš partner</h4>
                </div>
                <div className="col-md-4">
                    <img src="img/proizvodi.png" alt=""/>
                    <h4>naši proizvodi</h4>
                </div>
                <div className="col-md-4">
                    <img src="img/uvoz.png" alt=""/>
                    <h4>uvoz iz mađarske</h4>
                </div>
            </div>
        </div>
    </div>

    <div className="number-section">
        <h1 id="number-naslov">DVG Company</h1>
        <p id="number-pod">u brojkama</p>
        <div className="brojke">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h1>3000m2</h1>
                    <p>Magacinskog prostora</p>
                </div>
                <div className="col-md-3">
                    <h1>20</h1>
                    <p>Vozila</p>
                </div>
                <div className="col-md-3">
                    <h1>8</h1>
                    <p>Komercijalista</p>
                </div>
                <div className="col-md-3">
                    <h1>170</h1>
                    <p>Brendova</p>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div className="proizvodi-section">
        <div className="container">
            <h1>Naši proizvodi</h1>
            <p>Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna <br/>
                nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što su prepoznali i našI <br /> kupci.</p>
                
      <Cardslider/>

      <img src="img/nasiproizvodi.png" alt="" id="proizvodislika"/>
        </div>
    </div>

    <div className="brendovi-section">
        <div className="container">
            <h1>Istaknuti brendovi za koje radimo distribuciju</h1>
            <div className="brands">
                <div className="row">
                    <div className="col-md-2">
                        <img src="img/dove.png" alt=""/>
                        <p>Dove</p>
                    </div>
                    <div className="col-md-2">
                        <img src="img/nivea.png" alt=""/>
                        <p>Nivea</p>
                    </div>
                    <div className="col-md-2">
                        <img src="img/palmolive.png" alt=""/>
                        <p>Palmolive</p>
                    </div>
                    <div className="col-md-2">
                        <img src="img/vanish.png" alt=""/>
                        <p>Vanish</p>
                    </div>
                    <div className="col-md-2">
                        <img src="img/ajax.png" alt=""/>
                        <p>Ajax</p>
                    </div>
                    <div className="col-md-2">
                        <img src="img/cif.png" alt=""/>
                        <p>Cif</p>
                    </div>
                </div>
            </div>
            <button>Svi brendovi u našem portfoliju</button>
        </div>
    </div>
    
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="cmpny-logo">
                        <img src="img/dvglogotip.png" alt="" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cmpny-info">
                        <h1>D.V.G. Company</h1>
                        <p id="location">Čantavirski put bb <br/> 24000 Subotica, Srbija</p>
                        <p id="number"><a href="tel:+381 24 568 555">+381 24 568 555</a></p>
                        <p id="email"><a href="email:office@dvgcomapny.com">office@dvgcomapny.com</a></p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cmpny-options">
                        <ul>
                            <li><a href="#">O NAMA</a></li>
                            <li><a href="#">DVG PROIZVODI</a></li>
                            <li><a href="#">BRENDOVI</a></li>
                            <li><a href="#">DISTRIBUCIJA</a></li>
                            <li><a href="#">SARADNJA</a></li>
                            <li><a href="#">NOVOSTI</a></li>
                            <li><a href="#">KONTAKT</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cmpny-social">
                        <p>Pratite nas:</p>
                        <ul>
                            <li><a href="#"><img src="img/facebook.png" alt=""/></a></li>
                            <li><a href="#"><img src="img/twitter.png" alt=""/></a></li>
                            <li><a href="#"><img src="img/youtube.png" alt=""/></a></li>
                            <li><a href="#"><img src="img/messanger.png" alt=" "/></a></li>
                        </ul>
                    </div>
                </div>  
            </div>
        </div>
        <div className="copyright-footer">
            <a href="#" id="copyright">Copyright © 2021 DVG Company, Subotica d.o.o. Sva prava zadržana.</a>
            <a href="#" id="privatnost">Privatnost podatka</a>
            <a href="#" id="uslovi">Uslovi korišćenja</a>
            <a href="#" id="poweredby">Powered by: <span>StudioPresent</span></a>
        </div>

    </footer>

    <div className="overlay">
        <div className="scrollpopup">
            <h1>DVG Company</h1><br/>
            <h2>Iskoristite <span>50%</span> popusta <br /> na nove artikle !</h2>
            <br /> 
            <button>PORUCI</button>
            <i className="fa-solid fa-xmark" id="popupclose" onClick={()=>{
               let popup = document.querySelector('.overlay');
               popup.style.display='none';
               let body = document.querySelector("body");
               body.style.overflow='visible';
            }}></i>
        </div>
    </div>

</div>
  );
}

export default App;
