// components/Map.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix default icon issue for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {

  const [locations, setLocations] = useState([]); // Default position (latitude, longitude)
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchDomainData = async () => {
      try {
        const res = await fetch(`/api/proxy?domain=tndpayment.eth`);
        const data = await res.json();


        const locationsData = data.map((item: any) => {
  const { latitude, longitude, description, url } = item.text_records;
  const { address, domain, name } = item;

  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);

  // 检查经纬度的有效性
  if (isNaN(lat) || isNaN(lng)) {
    console.warn('Invalid latitude or longitude for:', item);
    return null; // 返回 null 以便于后续处理
  }

  return {
    position: [lat, lng],
    description: description,
    address: address,
    domain: domain,
    url: url,
    name: name
  };
}).filter(item => item !== null); // 过滤掉无效的项



        // Extract latitude and longitude from the response
        setLocations(locationsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching domain data:', error);
        setLoading(false);
      }
    };

    fetchDomainData();
  }, []);

  if (loading) {
    return <div>Loading map...</div>;
  }

return (
      <MapContainer 
      center={locations[0].position} 
      zoom={13} 
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position}>
          <Popup>
            <div>
              <strong>ENS:</strong> {location.name+'.'+location.domain} <br />
              <strong>Address:</strong> {location.address} <br />
              <strong>Description:</strong> {location.description} <br />
              <strong>URL:</strong> <a href={location.url} target="_blank" rel="noopener noreferrer">{location.url}</a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
