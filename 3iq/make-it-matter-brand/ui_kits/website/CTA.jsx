import { ArrowUpRight } from './Icons';

export default function CTA() {
  return (
    <section style={{
      background: 'var(--gradient-forge)', color: 'var(--swatch-light)',
      padding: 'var(--sp-10) var(--sp-5)',
    }}>
      <div style={{ maxWidth: '96rem', margin: '0 auto', textAlign: 'center', display: 'grid', gap: 'var(--sp-3)', justifyItems: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 600,
          fontSize: 'var(--fs-text-small)', textTransform: 'uppercase',
          letterSpacing: 'var(--ls-wide)', color: 'var(--swatch-yellow)',
        }}>
          #MakeItMatter
        </p>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 300,
          fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: '1em',
          letterSpacing: 'var(--ls-heading)', maxWidth: '16ch',
        }}>
          Ready to make it matter?
        </h2>
        <p style={{
          fontSize: 'var(--fs-text-large)', lineHeight: 'var(--lh-relaxed)',
          color: 'var(--swatch-brand)', maxWidth: '48ch',
        }}>
          We don't wait for the future, we build it. Join a team where purpose drives every decision.
        </p>
        <a href="#" style={{
          background: 'var(--gradient-button-dark)', color: 'var(--swatch-dark)',
          fontWeight: 600, fontSize: 'var(--fs-text-main)',
          padding: '14px 28px', borderRadius: 'var(--radius-round)',
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
          marginTop: 'var(--sp-2)',
        }}>
          View open roles <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
