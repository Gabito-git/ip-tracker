import { createContext, useState, useEffect } from 'react';

import DataComponent from './components/DataComponent';
import MapComponent from './components/MapComponent';
import SearchComponent from './components/SearchComponent';
import { Ipdata } from './interfaces/ipDataInterface';

import './styles/index.scss';

interface AppContextInterface{
  ipData: Ipdata | undefined,
  setIpData: React.Dispatch<React.SetStateAction<Ipdata | undefined>>
}

export const AppContext = createContext({} as AppContextInterface);
const { Provider } = AppContext

function App() {

  const [ipData, setIpData] = useState<Ipdata>()

  useEffect(() => {

    const getMyIp = async() => {
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json()
      return data
    }

    const getIpData = async() => {
      const { ip } = await getMyIp()
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_EiV5cPaMS9i77lsZlAGH7fz8eTTMX&ipAddress=${ ip }`);
      const data = await response.json()
      console.log(`https://geo.ipify.org/api/v2/country,city?apiKey=at_EiV5cPaMS9i77lsZlAGH7fz8eTTMX&ipAddress=${ ip }`);
      setIpData( data )
    }

    getIpData()

  }, [])
  
  return (
    <Provider value={{ ipData, setIpData }}>
      <div className="App">
        <SearchComponent />
        <DataComponent />
        <MapComponent />
      </div>
    </Provider>
    
  );
}

export default App;
