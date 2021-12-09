const FiltersItem = ({handleFilterFetch}) => {

    return (<> 
    <input type="checkbox" name="filterItem" value = "> 6.0%" id="highABV" onInput = {handleFilterFetch} />
    <label htmlFor="highABV">High ABV</label>
    <input type="checkbox" name="filterItem" value = "< 4.0%" id="acidic" onInput= {handleFilterFetch}  />
    <label htmlFor="classic">Acidic</label>
    <input type="checkbox" name="filterItem" value = "Classic range" id="classic range" onInput= {handleFilterFetch} />
    <label htmlFor="acidic">Classic</label>
    </>);
}
 
export default FiltersItem;