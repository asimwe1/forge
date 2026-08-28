import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use — Forge',
  description: 'Terms for using the Forge website and app.',
};

export default function TermsPage() {
  return (
    <main className="wrap legal">
      <p className="kicker">
        <a href="/">Forge</a>
      </p>
      <h1>Terms of Use</h1>
      <p className="legal-meta">ApheZis Tech · Last updated 28 August 2026</p>
      <p>
        These terms apply to the Forge website and, once launched, the Forge iOS and Android app. Forge is a product of ApheZis Tech. The app is not yet publicly listed on the App Store or Google Play.
      </p>
      <h2>The service</h2>
      <p>
        Forge provides personalized gym training: plans based on your goals, schedule, and equipment, progress from sessions you log, and next sessions that adapt from that history. Forge is training software, not medical advice. You are responsible for training within your own limits.
      </p>
      <h2>Accounts and waitlist</h2>
      <p>
        If you join the waitlist or create an account, keep your contact details accurate. We may email you about launch availability. You can ask to be removed from the waitlist at any time.
      </p>
      <h2>Acceptable use</h2>
      <p>Do not misuse Forge, attempt to break it, or use it to harm others. We may suspend access if these terms are violated.</p>
      <h2>Availability</h2>
      <p>Forge is provided as-is while it is in development. Features, availability, and pricing may change before and after public launch.</p>
      <h2>Contact</h2>
      <p>Questions about these terms: ApheZis Tech, through the contact details on <a href="/">the Forge website</a>.</p>
    </main>
  );
}
