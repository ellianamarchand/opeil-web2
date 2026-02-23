import labPhotos from '../assets/Opeil_photos.pdf'

function Photos() {
  return (
    <div className="page">
      <h1>Laboratory Photographs</h1>
      <p>
        This document contains a comprehensive collection of images from the Opeil
        Laboratory, showcasing our experiments, research equipment, and laboratory
        facilities.
      </p>
      <div style={{ textAlign: 'center' }}>
        <a
          className="more-info-button"
          href={labPhotos}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Laboratory Photo Gallery (PDF)
        </a>
      </div>
    </div>
  )
}

export default Photos
