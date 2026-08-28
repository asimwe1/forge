import WaitlistForm from './WaitlistForm';

function PhonePreview() {
  return (
    <div className="phone-stage" aria-label="Forge progress screen preview">
      <div className="phone">
        <div className="notch" />
        <div className="phone-eyebrow">YOUR PROGRESS</div>
        <h2>Keep showing up.</h2>
        <div className="metric">
          <div className="metric-top">
            <span>Training volume</span>
            <span>30 days</span>
          </div>
          <div className="metric-value">
            18,420 <span>+8.4%</span>
          </div>
          <div className="chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="metric">
          <div className="metric-top">
            <span>Consistency</span>
            <span>April</span>
          </div>
          <div className="metric-value">
            3 / 4 <span>sessions</span>
          </div>
        </div>
        <div className="metric">
          <div className="metric-top">
            <span>Next up</span>
            <span>Today</span>
          </div>
          <div className="metric-value small-value">Upper body</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="wrap topbar">
        <a className="brand" href="#top" aria-label="Forge home">
          <span className="brand-mark">F</span>
          <span>Forge</span>
        </a>
        <a className="top-link" href="#waitlist">
          Notify me
        </a>
      </header>
      <main id="top">
        <section className="wrap hero">
          <div>
            <div className="kicker">Train with intent</div>
            <h1>Know what to lift next.</h1>
            <p className="hero-copy">
              Workouts around your goals, schedule, and equipment. Progress from real sessions.
              The next one adapts from what you actually did.
            </p>
            <div id="waitlist">
              <WaitlistForm />
            </div>
            <p className="helper">Coming soon on iOS and Android. No spam.</p>
          </div>
          <PhonePreview />
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-heading">
              <div className="kicker">How it works</div>
              <h2>Three steps. Then you train.</h2>
            </div>
            <ol className="steps">
              <li>
                <span>01</span>
                <h3>Tell Forge your constraints</h3>
                <p>Goals, days you can train, and the equipment you actually have.</p>
              </li>
              <li>
                <span>02</span>
                <h3>Train and log the session</h3>
                <p>The work is the data. Fast logging, even if you leave mid-set.</p>
              </li>
              <li>
                <span>03</span>
                <h3>Next session comes from history</h3>
                <p>Volume, strength, consistency, and PRs. Not a static plan.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-heading">
              <div className="kicker">More than a workout log</div>
              <h2>A system for the work between sessions.</h2>
            </div>
            <div className="grid">
              <article className="card">
                <div className="card-index">01</div>
                <h3>Train with a plan</h3>
                <p>Workouts built around your goals, schedule, equipment, and the time you actually have.</p>
              </article>
              <article className="card">
                <div className="card-index">02</div>
                <h3>See what is changing</h3>
                <p>Volume, strength, consistency, and personal records calculated from your real sessions.</p>
              </article>
              <article className="card">
                <div className="card-index">03</div>
                <h3>Adapt with confidence</h3>
                <p>Clear next steps based on how the last sessions went, not generic advice in a vacuum.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap statement">
            <div>
              <div className="kicker">The Forge approach</div>
              <h2>Small decisions. Better training.</h2>
            </div>
            <p className="statement-copy">
              Your starting point is only the beginning. Forge remembers what works, learns where you need room, and keeps the next session <em>grounded in your history.</em>
            </p>
          </div>
        </section>

        <section className="wrap final" id="notify">
          <h2>Start building your next strong session.</h2>
          <p>Forge is coming soon on iOS and Android. We will email you when it is on the store.</p>
          <WaitlistForm />
        </section>
      </main>
      <footer className="wrap footer">
        <span>© 2026 ApheZis Tech. Forge.</span>
        <nav className="footer-links" aria-label="Legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </footer>
    </>
  );
}
