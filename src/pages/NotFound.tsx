import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
export default function NotFound() { return <><SEO title="Không tìm thấy trang" description="Trang bạn tìm kiếm không tồn tại." noindex /><PageHeading label="404" title="Trang này chưa có ở đây" description="Bạn có thể trở về trang chủ để tiếp tục tìm hiểu về phòng khám." /><section className="section container"><Link to="/" className="button">Về trang chủ →</Link></section></>; }
