import "./cards.css";
import arr from "../../js/main";

export function Cards() {
   return (
      <div className="main">
         <div className="main__container container">
            <ul className="main__list">
               {
                  arr.map(i => { 
                     return (
                        <li className="main__item">
                           <img width="220" src={i.src} alt="img" />
                           <div className="main__item-div">
                              <span className="main__item-title">{i.title}</span>
                              <span className="main__item-txt">Population: {i.population}</span>
                              <span className="main__item-txt">Region: {i.region}</span>
                              <span className="main__item-txt">Capital: {i.capital}</span>
                           </div>
                        </li>
                     );
                  })
               }
            </ul>
         </div>
      </div>
   );
}
