export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-8">
        {eyebrow && (
          <div className="text-xs uppercase tracking-widest text-white/60">{eyebrow}</div>
        )}
        <h2 className="heading"><span>{title}</span></h2>
      </div>
      {children}
    </section>
  )
}
