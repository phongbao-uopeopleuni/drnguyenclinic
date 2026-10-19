export default function PageHeading({label, title, description}: {label: string; title: string; description?: string}) {
return <section className="page-heading"><div className="container"><span className="eyebrow">{label}</span><h1>{title}</h1>{description && <p>{description}</p>}</div></section>;
}
