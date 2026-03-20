import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import holyFamilyMagazine from '../assets/interviews/Holy Family Magazine September:October 2007 .pdf'
import interactionsMagazine from '../assets/interviews/Interactions Magazine September:October 2007.pdf'
import valleyAdvantage from '../assets/interviews/The Valley Advantage September 2024 .pdf'

const interviewsList = [
  {
    title: 'Holy Family Magazine Article (September/October 2007)',
    file: holyFamilyMagazine,
  },
  {
    title: 'Interactions Magazine Article (September/October 2007)',
    file: interactionsMagazine,
  },
  {
    title: 'The Valley Advantage Article (September 2024)',
    file: valleyAdvantage,
  },
]

function Interviews() {
  const [dynamicInterviews, setDynamicInterviews] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "interview"] | order(_createdAt desc) { _id, title, "link": pdfFile.asset->url }`)
      .then((data) => setDynamicInterviews(data || []))
  }, [])

  return (
    <div className="page">
      <h1>Interviews and Articles</h1>
      <div className="more-info-grid">
        {dynamicInterviews.map((interview) => (
          <a
            key={interview._id}
            className="more-info-button"
            href={interview.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {interview.title}
          </a>
        ))}
        {interviewsList.map((interview) => (
          <a
            key={interview.title}
            className="more-info-button"
            href={interview.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            {interview.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Interviews
