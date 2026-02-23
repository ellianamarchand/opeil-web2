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
  return (
    <div className="page">
      <h1>Interviews and Articles</h1>
      <div className="more-info-grid">
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
