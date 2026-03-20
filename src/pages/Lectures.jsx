import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import lectureAPS from '../assets/lectures/Conference - APS 2006 Opeil et al. ARPES on U.pdf'
import lectureOccidental from '../assets/lectures/Invited - Occidental University, July 2011 Measuring Materials.pdf'
import lectureUCentral from '../assets/lectures/Invited - U Cent. FL, January 2015 SSERVI CLASS 1.0 & 2.0 Project .pdf'
import lectureUConn from '../assets/lectures/Invited - U Conn, November 2019 CM2 Meteorites.pdf'
import lectureMeteorite from '../assets/lectures/Public - Meteorites and Where they come from, November 2024.pdf'
import lectureOSIRIS from '../assets/lectures/Public - OSIRIS-REx and 101955 Bennu, November 2024.pdf'

const lecturesList = [
  {
    title: 'Conference - APS 2006 ARPES on U',
    file: lectureAPS,
  },
  {
    title: 'Invited - Occidental University (July 2011)',
    file: lectureOccidental,
  },
  {
    title: 'Invited - U. Central Florida (January 2015)',
    file: lectureUCentral,
  },
  {
    title: 'Invited - U. Conn. (November 2019)',
    file: lectureUConn,
  },
  {
    title: 'Public - Meteorites and Where They Come From (November 2024)',
    file: lectureMeteorite,
  },
  {
    title: 'Public - OSIRIS-REx and 101955 Bennu (November 2024)',
    file: lectureOSIRIS,
  },
]

function Lectures() {
  const [dynamicLectures, setDynamicLectures] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "lecture"] | order(_createdAt desc) { _id, title, "link": pdfFile.asset->url }`)
      .then((data) => setDynamicLectures(data || []))
  }, [])

  return (
    <div className="page">
      <h1>Invited, Public & Conference Lectures</h1>
      <div className="more-info-grid">
        {dynamicLectures.map((lecture) => (
          <a
            key={lecture._id}
            className="more-info-button"
            href={lecture.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lecture.title}
          </a>
        ))}
        {lecturesList.map((lecture) => (
          <a
            key={lecture.title}
            className="more-info-button"
            href={lecture.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lecture.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Lectures
