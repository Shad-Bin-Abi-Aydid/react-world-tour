import React, { useState } from 'react'
import './Country.css'

export default function Country({country}) {

  const {name, flags,population, area,cca3} = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () =>{
    setVisited(!visited);
  }

  console.log(country);

  return (
    <div className='country'>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={handleVisited} >{visited ? 'Visited':'Going'}</button>
      {
        visited ? ' I visited this place':' I want to visit'
      }
   </div>
  )
}
