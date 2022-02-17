import { useContext } from "react"
import { AppContext } from "../App"

const DataComponent = () => {

  const { ipData } = useContext(AppContext);

  if(!ipData) return <div>Loading</div>

  const { ip, isp, location:{ city, country, geonameId, timezone } } = ipData

  return (
  
      <div className="data">
        <div className="data__group">
          <p className="data__fieldname">IP ADDRESS</p>
          <p className="data__fieldvalue">{ ip }</p>
        </div>

        <div className="data__group">
          <p className="data__fieldname">LOCATION</p>
          <p className="data__fieldvalue">{`${city}, ${country} ${geonameId}`}</p>
        </div>

        <div className="data__group">
          <p className="data__fieldname">TIMEZONE</p>
          <p className="data__fieldvalue">UTC { timezone }</p>
        </div>

        <div className="data__group">
          <p className="data__fieldname">ISP</p>
          <p className="data__fieldvalue">{ isp }</p>
        </div>
      </div>

  )
}

export default DataComponent