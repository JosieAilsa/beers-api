import "./Card.scss"


const Card = ({img,title,tagline,desc,abv,ph,year,foodArr}) => {

    const foodPairingJSX = foodArr.map((food,i)=> {
       return  <li className="card__food__item" id = {food + " " + i}>{food}</li>
    })

    return (
    <> 
    <div className="card">
        <img src={img} alt={title} className = "card__img"/>
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{desc}</p>
        <div className = "card__stats">
            <p className="card__desc">PH: {ph}</p>
            <p className="card__desc">First brewed: {year}</p>
            <p className="card__abv">Strength: {abv}%</p>
        </div>
        <ul className="card__food">Goes well with:
        {foodPairingJSX}
        </ul>
    </div>
    </>);
}
 
export default Card;