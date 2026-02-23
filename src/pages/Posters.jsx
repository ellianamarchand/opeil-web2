import poster2004ApsGraf from '../assets/conference_posters/2004 APS Graf et al. poster.pdf'
import poster2006Lt25Opeil from '../assets/conference_posters/2006 LT25 Opeil et al. poster.pdf'
import poster2009ApsAlmeida from '../assets/conference_posters/2009 APS Almeida  et al. poster.pdf'
import poster2012MrsPoharel from '../assets/conference_posters/2012 MRS Poharel poster.pdf'
import poster2013ApsPokharel from '../assets/conference_posters/2013 APS Pokharel et al. poster.pdf'
import poster2015MrsCzaika from '../assets/conference_posters/2015 MRS Czaika et al. Poster.pdf'
import poster2015NesfOpeil from '../assets/conference_posters/2015 NESF Opeil et al. Poster.pdf'
import poster2016AogsOpeil from '../assets/conference_posters/2016 AOGS Opeil et al. poster.pdf'
import poster2017ApsPokharel from '../assets/conference_posters/2017 APS Pokharel et al. poster.pdf'
import poster2018SpsBonidie from '../assets/conference_posters/2018 SPS Bonidie et al. RUS Poster.pdf'
import poster2020BcsfNoyes from '../assets/conference_posters/2020 BCSF Noyes et al poster.pdf'
import poster2020NesfOpeil from '../assets/conference_posters/2020 NESF Opeil et al. 2020 poster.pdf'
import poster2024LpscOpeil1661 from '../assets/conference_posters/2024 LPSC Opeil et al. poster 1661.pdf'
import poster2024LpscOpeil1701 from '../assets/conference_posters/2024 LPSC Opeil et al. poster 1701.pdf'
import poster2025LpscOpeil2089 from '../assets/conference_posters/2025 LPSC Opeil et al. poster 2089.pdf'

const postersList = [
  {
    title: '2025 LPSC Opeil et al. Poster 2089',
    file: poster2025LpscOpeil2089,
  },
  {
    title: '2024 LPSC Opeil et al. Poster 1701',
    file: poster2024LpscOpeil1701,
  },
  {
    title: '2024 LPSC Opeil et al. Poster 1661',
    file: poster2024LpscOpeil1661,
  },
  {
    title: '2020 NESF Opeil et al. 2020 Poster',
    file: poster2020NesfOpeil,
  },
  {
    title: '2020 BCSF Noyes et al. Poster',
    file: poster2020BcsfNoyes,
  },
  {
    title: '2018 SPS Bonidie et al. RUS Poster',
    file: poster2018SpsBonidie,
  },
  {
    title: '2017 APS Pokharel et al. Poster',
    file: poster2017ApsPokharel,
  },
  {
    title: '2016 AOGS Opeil et al. Poster',
    file: poster2016AogsOpeil,
  },
  {
    title: '2015 NESF Opeil et al. Poster',
    file: poster2015NesfOpeil,
  },
  {
    title: '2015 MRS Czaika et al. Poster',
    file: poster2015MrsCzaika,
  },
  {
    title: '2013 APS Pokharel et al. Poster',
    file: poster2013ApsPokharel,
  },
  {
    title: '2012 MRS Poharel Poster',
    file: poster2012MrsPoharel,
  },
  {
    title: '2009 APS Almeida et al. Poster',
    file: poster2009ApsAlmeida,
  },
  {
    title: '2006 LT25 Opeil et al. Poster',
    file: poster2006Lt25Opeil,
  },
  {
    title: '2004 APS Graf et al. Poster',
    file: poster2004ApsGraf,
  },
]

function Posters() {
  return (
    <div className="page">
      <h1>Conference Posters</h1>
      <div className="more-info-grid">
        {postersList.map((poster) => (
          <a
            key={poster.title}
            className="more-info-button"
            href={poster.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            {poster.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Posters
