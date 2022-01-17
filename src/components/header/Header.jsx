import "./header.css";

function Header() {
   return (
      <div className="header">
         <div className="header__container container">
            <div className="header__inner">
               <span className="header__txt">Where in the world?</span>
               <span className="header__dark">Dark mode</span>
            </div>
         </div>
      </div>
   );
}

export default Header;