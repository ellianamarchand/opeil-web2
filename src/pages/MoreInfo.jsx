import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../sanityClient'
import cvPdf from '../assets/CV_opeil.pdf'

function MoreInfo() {
  const [dynamicCurriculumVitae, setDynamicCurriculumVitae] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "curriculumVitae"] | order(_createdAt desc) { _id, title, "link": pdfFile.asset->url }`)
      .then((data) => setDynamicCurriculumVitae(data || []))
  }, [])

  return (
    <div className="page more-info-page">
      <div className="more-info-title-box">
        <h1>More Information About the Opeil Laboratory</h1>
      </div>
      <div className="more-info-grid">
        {dynamicCurriculumVitae.map((cv) => (
          <a
            key={cv._id}
            className="more-info-button"
            href={cv.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cv.title}
          </a>
        ))}
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
