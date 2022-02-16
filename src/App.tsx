import DataComponent from './components/DataComponent';
import MapComponent from './components/MapComponent';
import SearchComponent from './components/SearchComponent';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
        <SearchComponent />
        <DataComponent />
        <MapComponent />
    </div>
  );
}

export default App;
