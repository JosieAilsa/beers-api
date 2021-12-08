import Card from "../Card/Card";
import "./CardList.scss"
const CardList = ({beers}) => {
    const cardListJSX = beers.map(beerCard => {
       return (
        <>
        <Card title = {beerCard.name} img ={beerCard.image_url} desc = {beerCard.description} abv = {beerCard.abv} ph = {beerCard.ph} year = {beerCard.first_brewed}foodArr = {beerCard.food_pairing}/>
        </>)
    })
    return (<>
    <section className = "card-list">
    {cardListJSX}
    </section>
    </> );
}
 
export default CardList;