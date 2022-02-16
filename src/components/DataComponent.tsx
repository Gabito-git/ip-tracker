
const DataComponent = () => {
  return (
    <div className="data">
      <div className="data__group">
        <p className="data__fieldname">IP ADDRESS</p>
        <p className="data__fieldvalue">192.212.174.101</p>
      </div>

      <div className="data__group">
        <p className="data__fieldname">LOCATION</p>
        <p className="data__fieldvalue">Brooklyn, NY 10001</p>
      </div>

      <div className="data__group">
        <p className="data__fieldname">TIMEZONE</p>
        <p className="data__fieldvalue">UTC -05:00</p>
      </div>

      <div className="data__group">
        <p className="data__fieldname">ISP</p>
        <p className="data__fieldvalue">SpaceX Starlink</p>
      </div>
    </div>
  )
}

export default DataComponent