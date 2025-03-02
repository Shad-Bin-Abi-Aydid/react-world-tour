import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

export default function Countries() {

    const [countries, setCountries] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

  return (
    <div>
      Countries:{countries.length} 

      <div className='countries'>
      {
        countries.map(country => <Country key={countries.cca3} country = {country}></Country>)
      }
      </div>

    </div>
    
  )
}
