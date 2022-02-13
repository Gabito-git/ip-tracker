

const SearchComponent = () => {
  return (
    <div className="search">
        <h1 className="search__title">IP Address Tracker</h1>
        <div className="search__input-field">
            <input 
                placeholder="Search for any IP address or domain"
                className="search__input"
            />
            <div className="search__icon-field">
                <img src='assets/icon-arrow.svg' alt="arrow"/>  
            </div>
        </div>
    </div>
  )
}

export default SearchComponent