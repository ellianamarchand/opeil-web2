import labFocusPdf from '../assets/lab_focus.pdf'

function LabResearch() {
  return (
    <div className="page">
      <h1>Laboratory Research Focus</h1>
      <a href={labFocusPdf} download>
        Download Laboratory Research Focus (PDF)
      </a>
      <div className="pdf-preview" style={{ marginTop: '16px' }}>
        <object data={labFocusPdf} type="application/pdf" width="100%" height="700">
          <p>
            Your browser can’t display PDFs.{' '}
            <a href={labFocusPdf} download>
              Download the PDF
            </a>
            .
          </p>
        </object>
      </div>
    </div>
  )
}

export default LabResearch
