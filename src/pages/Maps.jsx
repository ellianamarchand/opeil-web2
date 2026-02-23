import mbtaBC from '../assets/bc_maps/MBTA_BC.png'
import mbtaDirectory from '../assets/bc_maps/MBTA_directory.png'
import brightonMap from '../assets/bc_maps/brighton.png'
import higginsMap from '../assets/bc_maps/higgins_on_map.png'
import mainCampusMap from '../assets/bc_maps/maincampus.png'
import mainDirections from '../assets/bc_maps/maindirections.png'
import newtonMap from '../assets/bc_maps/newton_on_map.png'
import newtonDirections from '../assets/bc_maps/newtondirections1.png'

const mapsList = [
  {
    title: 'Main Campus Map',
    img: mainCampusMap,
  },
  {
    title: 'Main Campus Directions',
    img: mainDirections,
  },
  {
    title: 'Brighton Campus Map',
    img: brightonMap,
  },
  {
    title: 'Newton Campus Map',
    img: newtonMap,
  },
  {
    title: 'Newton Directions',
    img: newtonDirections,
  },
  {
    title: 'Higgins Hall Location',
    img: higginsMap,
  },
  {
    title: 'MBTA - Boston College',
    img: mbtaBC,
  },
  {
    title: 'MBTA Directory',
    img: mbtaDirectory,
  },
]

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  marginTop: '20px',
}

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  cursor: 'pointer',
}

function Maps() {
  return (
    <div className="page">
      <h1>Boston College Campus and Higgins Hall Maps</h1>
      <div style={gridStyle}>
        {mapsList.map((map) => (
          <div key={map.title} style={cardStyle}>
            <h3>{map.title}</h3>
            <a href={map.img} target="_blank" rel="noopener noreferrer">
              <img src={map.img} alt={map.title} style={imageStyle} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Maps
