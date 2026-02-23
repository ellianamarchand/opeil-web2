import patentFerroelectric from '../assets/patents/Ferroelectric infrared detector and method, LPS - US7687775.pdf'
import patentLashleyApl2007 from '../assets/patents/Lashley et al., APL 2007.pdf'
import patent2008and2010 from '../assets/patents/Patents 2008 and 2010.pdf'
import patentUs20080185523App from '../assets/patents/US_20080185523 Patent Application.pdf'
import patentUs20080185523Summary from '../assets/patents/US_20080185523 Summary Document.pdf'
import patentUs7687775App from '../assets/patents/US_7687775 Patent Application.pdf'
import patentUs7687775Summary from '../assets/patents/US_7687775 Summary Document.pdf'

const patentsList = [
  {
    title: 'Ferroelectric Infrared Detector and Method (LPS - US7687775)',
    file: patentFerroelectric,
  },
  {
    title: 'Heat capacity in magnetic and electric fields near the ferroelectric transition in triglycine sulfate',
    file: patentLashleyApl2007,
  },
  {
    title: 'Infrared Detector and Method; Ferroelectric Detector and Method (2008 and 2010 Patents)',
    file: patent2008and2010,
  },
  {
    title: 'US Patent Application 20080185523',
    file: patentUs20080185523App,
  },
  {
    title: 'US Patent Application 20080185523 Summary',
    file: patentUs20080185523Summary,
  },
  {
    title: 'US Patent Application 7,687,775',
    file: patentUs7687775App,
  },
  {
    title: 'US Patent Application 7,687,775 Summary',
    file: patentUs7687775Summary,
  },
]

function Patents() {
  return (
    <div className="page">
      <h1>Patents</h1>
      <div className="more-info-grid">
        {patentsList.map((patent) => (
          <a
            key={patent.title}
            className="more-info-button"
            href={patent.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            {patent.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Patents
