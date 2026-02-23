import asteroidOrbit from '../assets/asteroid/10692 opeil orbit with planets.pdf'
import asteroidSmallBody from '../assets/asteroid/10692 opeil Small-Body Database info.pdf'

const asteroidLinks = [
  {
    title: '10692 Opeil Orbital Data',
    file: asteroidOrbit,
  },
  {
    title: 'JPL Small-Body Database Details',
    file: asteroidSmallBody,
  },
]

function Asteroid() {
  return (
    <div className="page">
      <h1>Asteroid 10629</h1>
      <p>
        Asteroid 10692 was named in honor of the Opeil Laboratory's research
        contributions to planetary science and materials characterization. Below
        you can access the official orbital data and JPL Small-Body Database
        information for this minor planet.
      </p>
      <div className="more-info-grid">
        {asteroidLinks.map((link) => (
          <a
            key={link.title}
            className="more-info-button"
            href={link.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Asteroid
