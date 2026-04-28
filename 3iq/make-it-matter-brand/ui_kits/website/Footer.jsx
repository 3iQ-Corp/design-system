import { Logo } from './Icons';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--swatch-dark)', color: 'var(--swatch-light)',
      padding: 'var(--sp-5)',
    }}>
      <div style={{
        maxWidth: '96rem', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '1px solid rgb(253 254 250 / 0.15)',
        paddingTop: 'var(--sp-3)',
      }}>
        <Logo width={96} />
        <div style={{ display: 'grid', gap: '4px', textAlign: 'right' }}>
          <span style={{ fontSize: 'var(--fs-text-small)', color: 'var(--swatch-brand)' }}>
            #MakeItMatter
          </span>
          <span style={{ fontSize: '0.75rem', color: 'rgb(253 254 250 / 0.5)' }}>
            &copy; 2026 3iQ Corp. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
