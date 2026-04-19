// PATH: src/App.tsx
import "./App.css";
import downloadIcon from "./assets/download.svg";

function App() {
  const handleDownload = () => window.print();

  return (
    <div className="page-wrapper">
      <button className="download-btn no-print" onClick={handleDownload}>
        <img src={downloadIcon} alt="Download PDF" className="download-icon" />
        <span>Save PDF</span>
      </button>

      <div className="resume">
        {/* HEADER */}
        <header className="header">
          <h1 className="name">Amy Tlapalamatl Sola</h1>
          <p className="title-line">Frontend Developer · UI/UX & Visual Design · React / TypeScript / CSS</p>
          <div className="contact-row">
            <a href="mailto:amysola99@gmail.com">amysola99@gmail.com</a>
            <span className="dot">·</span>
            <span>+34 614 347 202</span>
            <span className="dot">·</span>
            <span>Madrid, Spain</span>
            <span className="dot">·</span>
            <a href="https://linkedin.com/in/amysola" target="_blank">
              linkedin.com/in/amysola
            </a>
          </div>
        </header>

        {/* PROFILE BOX (Alejo's Style) */}
        <div className="profile-box">
          <p className="profile-text">
            Creative and detail-oriented **Frontend Developer** with a strong foundation in React, TypeScript, and JavaScript, complemented by a rare combination of technical skill and exceptional artistic ability. Multilingual communicator with a background in Foreign Languages, bringing a unique
            perspective to user experience and international product design. Passionate about crafting beautiful, performant, and accessible web interfaces.
          </p>
        </div>

        <div className="two-col">
          {/* LEFT COLUMN: Main Content */}
          <div className="col-left">
            <section>
              <h2 className="section-title">What I Bring</h2>
              <p className="intro-text">A rare blend of technical frontend skills and serious design talent. My background in languages and interpretation makes me a strong communicator — I understand how to translate ideas into experiences that work for real users.</p>

              <div className="sub-section">
                <h3 className="group-title">Frontend Focus</h3>
                <ul className="bullet-list">
                  <li>
                    Building pixel-perfect, responsive UIs with <strong>React</strong> and <strong>TypeScript</strong>.
                  </li>
                  <li>Writing clean, maintainable component-based code.</li>
                  <li>Collaborating closely with design and product teams.</li>
                </ul>
              </div>

              <div className="sub-section">
                <h3 className="group-title">Design Superpower</h3>
                <ul className="bullet-list">
                  <li>Exceptional illustration and digital drawing ability.</li>
                  <li>Strong sense of visual hierarchy, color, and typography.</li>
                  <li>Can design and implement UI components end-to-end without a dedicated designer.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-title">Education</h2>

              {/* UNITEC - GRADO PRINCIPAL */}
              <div className="edu-entry">
                <div className="edu-institution">UNITEC</div>
                <div className="edu-degree">B.A Foreign Languages and Interpreter</div>
                <div className="edu-meta">2020 – 2022</div>
              </div>

              {/* COURSERA - REACT */}
              <div className="edu-entry">
                <div className="edu-institution">COURSERA</div>
                <div className="edu-degree">React</div>
                <div className="edu-meta">2026</div>
              </div>

              {/* COURSERA - JAVASCRIPT */}
              <div className="edu-entry">
                <div className="edu-institution">COURSERA</div>
                <div className="edu-degree">JavaScript</div>
                <div className="edu-meta">2026</div>
              </div>

              {/* COURSERA - PRODUCT MANAGEMENT */}
              <div className="edu-entry">
                <div className="edu-institution">COURSERA</div>
                <div className="edu-degree">Product Management</div>
                <div className="edu-meta">2025</div>
              </div>

              {/* COURSERA - PYTHON */}
              <div className="edu-entry">
                <div className="edu-institution">University of Michigan</div>
                <div className="edu-degree">Python</div>
                <div className="edu-meta">2026</div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Skills & Side Info */}
          <div className="col-right">
            <section>
              <h2 className="section-title">Technical Skills</h2>

              <h3 className="skill-label">Frontend</h3>
              <div className="tag-container">
                <span className="tag dark">React</span>
                <span className="tag dark">TypeScript</span>
                <span className="tag dark">JavaScript (ES6+)</span>
                <span className="tag">HTML5 / CSS3</span>
                <span className="tag">Responsive Design</span>
              </div>

              <h3 className="skill-label">Design & Creative</h3>
              <div className="tag-container">
                <span className="tag dark">UI/UX Design</span>
                <span className="tag">Illustration</span>
                <span className="tag">Digital Drawing</span>
                <span className="tag">CSS Animations</span>
                <span className="tag">Figma</span>
                <span className="tag">Blender</span>
              </div>

              <h3 className="skill-label">Soft Skills</h3>
              <div className="tag-container">
                <span className="tag">Product Thinking</span>
                <span className="tag">Attention to Detail</span>
                <span className="tag">Fast Learner</span>
                <span className="tag">Creative Problem Solving</span>
              </div>
            </section>

            <section>
              <h2 className="section-title">Languages</h2>
              <div className="lang-list">
                <div className="lang-item">
                  <strong>Spanish</strong> <span>Native</span>
                </div>
                <div className="lang-item">
                  <strong>English</strong> <span>Fluent / C1</span>
                </div>
                <div className="lang-item">
                  <strong>French</strong> <span>Intermediate / B2</span>
                </div>
                <div className="lang-item">
                  <strong>German</strong> <span>Basic / A1</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="section-title">Core Strengths</h2>
              <div className="tag-container">
                <span className="strength-pill">Creative Vision</span>
                <span className="strength-pill">Clean Code</span>
                <span className="strength-pill">Multilingual</span>
                <span className="strength-pill">Team Player</span>
                <span className="strength-pill">Detail-Oriented</span>
              </div>
            </section>

            <section>
              <h2 className="section-title">Featured Projects</h2>
              <div className="tag-container">
                <a href="https://amysola.github.io/core-store/" target="_blank" className="project-link">
                  Core Store (React E-commerce)
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
