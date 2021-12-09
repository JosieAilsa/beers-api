import './App.scss';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import beersData from './data/beers';
import { useEffect, useState } from 'react';
import Main from './Components/Main/Main';



function App() {
const [beers, setBeersData] = useState([]);
const [fetchParam, setFetchParam] = useState("")


const handleSearch = (e) => {
  const searchTerm = e.target.value;
  console.log(searchTerm) 
  const filteredData = beers.filter(beer => beer.name.includes(searchTerm))
  console.log(filteredData)
  setBeersData(filteredData)
}

// const handleFilter = (e) => {
//   console.log("has run!")
//   const checkType = e.target.value; 
//   if (checkType === "> 6.0%") {
//     const filteredData = beersData.filter(beer => beer.abv > 6)
//     return setBeersData(filteredData)
//   } else if (checkType === "< 4.0%"){
//     const filteredData = beersData.filter(beer => beer.ph < 4)
//     return setBeersData(filteredData)
//   } else if (checkType === "Classic range") {
//     const filteredData = beersData.filter(beer => beer.first_brewed.substring(3) < 2010)
//     console.log(filteredData)
//     return setBeersData(filteredData)
//     } else {
//       return setBeersData(beers)
//     }
// }


const handleFilterFetch = (e) => {
  console.log("handleFilterFetch has run!")
  const checkType = e.target.value;
  if (fetchParam) {
    let newFetchParam = fetchParam
    newFetchParam += "&"
    // console.log(newFetchParam)
    setFetchParam(newFetchParam)
  }
  if (checkType === "> 6.0%") {
    let newFetchParam = "?abv_gt=6"
  setFetchParam(newFetchParam)
  console.log(fetchParam)
  // return setFetchParam(fetchParam += "?abv_gt=6")x
  } else if (checkType === "< 4.0%"){
   let newFetchParam = "?ph_lt=6"
    // console.log(newFetchParam)
    return setFetchParam(newFetchParam)
  } else if (checkType === "Classic range") {
   let newFetchParam = "?brewed_after=12-2010"
    // console.log(newFetchParam)
    return setFetchParam(newFetchParam)
  }
  console.log(typeof fetchParam)
}

    useEffect(() => {
    //Use string interpolation to add a varaible to the endpoint request
    const URL = `https://api.punkapi.com/v2/beers` + fetchParam
    fetch(URL) 
    .then(res => res.json())
    .then(data => {
        setBeersData(data)
          })
      .catch(console.log("There has been an error"))
    },[fetchParam])

  // useEffect(() => {
  //   //Use string interpolation to add a varaible to the endpoint request
  //   const URL = `https://api.punkapi.com/v2/beers${fetchParam}`
  //   fetch(URL) 
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data.results)
  //     setBeersData(data.results)
  //   })
  //     .catch(console.log("Error"));
  //   },[fetchParam])


  return (
    <>
    <body className = "body">
    {<Navbar beers = {beers} handleSearch= {handleSearch} handleFilterFetch = {handleFilterFetch}/>}
    {<Main beers = {beers}/>}
    {console.log(beers)}
    </body>
    </>
  );
}

export default App;
