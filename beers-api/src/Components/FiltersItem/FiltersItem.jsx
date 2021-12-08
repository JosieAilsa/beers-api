const FiltersItem = ({handeFilter}) => {

    return (<> 
    <input type="checkbox" name="filterItem" value = "> 6.0%" id="highABV" onChange = {handeFilter} />
    <label htmlFor="highABV">High ABV</label>
    <input type="checkbox" name="filterItem" value = "< 4.0%" id="acidic" onChange = {handeFilter}  />
    <label htmlFor="classic">Acidic</label>
    <input type="checkbox" name="filterItem" value = "Classic range" id="classic range" onChange = {handeFilter} />
    <label htmlFor="acidic">Classic</label>
    </>);
}
 
export default FiltersItem;