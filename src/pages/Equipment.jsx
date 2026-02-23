import labPdf from '../assets/lab_focus.pdf'

function Equipment() {
  return (
    <div className="page">
      <h1>Laboratory Research Equipment</h1>
      <section>
        <p>
          Current Research Interests of the Opeil Laboratory:
        </p>
        <a
          className="more-info-button"
          href={labPdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Laboratory Research Equipment & Focus (PDF)
        </a>
      </section>
    </div>
  )
}

export default Equipment
