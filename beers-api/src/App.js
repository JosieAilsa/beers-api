import './App.scss';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import beersData from './data/beers';
import { useEffect, useState } from 'react';
import Main from './Components/Main/Main';



function App() {
const [beers, setBeersData] = useState(beersData);


const handleSearch = (e) => {
  const searchTerm = e.target.value;
  console.log(searchTerm) 
  const filteredData = beersData.filter(beer => beer.name.includes(searchTerm))
  console.log(filteredData)
  setBeersData(filteredData)
}

const handleFilter = (e) => {
  console.log("has run!")
  const checkType = e.target.value; 
  if (checkType === "> 6.0%") {
    const filteredData = beersData.filter(beer => beer.abv > 6)
    return setBeersData(filteredData)
  } else if (checkType === "< 4.0%"){
    const filteredData = beersData.filter(beer => beer.ph < 4)
    return setBeersData(filteredData)
  } else if (checkType === "Classic range") {
    const filteredData = beersData.filter(beer => beer.first_brewed.substring(3) < 2010)
    console.log(filteredData)
    return setBeersData(filteredData)
    } else {
      return setBeersData(beers)
    }
}

// useEffect(() => {
//     //Use string interpolation to add a varaible to the endpoint request
//     const URL = `https://api.punkapi.com/v2/beers${}`
//     fetch(URL) 
//     .then(res => res.json())
//     .then(data => 
//       setBeersData(data.results))
//       .catch(console.log("Error"));
//     },[handleSearch])


  return (
    <>
    <body className = "body">
    <Navbar beers = {beers} handleSearch= {handleSearch} handleFilter = {handleFilter}/>
    <Main beers = {beers} />
    </body>
    </>
  );
}

export default App;
