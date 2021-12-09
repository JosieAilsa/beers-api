import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";
import "./Navbar.scss"

const Navbar = ({handleSearch, handleFilterFetch}) => {
    return (<>
    <div className = "nav"> 
    <FiltersList handleFilterFetch = {handleFilterFetch}/>
    <SearchBox handleSearch = {handleSearch}/>  
    </div> 
    </>);
}
 
export default Navbar;