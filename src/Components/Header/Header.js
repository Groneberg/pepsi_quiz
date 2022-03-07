import './Header.css'


import pepsicoLogoBunt from '../../img/pepsico-logo-bunt.png';


function Header() {
    return (
       <header>
           <img className="pepsico-logo-bunt" src={pepsicoLogoBunt} />
           <div className="x-SVG">
               <a href="/">
                   <svg className="linie_1" viewBox="0 0 15 15">
                       <path id="linie_1" d="M 0 0 L 15 15">
                       </path>
                   </svg>
                   <svg className="linie_2" viewBox="0 0 15 15">
                       <path id="linie_2" d="M 15 0 L 0 15">
                       </path>
                   </svg>
               </a>
           </div>
       </header>
    );
}

export default Header;

