import fullPapersPdf from '../assets/papers_directory.pdf'
import opeilPhysicaB2002 from '../assets/research_papers/papers_2002/Opeil_PhysicaB 2002.pdf'
import grafPhysRevB2003 from '../assets/research_papers/papers_2003/Graf_PhysRevB 2003.pdf'
import grafJLowTempPhys2004 from '../assets/research_papers/papers_2004/Graf_JLowTempPhys 2004.pdf'
import opeilJMagMagMater2004 from '../assets/research_papers/papers_2004/Opeil_JMagMagMater 2004.pdf'
import damesAppPhysLett2005 from '../assets/research_papers/papers_2005/Dames_AppPhysLett 2005.pdf'
import deVisserPhysicaB2005 from '../assets/research_papers/papers_2005/deVisser_PhysicaB 2005.pdf'
import lashleyPRL2006a from '../assets/research_papers/papers_2006/Lashley_PRL_97_235701_2006.pdf'
import mihailaPRL2006 from '../assets/research_papers/papers_2006/Mihaila_PRL_96_076401_2006.pdf'
import opeilJPSJ2006 from '../assets/research_papers/papers_2006/Opeil_JPSJ_75_56_2006.pdf'
import opeilPRB2006 from '../assets/research_papers/papers_2006/Opeil_PRB_73_165109_2006.pdf'
import lashleyAPL2007 from '../assets/research_papers/papers_2007/Lashley_APL_90_052910_2007.pdf'
import lashleyPRB2007 from '../assets/research_papers/papers_2007/Lashley_PRB_75_205119_2007.pdf'
import lashleyPRL2007 from '../assets/research_papers/papers_2007/Lashley_PRL_98_249702_2007.pdf'
import opeilPRB2007 from '../assets/research_papers/papers_2007/Opeil_PRB_75_045120_2007.pdf'
import lashleyPRL2008 from '../assets/research_papers/papers_2008/Lashley_PRL_101_135703_2008.pdf'
import opeilPRL2008 from '../assets/research_papers/papers_2008/Opeil_PRL_100_165703_2008.pdf'
import opeilJofPCS2009 from '../assets/research_papers/papers_2009/Opeil JofPCS_150_042109_2009.pdf'
import schmiedeshoffPhilMag2009 from '../assets/research_papers/papers_2009/Schmiedeshoff_PhilMag_89_2071_2009.pdf'
import yangPhilMag2009 from '../assets/research_papers/papers_2009/Yang_PhilMag_89_2083_2009.pdf'
import littlewoodPhysRevLett2010 from '../assets/research_papers/papers_2010/Littlewood_PhysRevLett_2010.pdf'
import opeilICARUS2010 from '../assets/research_papers/papers_2010/Opeil_ICARUS_2010.pdf'
import saljePRB2010 from '../assets/research_papers/papers_2010/Salje_PRB 82_2010.pdf'

function ResearchPapers() {
  const years = [
    {
      year: '2002',
      papers: [
        {
          title:
            'Evidence for the existence of a magnetic quantum critical point in U(Pt<sub>1-x</sub>Pd<sub>x</sub>)<sub>3</sub>',
          authors: 'C.P. Opeil, et al.',
          link: opeilPhysicaB2002,
        },
      ],
    },
    {
      year: '2003',
      papers: [
        {
          title: 'Onset of antiferromagnetism in UPt<sub>3</sub> via Th substitution studied by &mu;on spin spectroscopy',
          authors: 'J. Graf, et al.',
          link: grafPhysRevB2003,
        },
      ],
    },
    {
      year: '2004',
      papers: [
        {
          title: 'Magnetic Anisotropy and de Haas–van Alphen Oscillations in a Bi Microwire Array Studied via Cantilever Magnetometry at Low Temperatures',
          authors: 'J. Graf, et al.',
          link: grafJLowTempPhys2004,
        },
        {
          title: 'Crossover from anomalous to conventional antiferromagnetism in Pd-doped UPt<sub>3</sub> studied via cantilever magnetometry',
          authors: 'C.P. Opeil, et al.',
          link: opeilJMagMagMater2004,
        },
      ],
    },
    {
      year: '2005',
      papers: [
        {
          title: 'Low-dimensional phonon specific heat of titanium dioxide nanotubes',
          authors: 'C. Dames, et al.',
          link: damesAppPhysLett2005,
        },
        {
          title: 'Inhomogeneous magnetic order in Th-doped UPt<sub>3</sub> detected by &mu;SR',
          authors: 'A. de Visser, et al.',
          link: deVisserPhysicaB2005,
        },
      ],
    },
    {
      year: '2006',
      papers: [
        {
          title: 'Tricritical Phenomena at the &gamma; &rarr; &alpha; Transition in Ce<sub>0.9-x</sub>La<sub>x</sub>Th<sub>0.1</sub> Alloys',
          authors: 'J.C. Lashley, et al.',
          link: lashleyPRL2006a,
        },
        {
          title: 'Pinning Frequencies of the Collective Modes in &alpha;-Uranium',
          authors: 'B. Mihaila, et al.',
          link: mihailaPRL2006,
        },
        {
          title: 'Photoelectric Effect in Uranium',
          authors: 'C.P. Opeil, et al.',
          link: opeilJPSJ2006,
        },
        {
          title: 'Valence-band UPS, 6pcore-level XPS, and LEED of a uranium (001) single crystal',
          authors: 'C.P. Opeil, et al.',
          link: opeilPRB2006,
        },
      ],
    },
    {
      year: '2007',
      papers: [
        {
          title: 'Heat capacity in magnetic and electric fields near the ferroelectric transition in triglycine sulfate',
          authors: 'J.C. Lashley, et al.',
          link: lashleyAPL2007,
        },
        {
          title: 'Electronic instabilities in shape-memory alloys: Thermodynamic and electronic structure studies of the martensitic transition',
          authors: 'J.C. Lashley, et al.',
          link: lashleyPRB2007,
        },
        {
          title: 'Physical Review Letters PRL 98, 249702 (2007)',
          authors: 'J.C. Lashley, et al.',
          link: lashleyPRL2007,
        },
        {
          title: 'Angle-resolved photoemission and first-principles electronic structure of single-crystalline &alpha;-U(001)',
          authors: 'C.P. Opeil, et al.',
          link: opeilPRB2007,
        },
      ],
    },
    {
      year: '2008',
      papers: [
        {
          title: 'Observation of a Continuous Phase Transition in a Shape-Memory Alloy',
          authors: 'J.C. Lashley, et al.',
          link: lashleyPRL2008,
        },
        {
          title: 'Combined Experimental and Theoretical Investigation of the Premartensitic Transition in Ni2MnGa',
          authors: 'C.P. Opeil, et al.',
          link: opeilPRL2008,
        },
      ],
    },
    {
      year: '2009',
      papers: [
        {
          title: 'Angle-Dependent Magneto-Resistance near the Pre-Martensitic Phase of Ni2MnGa',
          authors: 'C.P. Opeil, et al.',
          link: opeilJofPCS2009,
        },
        {
          title: 'Influence of magnetic fields on structural martensitic transitions',
          authors: 'G.M. Schmiedeshoff, et al.',
          link: schmiedeshoffPhilMag2009,
        },
        {
          title: 'Band Structure of SnTe Studied by Photoemission Spectroscopy',
          authors: 'J. Yang, et al.',
          link: yangPhilMag2009,
        },
      ],
    },
    {
      year: '2010',
      papers: [
        {
          title: 'Band Structure of SnTe Studied by Photoemission Spectroscopy',
          authors: 'P.B. Littlewood, et al.',
          link: littlewoodPhysRevLett2010,
        },
        {
          title: 'The thermal conductivity of meteorites: New measurements and analysis',
          authors: 'C.P. Opeil, et al.',
          link: opeilICARUS2010,
        },
        {
          title: 'Tin telluride: A weakly co-elastic metal',
          authors: 'E.K.H. Salje, et al.',
          link: saljePRB2010,
        },
      ],
    },
  ]

  return (
    <div className="page research-papers-page">
      <h1>Published Research Papers</h1>
      <div style={{ marginBottom: '40px' }}>
        <a
          className="more-info-button"
          href={fullPapersPdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Complete Research Papers Directory (PDF)
        </a>
      </div>
      <div className="research-papers-list">
        {years.map((yearGroup) => (
          <section key={yearGroup.year} className="research-year">
            <h3>{yearGroup.year}</h3>
            <ul>
              {yearGroup.papers.map((paper) => (
                <li key={paper.link}>
                  <a href={paper.link} target="_blank" rel="noreferrer">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: paper.title,
                      }}
                    />
                  </a>
                  <div className="research-authors">{paper.authors}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

export default ResearchPapers
