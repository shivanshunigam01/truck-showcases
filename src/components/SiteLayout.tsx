import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { nav } from "@/data/site";
import { BrandLogos } from "@/components/BrandLogos";

function navHref(item: string): string {
  const id = item.toLowerCase().replace(" ", "-");
  return `/#${id}`;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-nav site-nav-solid ${scrolled ? "site-nav-scrolled" : ""}`}>
        <Link to="/" className="brand" aria-label="Raj Houlage home — by RK Group">
          <BrandLogos />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item} href={navHref(item)}>
              {item}
            </a>
          ))}
        </nav>
        <a href="/#quote" className="nav-cta">
          Get a quote <ArrowRight size={16} />
        </a>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
          >
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X />
            </button>
            <span className="eyebrow">Navigate</span>
            <nav>
              {nav.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  key={item}
                  href={navHref(item)}
                  onClick={() => setOpen(false)}
                >
                  {item}
                  <ArrowRight />
                </motion.a>
              ))}
            </nav>
            <a className="nav-cta" href="/#quote" onClick={() => setOpen(false)}>
              Get a quote <ArrowRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link to="/" className="footer-brand" aria-label="Raj Houlage home — by RK Group">
          <BrandLogos className="footer-logos" />
        </Link>
        <nav>
          {nav.map((item) => (
            <a key={item} href={navHref(item)}>
              {item}
            </a>
          ))}
          <a href="/#quote">Get a Quote</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Raj Houlage Pvt. Ltd.</span>
        <span>By RK Group · Ahmedabad, Gujarat</span>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
