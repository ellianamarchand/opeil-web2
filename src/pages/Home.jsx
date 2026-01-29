import { Link } from 'react-router-dom'
import bcSeal from '../assets/front_page/bc_seal.png'
import opeil2008 from '../assets/front_page/opeil2008.png'
import opeil2020 from '../assets/front_page/opeil2020.png'
import zhang from '../assets/front_page/zhang.png'
import opeil2008Pdf from '../assets/front_page/opeil2008pdf.pdf'
import opeil2020Pdf from '../assets/front_page/opeil2020pdf.pdf'
import zhangPdf from '../assets/front_page/zhangpdf.pdf'

function Home() {
  return (
    <div className="main-layout">
      <div className="left-column">
        <Link to="/physics-dept" className="nav-button">Boston College Physics Department</Link>
        <Link to="/lab-research" className="nav-button">Laboratory Research Focus</Link>
        <Link to="/more-info" className="nav-button">More Information</Link>
      </div>
      <div className="right-column">
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={bcSeal} alt="Boston College seal" />
          </div>
          <div className="gallery-item">
            <a href={opeil2008Pdf} target="_blank" rel="noreferrer">
              <img src={opeil2008} alt="Opeil Laboratory 2008" />
            </a>
          </div>
          <div className="gallery-item">
            <a href={opeil2020Pdf} target="_blank" rel="noreferrer">
              <img src={opeil2020} alt="Opeil Laboratory 2020" />
            </a>
          </div>
          <div className="gallery-item">
            <a href={zhangPdf} target="_blank" rel="noreferrer">
              <img src={zhang} alt="Zhang group" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
