const VALUES = [
  { num: '01', name: 'Lead with Kyodo', desc: 'We before me. Collaboration makes it matter.' },
  { num: '02', name: 'Stay Humble', desc: 'Curiosity, learning, and listening make our work matter.' },
  { num: '03', name: 'Elevate Others', desc: 'Recognition and empowerment show others matter.' },
  { num: '04', name: 'Innovate & Adapt', desc: 'Our ability to lead makes us matter.' },
  { num: '05', name: 'Offer Radical Candour', desc: 'Honest feedback makes growth matter.' },
  { num: '06', name: 'Follow Through', desc: 'Delivering on promises proves it matters.' },
];

export default function Values() {
  return (
    <section style={{
      background: 'var(--swatch-light)', color: 'var(--swatch-dark)',
      padding: 'var(--sp-10) var(--sp-5)',
    }}>
      <div style={{ maxWidth: '96rem', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 600,
          fontSize: 'var(--fs-text-small)', textTransform: 'uppercase',
          letterSpacing: 'var(--ls-wide)', color: 'var(--swatch-yellow)',
          marginBottom: 'var(--sp-1)',
        }}>
          Our Values
        </p>
        <div style={{ height: '2px', width: '4rem', background: 'var(--swatch-dark)', marginBottom: 'var(--sp-3)' }} />
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 300,
          fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: '1.05em',
          letterSpacing: 'var(--ls-heading)', maxWidth: '18ch',
          marginBottom: 'var(--sp-8)',
        }}>
          Six values that ground everything we do
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--sp-6)', borderTop: '1px solid rgb(8 14 35 / 0.25)',
          paddingTop: 'var(--sp-4)',
        }}>
          {VALUES.map(v => (
            <div key={v.num}>
              <div style={{
                fontFamily: 'var(--font-heading)', fontWeight: 300,
                fontSize: 'var(--fs-h4)', letterSpacing: 'var(--ls-heading)',
              }}>{v.num}</div>
              <div style={{ height: '2px', width: '2rem', background: 'var(--swatch-yellow)', margin: '8px 0' }} />
              <div style={{ fontWeight: 600, fontSize: 'var(--fs-text-main)', marginBottom: '4px' }}>{v.name}</div>
              <div style={{ fontSize: 'var(--fs-text-small)', color: 'var(--swatch-dark-secondary)', lineHeight: 'var(--lh-relaxed)' }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
