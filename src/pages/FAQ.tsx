import { useState } from 'react';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { FAQList, ContactCTA } from '../sections/Content';
export default function FAQ() { const [query, setQuery] = useState(''); return <><SEO title="Hỏi đáp về phòng khám sản và sức khỏe sinh sản" description="Tìm phòng khám sản gần tôi, phòng khám chuyên khoa sinh sản: xem thông tin về địa chỉ, lịch khám, phạm vi dịch vụ và cách đặt lịch." /><PageHeading label="Giải đáp cùng bạn" title="Những điều bạn muốn biết" /><section className="section container narrow"><label className="search-label" htmlFor="faq-search">Tìm câu hỏi</label><input className="search-input" id="faq-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Nhập chủ đề bạn quan tâm" /><FAQList query={query} /></section><ContactCTA /></>; }
