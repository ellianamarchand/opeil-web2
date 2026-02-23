import aps2005ManleyUranium from '../assets/conference_abstracts/APS 2005 Manley, Uranium.pdf'
import aps2006OpeilArpesU from '../assets/conference_abstracts/APS 2006 Opeil, ARPES on U.pdf'
import aps2006SmithCerium from '../assets/conference_abstracts/APS 2006 Smith, Cerium.pdf'
import aps2005OpeilPhotoemissionU from '../assets/conference_abstracts/APS_2005 Opeil, PhotoEmission Spec. in U.pdf'
import lpsc2016MackeHeatCapacity from '../assets/conference_abstracts/LPSC 2016 Macke, OC Heat Capacity, Abstract 1221.pdf'
import lpsc2024AguasZarcas from '../assets/conference_abstracts/LPSC 2024 Aguas Zarcas, Abstract 1661.pdf'
import lpsc2024OpeilShergottite from '../assets/conference_abstracts/LPSC 2024 Opeil, Martian Shergottite Abstract 1707.pdf'
import metsoc2025ConsolmagnoCI1 from '../assets/conference_abstracts/MetSoc 2025, Consolmagno, CI1 Carbonaceous Chondrites.pdf'
import nesf2020OpeilCM2 from '../assets/conference_abstracts/NESF 2020, Opeil, CM2 Carbonaceous Chondrites Abstract 082.pdf'

const abstractsList = [
  {
    title: 'APS 2005 - Manley, Uranium',
    file: aps2005ManleyUranium,
  },
  {
    title: 'APS 2005 - Opeil, Photoemission Spec. in U',
    file: aps2005OpeilPhotoemissionU,
  },
  {
    title: 'APS 2006 - Opeil, ARPES on U',
    file: aps2006OpeilArpesU,
  },
  {
    title: 'APS 2006 - Smith, Cerium',
    file: aps2006SmithCerium,
  },
  {
    title: 'LPSC 2016 - Macke, OC Heat Capacity (1221)',
    file: lpsc2016MackeHeatCapacity,
  },
  {
    title: 'LPSC 2024 - Aguas Zarcas (1661)',
    file: lpsc2024AguasZarcas,
  },
  {
    title: 'LPSC 2024 - Opeil, Martian Shergottite (1707)',
    file: lpsc2024OpeilShergottite,
  },
  {
    title: 'MetSoc 2025 - Consolmagno, CI1 Carbonaceous Chondrites',
    file: metsoc2025ConsolmagnoCI1,
  },
  {
    title: 'NESF 2020 - Opeil, CM2 Carbonaceous Chondrites (082)',
    file: nesf2020OpeilCM2,
  },
]

function Abstracts() {
  return (
    <div className="page">
      <h1>Conference Abstracts</h1>
      <div className="more-info-grid">
        {abstractsList.map((abstract) => (
          <a
            key={abstract.title}
            className="more-info-button"
            href={abstract.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            {abstract.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Abstracts
