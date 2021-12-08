import FiltersItem from "../FiltersItem/FiltersItem";
const FilterList = ({handleFilter}) => {
    return ( 
        <>
        <form action="">
            <FiltersItem handeFilter ={handleFilter}/>
        </form>
        </>
     );
}
 
export default FilterList;