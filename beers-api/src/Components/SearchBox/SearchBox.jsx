const SearchBox = ({handleSearch}) => {
    return (<>
    <input type="text" placeholder ="Search for a beer" onChange = {handleSearch}/>
    </>);
}
 
export default SearchBox;