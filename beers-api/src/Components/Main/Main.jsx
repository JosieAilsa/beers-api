import CardList from "../CardList/CardList";
import "./Main.scss";

const Main = ({beers}) => {
    return (<>
    <main className = "main">
    <CardList beers = {beers}/>
    </main>
    </> );
}
 
export default Main;