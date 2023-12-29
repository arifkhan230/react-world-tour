import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry, handleVisitFlag }) => {
    const { name, flags, population, capital, cca3 } = country;
    const [visited, setVisited] = useState(false)
    // console.log(country)
    const handleVisited = () => {
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={flags.png} alt="" />
            <h3 style={{ color: visited ? 'purple' : 'black' }}>Name: {name.common} </h3>
            <h4>Capital: {capital}</h4>
            <p>Population: {population} </p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitFlag(country.flags.png)}>add flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'} </button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;