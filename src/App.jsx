import "./App.css";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.4 9.4 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

function App() {
  const steps = [
    ["01", "Source", "GitHub", "complete"],
    ["02", "Build", "Jenkins", "complete"],
    ["03", "Test", "Automated suite", "complete"],
    ["04", "Deploy", "Kubernetes", "active"],
  ];

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Pipeline Lab home">
          <span className="brand-mark">PL</span>
          <span>Pipeline Lab</span>
        </a>
        <a
          className="github-link"
          href="https://github.com/essolami"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
          GitHub
        </a>
      </nav>
      {console.log("hekkkki")}

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> BUILD · TEST · DEPLOY
          </div>
          <h1>
            Where every commit
            <br />
            proves the pipeline.
          </h1>
          <p className="intro">
            A hands-on testing ground for modern CI/CD—connecting GitHub
            Actions, Jenkins, Docker, and Kubernetes in one automated workflow.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pipeline">
              Explore the pipeline <ArrowIcon />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon /> View repository
            </a>
          </div>
        </div>

        <div className="pipeline-card" aria-label="Pipeline status overview">
          <div className="card-header">
            <div className="traffic-lights">
              <span />
              <span />
              <span />
            </div>
            <span>workflow.yml</span>
            <span className="live-status">
              <i /> LIVE
            </span>
          </div>
          <div className="pipeline-steps">
            {steps.map(([number, title, detail, status]) => (
              <div className={`pipeline-step ${status}`} key={number}>
                <span className="step-number">{number}</span>
                <span className="step-icon">
                  {status === "complete" ? "✓" : "↗"}
                </span>
                <span className="step-label">
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </span>
                <span className="step-status">
                  {status === "complete" ? "Passed" : "Running"}
                </span>
              </div>
            ))}
          </div>
          <div className="terminal-line">
            <span>$</span> kubectl rollout status deployment/app
            <span className="cursor" />
          </div>
        </div>
      </section>

      <section className="toolchain" id="pipeline">
        <p>POWERED BY THE DEVOPS TOOLCHAIN</p>
        <div className="tools">
          <span>
            <b>⌘</b> GitHub Actions
          </span>
          <span>
            <b>♙</b> Jenkins
          </span>
          <span>
            <b>◆</b> Docker
          </span>
          <span>
            <b>⎈</b> Kubernetes
          </span>
        </div>
      </section>

      <section className="features">
        <article>
          <span className="feature-number">01</span>
          <h2>Automate with confidence</h2>
          <p>
            Every push triggers a repeatable workflow—from code validation to a
            production-ready build.
          </p>
        </article>
        <article>
          <span className="feature-number">02</span>
          <h2>Test every change</h2>
          <p>
            Catch issues early with automated checks that keep the main branch
            stable and deployable.
          </p>
        </article>
        <article>
          <span className="feature-number">03</span>
          <h2>Ship consistently</h2>
          <p>
            Package once with Docker and roll out reliably across Kubernetes
            environments.
          </p>
        </article>
      </section>

      <footer>
        <span>PIPELINE LAB</span>
        <span>CI/CD SANDBOX · 2026</span>
      </footer>
    </main>
  );
}

export default App;
