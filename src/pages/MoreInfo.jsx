import { Link } from 'react-router-dom'
import cvPdf from '../assets/CV_opeil.pdf'

function MoreInfo() {
  return (
    <div className="page more-info-page">
      <div className="more-info-title-box">
        <h1>More Information About the Opeil Laboratory</h1>
      </div>
      <div className="more-info-grid">
        <a className="more-info-button" href={cvPdf} download>
          Curriculum Vitae
        </a>
        <Link className="more-info-button" to="/syllabi">
          Physics Course Syllabi
        </Link>
        <Link className="more-info-button" to="/research-papers">
          Published Research Papers
        </Link>
        <Link className="more-info-button" to="/interviews">
          Interviews and Articles
        </Link>
        <Link className="more-info-button" to="/equipment">
          Laboratory Research Equipment
        </Link>
        <Link className="more-info-button" to="/lectures">
          Invited, Public & Conference Lectures
        </Link>
        <Link className="more-info-button" to="/patents">
          Patents
        </Link>
        <Link className="more-info-button" to="/maps">
          Boston College Campus and Higgins Hall Maps
        </Link>
        <Link className="more-info-button" to="/abstracts">
          Conference Abstracts
        </Link>
        <Link className="more-info-button" to="/photos">
          Laboratory Photographs
        </Link>
        <Link className="more-info-button" to="/posters">
          Conference Posters
        </Link>
        <Link className="more-info-button" to="/asteroid">
          Asteroid 10629
        </Link>
        <Link className="more-info-button" to="/contact">
          Contact Information
        </Link>
      </div>
    </div>
  )
}

export default MoreInfo
