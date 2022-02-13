
const arrowIcon = require( '../assets/icon-arrow.svg');

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
                {/* <img src={arrowIcon } alt="arrow"/>   */}
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
            </div>
        </div>
    </div>
  )
}

export default SearchComponent