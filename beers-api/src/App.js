import './App.scss';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import beersData from './data/beers';
import { useEffect, useState } from 'react';
import Main from './Components/Main/Main';



function App() {
const [beers, setBeersData] = useState([]);

// const [fetchParam, setFetchParam] = useState("")


const handleSearch = (e) => {
  const searchTerm = e.target.value;
  console.log(searchTerm) 
  const filteredData = beers.filter(beer => beer.name.includes(searchTerm))
  console.log(filteredData)
  setBeersData(filteredData)
}

const handleFilter = (e) => {
  console.log("has run!")
  const checkType = e.target.value; 
  if (checkType === "abv") {
    const filteredData = beers.filter(beer => beer.abv > 6)
    return setBeersData(filteredData)
  } else if (checkType === "acid"){
    const filteredData = beers.filter(beer => beer.ph < 4)
    return setBeersData(filteredData)
  } else if (checkType === "classic") {
    const filteredData = beers.filter(beer => beer.first_brewed.substring(3) < 2010)
    console.log(filteredData)
    return setBeersData(filteredData)
    } else {
      return setBeersData(beers)
    }
}


// const handleFilterFetch = (e) => {
//   // const checkIfFirstValue = (param) => {
//   //   if (param === "") {
//   //     let newFetchParam = fetchParam
//   //     return newFetchParam = "?"
//   //   } else {
//   //     let newFetchParam = fetchParam
//   //     return newFetchParam += "&"
//   //   }
//   // }
//   const toPrefix = (fetchParam === "")? "?" : "&"
//   const checkType = e.target.value;
//   if (checkType === "abv") { 
//     let newFetchParam = fetchParam
//   newFetchParam += (toPrefix + "abv_gt=6")
//     setFetchParam(newFetchParam)
//   } else if (checkType === "acid"){
//   let newFetchParam = fetchParam
//   newFetchParam += (toPrefix + "ph_lt=4")
//    setFetchParam(newFetchParam)
//   } else if (checkType === "classic") {
//    let newFetchParam = fetchParam
//   newFetchParam += (toPrefix + "brewed_after=12-2010")
//    setFetchParam(newFetchParam)
//   }
// }

    useEffect(() => {
    //Use string interpolation to add a varaible to the endpoint request
    const URL = `https://api.punkapi.com/v2/beers`
    fetch(URL) 
    .then(res => res.json())
    .then(data => {
        setBeersData(data)
          })
      .catch(console.log("There has been an error"))
    },[])


  return (
    <>
    <body className = "body">
    {<Navbar beers = {beers} handleSearch= {handleSearch} handleFilterFetch = {handleFilter}/>}
    {<Main beers = {beers}/>}
    {console.log(beers)}
    </body>
    </>
  );
}

export default App;
