const services = ["Standing Manicures", "Seated Nail Art", "Pedicure Lounge", "Brows, Lashes & Waxing", "Retail & Aftercare", "Private Events"];

export default function Home() {
  const booking = "#contact";
  return (
    <main>
      <header className="nav">
        <a className="wordmark" href="#top">HAUS OF BOSSY CLAWS<span>NAIL BAR & LOUNGE</span></a>
        <nav><a href="#experience">Experience</a><a href="#services">Services</a><a href="#visit">Visit</a><a className="book" href={booking}>Book Now</a></nav>
      </header>
      <section id="top" className="hero"><div className="wrap"><p className="eyebrow">GLEN BURNIE · MARYLAND</p><h1>Bold nails.<br />Bolder energy.</h1><p className="heroCopy">A considered beauty destination for polished detail, private care, and an appointment experience designed from arrival through rebooking.</p><div className="actions"><a className="button" href={booking}>Book an appointment</a><a className="button ghost" href="#experience">Explore the space</a></div></div></section>
      <section id="experience" className="section intro"><div className="wrap two"><div><p className="eyebrow">THE EXPERIENCE</p><h2>The full appointment, designed with intention.</h2></div><p>Reception, retail, manicure, pedicure, hand-wash, private treatment, and client restroom zones are planned as distinct experiences. Staff-only logistics remain separated behind a controlled back-of-house threshold.</p></div></section>
      <section id="services" className="section charcoal"><div className="wrap"><p className="eyebrow">SERVICE MIX</p><div className="serviceGrid">{services.map((service, index) => <article className="service" key={service}><span>0{index + 1}</span><h3>{service}</h3><p>Owner-approved service menu, duration, pricing, deposits, and policies will publish through the selected booking system.</p></article>)}</div></div></section>
      <section className="section plan"><div className="wrap"><p className="eyebrow">THE SPACE</p><h2>Designed for flow, privacy, and precision.</h2><div className="zones"><div><b>5</b><span>Standing manicure stations</span></div><div><b>3</b><span>Seated manicure tables</span></div><div><b>6</b><span>Pedicure stations</span></div><div><b>1</b><span>Private treatment room</span></div></div><p className="notice">Concept plan only. Final layout, accessibility, HVAC, plumbing, electrical, ventilation, permits, and occupancy require licensed professional and authority review.</p></div></section>
      <section id="visit" className="section contact"><div className="wrap two"><div><p className="eyebrow">VISIT</p><h2>910 Cromwell Park Dr<br />Glen Burnie, MD</h2><p>Proposed BOSSYClaws location. Public address, hours, pricing, and booking access must be owner-approved before launch.</p></div><div id="contact" className="contactCard"><h3>Stay in the loop</h3><p>For appointments, events, and launch updates, contact the BOSSYClaws team through the owner-approved booking and contact channels.</p><a className="button" href="#top">Return to top</a></div></div></section>
      <footer><div className="wrap footer"><div><strong>HAUS OF BOSSY CLAWS</strong><small>Operating brand: BOSSYClaws · Legal entity: BOSSY CLAWS LLC</small></div><small>© {new Date().getFullYear()} BOSSY CLAWS LLC</small></div></footer>
    </main>
  );
}
