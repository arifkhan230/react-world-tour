import { useEffect } from "react";
import { useState } from "react";
import './Countries.css'
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])
 
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country')
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitFlag = flag => {
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
    }


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlag.map((flag,idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
                {/* display countries */}
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        handleVisitedCountry = {handleVisitedCountry}
                        handleVisitFlag = {handleVisitFlag}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;