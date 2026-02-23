import contactPdf from '../assets/contact_info/Contact_Information.pdf'

function Contact() {
  return (
    <div className="page">
      <h1>Contact Information</h1>
      <p>
        Find phone, email, and mailing details for the laboratory and research
        group.
      </p>
      <a
        className="more-info-button"
        href={contactPdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Contact Information (PDF)
      </a>
    </div>
  )
}

export default Contact
