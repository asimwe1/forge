import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Forge',
  description: 'How ApheZis Tech handles information in Forge.',
};

export default function PrivacyPage() {
  return (
    <main className="wrap legal">
      <p className="kicker">
        <a href="/">Forge</a>
      </p>
      <h1>Privacy Policy</h1>
      <p className="legal-meta">ApheZis Tech · Last updated 28 August 2026</p>
      <p>
        Forge is a personalized gym training app from ApheZis Tech. The app is not yet publicly available on the App Store or Google Play. This policy describes how we intend to handle information when you use the Forge website and, once launched, the Forge app.
      </p>
      <h2>What we collect</h2>
      <p>Depending on how you use Forge, we may collect:</p>
      <ul>
        <li>Account details, such as name and email, if you join a waitlist or create an account.</li>
        <li>Training data you log, such as workouts, sets, equipment, schedule, and goals.</li>
        <li>Basic device and usage information needed to run and improve the product, such as app version and crash logs.</li>
      </ul>
      <h2>How we use it</h2>
      <p>We use this information to provide Forge, personalize your training plan, send launch or account email you asked for, and keep the service reliable. We do not sell your personal information.</p>
      <h2>Where it goes</h2>
      <p>Waitlist emails submitted on this site are not stored until a waitlist backend is connected. After launch, training and account data will be stored with our hosting and infrastructure providers, only as needed to operate Forge.</p>
      <h2>Your choices</h2>
      <p>You can ask us to correct or delete personal information we hold, or to stop waitlist email. Once the app ships, you will also be able to delete your account from in-app settings.</p>
      <h2>Contact</h2>
      <p>Questions about this policy: ApheZis Tech, through the contact details on <a href="/">the Forge website</a>.</p>
    </main>
  );
}
