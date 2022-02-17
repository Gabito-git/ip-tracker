import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';

const SearchComponent = () => {

  const { setIpData }  = useContext(AppContext)
  const [ipAddress, setIpAddress] = useState('')


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(validateIp( ipAddress )){
      const response = await fetch (`https://geo.ipify.org/api/v2/country,city?apiKey=at_EiV5cPaMS9i77lsZlAGH7fz8eTTMX&ipAddress=${ ipAddress }`)
      const data = await response.json();
      setIpData( data )
    }
  }

  const validateIp = ( value: string ) => {

    // Patron para validar la ip
    const patronIp=new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm);
    if (ipAddress.search(patronIp)==0) {
        // Ip correcta
        return true
    } else {
        // Ip incorrecta
        return false
    }
}

  return (
    <div className="search">
        <h1 className="search__title">IP Address Tracker</h1>
        <form 
          className="search__input-field"
          onSubmit={ handleSubmit }
        >
            <input 
                placeholder="Search for any IP address or domain"
                className="search__input"
                value={ ipAddress }
                onChange={ (e) => setIpAddress(e.target.value) } 
            />
            <button
              className="search__icon-field"
              type="submit"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
            </button>
        </form>
    </div>
  )
}

export default SearchComponent