import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";
import "./Navbar.scss"

const Navbar = ({handleSearch, handleFilter}) => {
    return (<>
    <div className = "nav"> 
    <FiltersList handleFilter = {handleFilter}/>
    <SearchBox handleSearch = {handleSearch}/>  
    </div> 
    </>);
}
 
export default Navbar;