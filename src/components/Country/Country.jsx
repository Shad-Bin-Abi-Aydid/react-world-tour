import React, { useState } from 'react'
import './Country.css'

export default function Country({country, handleVisitedCountry}) {

  const {name, flags,population, area,cca3} = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () =>{
    setVisited(!visited);
  }


  return (
    <div className={` country ${visited? 'visited' : 'nonVisited'}`}>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <br />
      <button onClick={handleVisited} >{visited ? 'Visited':'Going'}</button>
      {
        visited ? ' I visited this place':' I want to visit'
      }
   </div>
  )
}
