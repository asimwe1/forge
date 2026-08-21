const appStoreIcon = <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.96-2.53 4.09ZM12.03 7.25C11.88 5.02 13.69 3.18 15.72 3c.28 2.58-2.34 4.52-3.69 4.25Z" /></svg>;
const playIcon = <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.27 2.15A2.2 2.2 0 0 0 3 3.25v17.5c0 .43.1.8.27 1.1L13 12 3.27 2.15Zm11.1 11.2L5.2 22.3c.28.1.6.08.95-.1l10.95-6.23-2.73-2.62Zm3.35-3.2L6.14 3.88l10.02 9.64 1.56-.89c1.15-.66 1.15-1.82 0-2.48ZM5.2 1.7l9.17 8.96 2.73-2.63L6.15 1.8c-.35-.2-.67-.2-.95-.1Z" /></svg>;

function StoreButton({ store, icon }: { store: 'App Store' | 'Google Play'; icon: React.ReactNode }) {
  return <a className="store-button" href="#" aria-label={`${store === 'App Store' ? 'Download Forge on' : 'Get Forge on'} ${store}`}>
    {icon}<span><small>{store === 'App Store' ? 'Download on the' : 'Get it on'}</small><strong>{store}</strong></span>
  </a>;
}

function PhonePreview() {
  return <div className="phone-stage" aria-label="Forge progress screen preview">
    <div className="phone"><div className="notch" /><div className="phone-eyebrow">YOUR PROGRESS</div><h2>Keep showing up.</h2>
      <div className="metric"><div className="metric-top"><span>Training volume</span><span>30 days</span></div><div className="metric-value">18,420 <span>+8.4%</span></div><div className="chart"><i /><i /><i /><i /><i /><i /></div></div>
      <div className="metric"><div className="metric-top"><span>Consistency</span><span>April</span></div><div className="metric-value">3 / 4 <span>sessions</span></div></div>
      <div className="metric"><div className="metric-top"><span>Next up</span><span>Today</span></div><div className="metric-value small-value">Upper body</div></div>
    </div>
  </div>;
}

export default function Home() {
  return <>
    <header className="wrap topbar"><a className="brand" href="#top" aria-label="Forge home"><span className="brand-mark">F</span><span>Forge</span></a><span className="quiet-label">Train with intent</span></header>
    <main id="top">
      <section className="wrap hero"><div><div className="kicker">Your training, made personal</div><h1>Build strength that stays with you.</h1><p className="hero-copy">Forge turns each session into a clearer next step. Log the work, see the pattern, and train with a plan that adapts as you do.</p><div className="downloads" aria-label="Download Forge"><StoreButton store="App Store" icon={appStoreIcon} /><StoreButton store="Google Play" icon={playIcon} /></div></div><PhonePreview /></section>
      <section className="section"><div className="wrap"><div className="section-heading"><div className="kicker">More than a workout log</div><h2>A system for the work between sessions.</h2><p>Forge keeps the useful details close, so you can spend less energy guessing and more energy training.</p></div><div className="grid"><article className="card"><div className="card-index">01</div><h3>Train with a plan</h3><p>Workouts built around your goals, schedule, equipment, and the time you actually have.</p></article><article className="card"><div className="card-index">02</div><h3>See what is changing</h3><p>Volume, strength, consistency, and personal records calculated from your real sessions.</p></article><article className="card"><div className="card-index">03</div><h3>Adapt with confidence</h3><p>Clear next steps based on how the last sessions went—not generic advice in a vacuum.</p></article></div></div></section>
      <section className="section"><div className="wrap statement"><div><div className="kicker">The Forge approach</div><h2>Small decisions. Better training.</h2></div><p className="statement-copy">Your starting point is only the beginning. Forge remembers what works, learns where you need room, and keeps the next session <em>grounded in your history.</em></p></div></section>
      <section className="wrap final"><h2>Start building your next strong session.</h2><p>Forge is coming soon on iOS and Android.</p><div className="downloads centered"><StoreButton store="App Store" icon={appStoreIcon} /><StoreButton store="Google Play" icon={playIcon} /></div></section>
    </main>
    <footer className="wrap footer"><span>© 2026 ApheZis Tech. Forge.</span><span>Built for the long game.</span></footer>
  </>;
}
