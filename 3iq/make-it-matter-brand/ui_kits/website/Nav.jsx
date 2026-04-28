import { Logo, ArrowUpRight } from './Icons';

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 var(--sp-5)', height: '88px',
      background: 'var(--swatch-dark)', color: 'var(--swatch-light)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-4)' }}>
        <Logo width={80} />
        <div style={{ display: 'flex', gap: 'var(--sp-3)', fontSize: 'var(--fs-text-small)', fontWeight: 500 }}>
          <span>Careers</span>
          <span>Values</span>
          <span>Culture</span>
          <span>About</span>
        </div>
      </div>
      <a href="#" style={{
        background: 'var(--gradient-button-dark)', color: 'var(--swatch-dark)',
        fontWeight: 600, fontSize: 'var(--fs-text-small)',
        padding: '9px 16px', borderRadius: 'var(--radius-round)',
        textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
      }}>
        Join our team <ArrowUpRight size={14} />
      </a>
    </nav>
  );
}
