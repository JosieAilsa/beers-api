import FiltersItem from "../FiltersItem/FiltersItem";
const FilterList = ({handleFilterFetch}) => {
    return ( 
        <>
        <form action="">
            <FiltersItem handleFilterFetch ={handleFilterFetch} />
        </form>
        </>
     );
}
 
export default FilterList;