import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import syllabusPH210Spring2008 from '../assets/syllabi/Syllabus PH210, Intro. Physics Pre-Med., Spring 2008.pdf'
import syllabusPH210Spring2009 from '../assets/syllabi/Syllabus PH210, Intro. Physics Pre-Med., Spring 2009.pdf'
import syllabusPH416Fall2012 from '../assets/syllabi/Syllabus PH416, Physics of Alternative Energy Fall 2012.pdf'
import syllabusPhys1100Fall2024 from '../assets/syllabi/Syllabus PHYS1100, Structure of the Universe I, Fall 2024.pdf'
import syllabusPhys1100Fall2025 from '../assets/syllabi/Syllabus PHYS1100, Structure of the Universe I, Fall 2025.pdf'
import syllabusPhys1101Spring2025 from '../assets/syllabi/Syllabus PHYS1101, Structure of the Universe II, Spring 2025.pdf'
import syllabusPhys4350Spring2021 from '../assets/syllabi/Syllabus PHYS4350, Experiments in Physics, Spring 2021.pdf'
import syllabusPhys4350Spring2022 from '../assets/syllabi/Syllabus PHYS4350, Experiments in Physics, Spring 2022.pdf'
import syllabusPhys4350Spring2023 from '../assets/syllabi/Syllabus PHYS4350, Experiments in Physics, Spring 2023.pdf'
import syllabusPhys4515Fall2022 from '../assets/syllabi/Syllabus PHYS4515, Physics of Alternative Energy, Fall 2022.pdf'
import syllabusPhys7708Spring2020 from '../assets/syllabi/Syllabus PHYS7708, Grad. Seminar, Spring2020.pdf'

const syllabiList = [
  {
    title: 'Syllabus PHYS7708 - Grad. Seminar (Spring 2020)',
    file: syllabusPhys7708Spring2020,
  },
  {
    title: 'Syllabus PHYS4515 - Physics of Alternative Energy (Fall 2022)',
    file: syllabusPhys4515Fall2022,
  },
  {
    title: 'Syllabus PHYS4350 - Experiments in Physics (Spring 2023)',
    file: syllabusPhys4350Spring2023,
  },
  {
    title: 'Syllabus PHYS4350 - Experiments in Physics (Spring 2022)',
    file: syllabusPhys4350Spring2022,
  },
  {
    title: 'Syllabus PHYS4350 - Experiments in Physics (Spring 2021)',
    file: syllabusPhys4350Spring2021,
  },
  {
    title: 'Syllabus PHYS1101 - Structure of the Universe II (Spring 2025)',
    file: syllabusPhys1101Spring2025,
  },
  {
    title: 'Syllabus PHYS1100 - Structure of the Universe I (Fall 2025)',
    file: syllabusPhys1100Fall2025,
  },
  {
    title: 'Syllabus PHYS1100 - Structure of the Universe I (Fall 2024)',
    file: syllabusPhys1100Fall2024,
  },
  {
    title: 'Syllabus PH416 - Physics of Alternative Energy (Fall 2012)',
    file: syllabusPH416Fall2012,
  },
  {
    title: 'Syllabus PH210 - Intro. Physics Pre-Med. (Spring 2009)',
    file: syllabusPH210Spring2009,
  },
  {
    title: 'Syllabus PH210 - Intro. Physics Pre-Med. (Spring 2008)',
    file: syllabusPH210Spring2008,
  },
]

function Syllabi() {
  const [dynamicSyllabi, setDynamicSyllabi] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "syllabus"] | order(_createdAt desc) { _id, title, "link": pdfFile.asset->url }`)
      .then((data) => setDynamicSyllabi(data || []))
  }, [])

  return (
    <div className="page">
      <h1>Physics Course Syllabi</h1>
      <div className="more-info-grid">
        {dynamicSyllabi.map((syllabus) => (
          <a
            key={syllabus._id}
            className="more-info-button"
            href={syllabus.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {syllabus.title}
          </a>
        ))}
        {syllabiList.map((syllabus) => (
          <a
            key={syllabus.title}
            className="more-info-button"
            href={syllabus.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            {syllabus.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Syllabi
