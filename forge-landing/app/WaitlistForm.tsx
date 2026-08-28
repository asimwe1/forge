'use client';

import { FormEvent, useState } from 'react';

export default function WaitlistForm({ headingId }: { headingId?: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'invalid'>('idle');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!valid) {
      setStatus('invalid');
      return;
    }
    // No backend yet. Validate and thank; do not pretend the address was stored.
    setStatus('ok');
  }

  if (status === 'ok') {
    return (
      <p className="waitlist-thanks" role="status">
        Thanks. We will email you when Forge is on the store.
      </p>
    );
  }

  return (
    <form className="waitlist" onSubmit={onSubmit} aria-labelledby={headingId}>
      <label className="sr-only" htmlFor="waitlist-email">
        Email
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        autoComplete="email"
        inputMode="email"
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status === 'invalid') setStatus('idle');
        }}
        aria-invalid={status === 'invalid'}
        required
      />
      <button type="submit">Join the waitlist</button>
      {status === 'invalid' ? (
        <p className="waitlist-error" role="alert">
          Enter a valid email.
        </p>
      ) : null}
    </form>
  );
}
