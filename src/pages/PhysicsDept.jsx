function PhysicsDept() {
  return (
    <div className="page physics-dept-page">
      <h1>Faculty Profile & Department Info</h1>
      <p>For more information about Fr. Opeil and his lab, click below:</p>
      <a
        className="faculty-profile-card"
        href="https://www.bc.edu/content/bc-web/schools/morrissey/departments/physics/people/faculty-directory/cyril-opeil.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Fr. Opeil's BC Faculty Profile
        <svg
          className="external-link-icon"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
            fill="currentColor"
          />
          <path
            d="M5 5h7v2H7v10h10v-5h2v7H5V5z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  )
}

export default PhysicsDept
