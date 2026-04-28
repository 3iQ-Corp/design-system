const FEATURES = [
  { title: 'Purpose-driven culture', desc: 'Every role at 3iQ connects back to a larger mission. Your work here matters.' },
  { title: 'Global collaboration', desc: 'From Toronto to Dubai to Tokyo — we work across borders and time zones.' },
  { title: 'Growth and development', desc: 'Curiosity and learning are how we stay humble and keep innovating.' },
  { title: 'Radical candour', desc: 'Honest feedback, given with care. It\'s how we grow individually and together.' },
];

export default function FeatureGrid() {
  return (
    <section style={{
      background: 'var(--gradient-sky)', color: 'var(--swatch-dark)',
      padding: 'var(--sp-10) var(--sp-5)',
    }}>
      <div style={{ maxWidth: '96rem', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 300,
          fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: '1.05em',
          letterSpacing: 'var(--ls-heading)', maxWidth: '18ch',
          marginBottom: 'var(--sp-8)',
        }}>
          Why people choose 3iQ
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
          {FEATURES.map(f => (
            <article key={f.title} style={{
              background: 'var(--swatch-light)', borderRadius: 'var(--radius-main)',
              padding: 'var(--sp-5)', boxShadow: '0 1px 0 rgba(8,14,35,0.04)',
              display: 'grid', gap: 'var(--sp-2)',
            }}>
              <h3 style={{ fontWeight: 700, fontSize: 'var(--fs-h6)', lineHeight: '1.2em' }}>{f.title}</h3>
              <p style={{ fontSize: 'var(--fs-text-main)', lineHeight: 'var(--lh-relaxed)' }}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
