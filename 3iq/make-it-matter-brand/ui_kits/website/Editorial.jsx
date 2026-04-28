export default function Editorial() {
  return (
    <section style={{
      background: 'var(--gradient-golden)', color: 'var(--swatch-dark)',
      padding: 'var(--sp-10) var(--sp-5)',
    }}>
      <div style={{ maxWidth: '96rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--sp-10)' }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 300,
            fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: '1em',
            letterSpacing: 'var(--ls-heading)', maxWidth: '14ch',
          }}>
            The difference we make together, really matters
          </h2>
        </div>
        <div style={{ display: 'grid', gap: 'var(--sp-4)', paddingTop: 'var(--sp-4)' }}>
          <div style={{ borderTop: '1px solid rgb(8 14 35 / 0.25)', paddingTop: 'var(--sp-2)' }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 300,
              fontSize: 'clamp(2rem, 2.5vw, 2.5rem)', lineHeight: '1.1em',
              letterSpacing: 'var(--ls-heading)', maxWidth: '20ch',
            }}>
              It's not just what we build, it's how we build it together
            </h3>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)',
            fontSize: 'var(--fs-text-main)', lineHeight: 'var(--lh-relaxed)',
          }}>
            <p>#MakeItMatter is a constant reminder that what you do at 3iQ matters. How you work matters. How you treat others matters.</p>
            <p>It complements and reinforces the 3iQ corporate brand. From talent attraction to cultural engagement, it runs through everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
