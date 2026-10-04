import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Clock3, Mail, MapPin, Menu, Phone, Truck, X } from "lucide-react";
import { fleetData, images, industries, logoUrl, nav, reasons, rkGroupLogoUrl, services, stats } from "@/data/site";

function BrandLogos({ className = "" }: { className?: string }) {
  return (
    <div className={`brand-logos ${className}`.trim()}>
      <img className="brand-logo-raj" src={logoUrl} alt="Raj Houlage Pvt. Ltd." />
      <img className="brand-logo-rk" src={rkGroupLogoUrl} alt="RK Group" />
    </div>
  );
}

const MotionSection = motion.section;

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionTitle({ eyebrow, children, light = false }: { eyebrow: string; children: React.ReactNode; light?: boolean }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2 className={light ? "text-inverse" : ""}>{children}</h2></div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <>
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <a href="#home" className="brand" aria-label="Raj Houlage home — by RK Group">
        <BrandLogos />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">{nav.map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>)}</nav>
      <a href="#quote" className="nav-cta">Get a quote <ArrowRight size={16} /></a>
      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
    </header>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: .35 }}>
      <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button><span className="eyebrow">Navigate</span>
      <nav>{nav.map((item, i) => <motion.a initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .05 * i }} key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)}>{item}<ArrowRight /></motion.a>)}</nav>
      <a className="nav-cta" href="#quote" onClick={() => setOpen(false)}>Get a quote <ArrowRight /></a>
    </motion.div>}</AnimatePresence>
  </>;
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, .3], [0, 100]);
  return <section id="home" className="hero">
    <motion.img
      style={{ y }}
      className="hero-media"
      src={images.hero}
      alt="Tractor-trailer hauling cargo on an Indian highway"
      fetchPriority="high"
      decoding="async"
    />
    <div className="hero-shade" /><div className="hero-grid" />
    <div className="hero-content">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className="hero-kicker"><span>Ahmedabad · Gujarat</span><span>Road transportation</span></motion.div>
      <motion.h1 initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .12 }}>Moving India.<br /><em>Powering business.</em></motion.h1>
      <div className="hero-bottom"><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>Reliable road transportation and logistics solutions built around dependability, efficiency and long-term business relationships.</motion.p>
      <div className="hero-actions"><a className="button button-primary" href="#quote">Get a quote <ArrowRight /></a><a className="button button-ghost" href="#services">Explore our services <ArrowDown /></a></div></div>
    </div>
    <div className="route-bar"><span>Origin</span><div className="route-track"><Truck size={22} /></div><span>Destination</span></div>
  </section>;
}

function IntroAbout() {
  return <><MotionSection className="intro section-pad" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <Reveal><span className="eyebrow">Built on dependable movement</span><h2>Built to move<br />business <em>forward.</em></h2></Reveal>
    <Reveal className="intro-copy"><span className="big-index">01</span><p>Raj Houlage Pvt. Ltd. is focused on dependable road transportation and logistics solutions designed to help businesses move goods efficiently and reliably — from bulk construction materials to general cargo, across Gujarat and beyond.</p></Reveal>
  </MotionSection>
  <section id="about" className="about section-pad"><div className="about-image"><img src={images.road} alt="Dump truck delivering bulk gravel and materials to a construction site" /><span>Movement / Reliability / Scale</span></div>
    <Reveal className="about-copy"><SectionTitle eyebrow="About Raj Houlage">More than transportation.<br /><em>A commitment to movement.</em></SectionTitle><p>Raj Houlage Pvt. Ltd. is being developed with a long-term vision for dependable road transportation, operational discipline and strong customer relationships. Since starting operations, the company has focused on building a lean, reliable fleet and earning the trust of every client it serves.</p><a className="text-link" href="#vision">Our vision <ArrowRight /></a></Reveal>
  </section></>;
}

function Services() {
  return <section id="services" className="services section-pad"><Reveal><SectionTitle eyebrow="What we move">Our transportation services</SectionTitle><p className="section-lead">Construction-material haulage built around reliability, timing and scale.</p></Reveal>
    <div className="service-list">{services.map(([num, title, copy]) => <Reveal key={num} className="service-row"><span>{num}</span><h3>{title}</h3><p>{copy}</p><ArrowRight /></Reveal>)}</div>
  </section>;
}

function Fleet() {
  return <section id="fleet" className="fleet section-pad dark-section"><Reveal><SectionTitle eyebrow="Built for the road" light>The fleet behind<br /><em>the journey.</em></SectionTitle></Reveal>
    <div className="fleet-grid">{fleetData.map((item, i) => <Reveal className="fleet-card" key={item.name}><img src={item.image} alt={`${item.name} operated by Raj Houlage`} /><div className="fleet-overlay"><span>0{i + 1}</span><strong>{item.count}</strong><h3>{item.name}</h3></div></Reveal>)}</div>
  </section>;
}

function Journey() {
  return <section className="journey section-pad"><Reveal><SectionTitle eyebrow="The transportation journey">From origin to destination.</SectionTitle><p className="section-lead">Transportation is not simply about moving from one point to another. It is about keeping business moving.</p></Reveal>
    <Reveal className="journey-map"><div className="journey-line"><motion.div className="moving-truck" initial={{ left: "3%" }} whileInView={{ left: "87%" }} viewport={{ once: true }} transition={{ duration: 3, ease: "easeInOut" }}><Truck /></motion.div></div>{["Origin", "Transit", "Transit", "Destination"].map((x, i) => <div className="journey-stop" key={`${x}-${i}`}><i /><span>0{i + 1}</span><strong>{x}</strong></div>)}</Reveal>
  </section>;
}

function Industries() {
  return <section id="industries" className="industries section-pad"><Reveal><SectionTitle eyebrow="Sectors in motion">Industries we serve</SectionTitle></Reveal><div className="industry-layout"><div className="industry-image"><img src={images.industries} alt="Gravel and aggregate being loaded onto a haulage truck for construction delivery" /></div><div className="industry-list">{industries.map((item, i) => <Reveal className="industry-item" key={item}><span>{String(i + 1).padStart(2, "0")}</span><h3>{item}</h3><ArrowRight /></Reveal>)}</div></div></section>;
}

function WhyUs() {
  return <section id="why-us" className="why section-pad dark-section"><Reveal><SectionTitle eyebrow="The Raj standard" light>Why Raj Houlage</SectionTitle></Reveal><div className="reasons">{reasons.map(([title, copy], i) => <Reveal className="reason" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div></section>;
}

function ShowcaseVision() {
  return <><section className="showcase section-pad"><Reveal><SectionTitle eyebrow="On the road">Movement in motion</SectionTitle><p className="section-lead">Transportation is not simply about moving from one point to another. It is about keeping business moving.</p></Reveal><div className="showcase-grid"><Reveal className="media-panel wide"><img src={images.logistics} alt="Truck fleet moving cargo on the road" /><span>Road transport</span></Reveal><Reveal className="media-panel"><img src={images.cargo} alt="Cargo and container logistics operation" /><span>Industrial logistics</span></Reveal></div></section>
  <section id="vision" className="vision section-pad"><Reveal><SectionTitle eyebrow="Company vision">From one journey to<br /><em>a greater vision.</em></SectionTitle><p>Raj Houlage Pvt. Ltd. represents the beginning of a broader entrepreneurial vision under RK Group — building strong businesses with a long-term focus on reliability, growth and scale.</p></Reveal><Reveal className="rk-panel"><img src={rkGroupLogoUrl} alt="RK Group logo" /><div><span className="eyebrow">By RK Group</span><h3>A broader entrepreneurial vision.</h3><p>Raj Houlage Pvt. Ltd. represents the beginning of a broader entrepreneurial vision under RK Group.</p></div></Reveal></section></>;
}

function Stats() { return <section className="stats">{stats.map(([n, label]) => <Reveal className="stat" key={label}><strong>{n}</strong><span>{label}</span></Reveal>)}</section>; }

function QuoteContact() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setStatus("loading"); window.setTimeout(() => setStatus("done"), 600); }
  const fields = [["name","Full Name","text"],["company","Company Name","text"],["phone","Phone Number","tel"],["email","Email","email"],["pickup","Pickup Location","text"],["delivery","Delivery Location","text"],["cargo","Cargo Type","text"],["load","Approximate Load","text"]];
  return <><section className="cta dark-section"><img src={images.fleet} alt="Raj Houlage heavy transport fleet" /><div className="cta-shade"/><Reveal><span className="eyebrow">Start a conversation</span><h2>Let's move your<br /><em>business forward.</em></h2><p>Tell us what you need to move. Let's discuss the right transportation solution for your business.</p><div className="hero-actions"><a className="button button-primary" href="#quote">Request a quote <ArrowRight /></a><a className="button button-ghost" href="#contact">Contact us</a></div></Reveal></section>
  <section id="quote" className="quote section-pad"><Reveal><SectionTitle eyebrow="Request a quote">Tell us what needs moving.</SectionTitle><p className="section-lead">Share your transport requirements and our team can continue the conversation with you directly.</p></Reveal>
    <form onSubmit={submit}>{fields.map(([id,label,type]) => <label key={id}><span>{label}</span><input id={id} name={id} type={type} required /></label>)}<label className="full-field"><span>Message</span><textarea name="message" rows={4} required /></label><div className="form-footer"><p>{status === "done" ? "Your details are ready. Please contact our team by phone or email to submit this request." : "This form prepares your enquiry; it does not send an email yet."}</p><button className="button button-primary" disabled={status === "loading"}>{status === "loading" ? "Preparing…" : "Request a quote"}<ArrowRight /></button></div></form>
  </section>
  <section id="contact" className="contact section-pad"><Reveal><SectionTitle eyebrow="Contact">Let's talk transportation.</SectionTitle></Reveal><div className="contact-grid"><a href="tel:+917698082681"><Phone/><span>Phone</span><strong>+91 76980 82681</strong></a><a href="mailto:contact@rajhoulage.in"><Mail/><span>Email</span><strong>contact@rajhoulage.in</strong></a><div><MapPin/><span>Address</span><strong>Navrangpura, near Stadium Cross Road,<br/>Ahmedabad, Gujarat – 382340</strong></div><div><Clock3/><span>Business hours</span><strong>Open 24/7</strong></div></div></section></>;
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <a href="#home" className="footer-brand" aria-label="Raj Houlage home — by RK Group">
          <BrandLogos className="footer-logos" />
        </a>
        <nav>
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>
              {item}
            </a>
          ))}
          <a href="#quote">Get a Quote</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Raj Houlage Pvt. Ltd.</span>
        <span>By RK Group · Ahmedabad, Gujarat</span>
      </div>
    </footer>
  );
}

export default function RajHoulageSite() { return <main><Navbar/><Hero/><IntroAbout/><Services/><Fleet/><Journey/><Industries/><WhyUs/><ShowcaseVision/><Stats/><QuoteContact/><Footer/></main>; }