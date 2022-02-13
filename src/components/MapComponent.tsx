import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import L from "leaflet";

import 'leaflet/dist/leaflet.css';

/*
  Las siquieres lineas antes de la declaración del componente, 
  son usadas para lograr que el icono del marcador aparezca.
  Se emplea require porque al usar import, typescript se queja 
  indicando que no encuentra el modulo
*/

const icon = require( 'leaflet/dist/images/marker-icon.png') ;

const iconShadow = require( 'leaflet/dist/images/marker-shadow.png');

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const MapComponent = () => {


  return (
    <div className='map'>
      <MapContainer center={[51.505, -0.09]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapComponent