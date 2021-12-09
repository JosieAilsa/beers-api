const FiltersItem = ({handleFilterFetch}) => {

    return (<> 
    <label htmlFor="highABV">High ABV</label>
    <input type="checkbox" name="filterItem" value = "abv" id="highABV" onInput = {handleFilterFetch} />
    <label htmlFor="acid">Acidic</label>
    <input type="checkbox" name="filterItem" value = "acid" id="acid" onInput= {handleFilterFetch}  />
    <label htmlFor="classic">Classic</label>
    <input type="checkbox" name="filterItem" value = "classic" id="classic" onInput= {handleFilterFetch} />
    </>);
}
 
export default FiltersItem;