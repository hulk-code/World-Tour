import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './country.css'


const Countries = () => {
    const [countries ,setCountry]=useState([])

    const [visitedCountry , setVisitedCiuntry] =useState([])
    const [visistedFlag , setVisitedflag]=useState([])
    

    const handleVisited=country => {
        // console.log(country);
        console.log('add me as visited');
            const newvisitedCountry=[...visitedCountry ,country ]
        setVisitedCiuntry(newvisitedCountry)

    }
   const handleVisitedFlag=flag =>{
    // console.log(flag);
    const newVisitedFlag=[...visistedFlag , flag]
    setVisitedflag(newVisitedFlag)

   }
    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div >
            <h1 className="two">Country Name:{countries.length}</h1>
            <div>
               <h4> visitedCountry{visitedCountry.length}</h4>
               <ul>
                {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
               </ul>

            </div>
            <div>
                <ul>
                    {
                      visistedFlag.map((flag ,idx ) => <img className="img-container" key={idx} src={flag}></img>)  
                    }
                </ul>
            </div>
           <div className="one">
           
           {
            countries.map(country => <Country key={countries.cca3} info={country} handleVisited={handleVisited}
            handleVisitedFlag={handleVisitedFlag}></Country>)
            }

           </div>
        </div>
    );
};

export default Countries;