import { Link } from 'react-router-dom';
import { asset, clinic } from '../data/clinic';

// The logo artwork has no specialty line, so it is set as text aligned with the wordmark column.
export default function BrandLockup({ className, lazy = false }: { className: string; lazy?: boolean }) {
  return <Link to="/" className={className}>
    <span className="brand-lockup">
      <img src={asset('assets/brand/logo-horizontal.svg')} alt={clinic.brandName} width="1056" height="240" loading={lazy ? 'lazy' : undefined} />
      <span className="brand-specialty">{clinic.specialty}</span>
    </span>
    <span className="sr-only"> — Trang chủ</span>
  </Link>;
}
