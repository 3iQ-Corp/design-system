import { ArrowUpRight } from './Icons';

export default function Hero() {
  return (
    <section style={{
      background: 'var(--gradient-forge)', color: 'var(--swatch-light)',
      padding: 'var(--sp-15) var(--sp-5) var(--sp-10)',
      minHeight: '90vh', display: 'grid', alignContent: 'end', gap: 'var(--sp-3)',
    }}>
      <p style={{
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--fs-text-small)',
        textTransform: 'uppercase', letterSpacing: 'var(--ls-wide)',
        color: 'var(--swatch-yellow)',
      }}>
        #MakeItMatter
      </p>
      <div style={{ height: '2px', width: '4rem', background: 'var(--swatch-yellow)' }} />
      <h1 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 300,
        fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: '1em',
        letterSpacing: 'var(--ls-heading)', maxWidth: '14ch',
      }}>
        What you do here matters
      </h1>
      <p style={{
        fontFamily: 'var(--font-body)', fontWeight: 500,
        fontSize: 'var(--fs-text-large)', lineHeight: 'var(--lh-relaxed)',
        color: 'var(--swatch-brand)', maxWidth: '52ch',
      }}>
        If you're driven by purpose, you're already one of us.
      </p>
      <div style={{ display: 'flex', gap: 'var(--sp-2)', marginTop: 'var(--sp-2)' }}>
        <a href="#" style={{
          background: 'var(--gradient-button-dark)', color: 'var(--swatch-dark)',
          fontWeight: 600, fontSize: 'var(--fs-text-main)',
          padding: '12px 24px', borderRadius: 'var(--radius-round)',
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
        }}>
          Explore careers <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
