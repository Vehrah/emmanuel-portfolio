
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowDownRight,
  Mail,
  X,
  Menu,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Financial Markets", href: "#trading" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#background" },
  { label: "Areas of Interest", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  return (
    <main>
      {/* NAVIGATION */}
<header className="site-header">

  {/* LOGO */}
  <a
    href="#home"
    className="logo"
    onClick={() => setMenuOpen(false)}
  >
    EU<span>.</span>
  </a>

  {/* DESKTOP NAVIGATION */}
  <nav className="desktop-nav">
    {navLinks.map((link) => (
      <a href={link.href} key={link.label}>
        {link.label}
      </a>
    ))}
  </nav>

  {/* HEADER CTA */}
  <a href="#contact" className="header-link">
    Let's talk <ArrowUpRight size={16} />
  </a>

  {/* MOBILE MENU BUTTON */}
  <button
    className="mobile-menu"
    type="button"
    aria-label={menuOpen ? "Close menu" : "Open menu"}
    aria-expanded={menuOpen}
    aria-controls="mobile-navigation"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X size={25} /> : <Menu size={25} />}
  </button>

  {/* MOBILE NAVIGATION */}
  <nav
    id="mobile-navigation"
    className={`mobile-nav ${menuOpen ? "active" : ""}`}
  >
    {navLinks.map((link, index) => (
      <a
        href={link.href}
        key={link.label}
        onClick={() => setMenuOpen(false)}
      >
        <span>
          {String(index + 1).padStart(2, "0")}
        </span>

        {link.label}

        <ArrowUpRight size={17} />
      </a>
    ))}

    {/* MOBILE CTA */}
    <a
      href="#contact"
      className="mobile-contact-link"
      onClick={() => setMenuOpen(false)}
    >
      Let's talk <ArrowUpRight size={17} />
    </a>
  </nav>

</header>

     {/* HERO SECTION */}
<section className="hero-section" id="home">
  <div className="hero-grid">

    {/* LEFT — INTRODUCTION */}
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="hero-eyebrow">
        BUSINESS MANAGEMENT GRADUATE · ASPIRING PRODUCT MANAGER
      </span>

      <h1>
        ORJI EMMANUEL
        <br />
        <span>UDEAGHA.</span>
      </h1>

      <p className="hero-description">
        Exploring the intersection of business, strategy, and technology.
        Interested in understanding complex problems and turning ideas
        into meaningful solutions.
      </p>

      <div className="hero-actions">
        <a href="#work" className="primary-button">
          EXPLORE MY WORK ↗
        </a>

        <a href="#about" className="secondary-button">
          MORE ABOUT ME ↓
        </a>
      </div>

      <span className="hero-location">
        BASED IN NIGERIA · OPEN TO OPPORTUNITIES
      </span>
    </motion.div>

    {/* RIGHT — HERO IMAGE */}
    <motion.div
      className="hero-image-wrap"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/images/hero-image.jpeg"
        alt="Orji Emmanuel Udeagha"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="hero-image"
      />

      <span className="hero-image-caption">
        ORJI EMMANUEL UDEAGHA
      </span>
    </motion.div>

  </div>
</section>


{/* ABOUT SECTION */}
<section className="about-section" id="about">

  <div className="about-topline">
    <span>01 — ABOUT ME</span>
    <span>GET TO KNOW ME</span>
  </div>

  <div className="about-layout">

    {/* LEFT — ABOUT CONTENT */}
    <div className="about-main">

      <motion.h2
        className="about-statement"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        I am a business-minded individual with an interest in
        <em> understanding people, </em>
        solving problems, and exploring how ideas become meaningful solutions.
      </motion.h2>

      <div className="about-divider"></div>

      <div className="about-columns">

        {/* PERSONAL ABOUT */}
        <motion.div
          className="about-text-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-subtitle">01 / THE PERSON</span>

          <h3>A little about me.</h3>

          <p>
            I am Orji Emmanuel Udeagha. I enjoy exploring ideas,
            understanding how things work, and looking at everyday
            challenges from different perspectives. I believe that
            curiosity and a willingness to learn are important
            foundations for personal and professional growth.
          </p>

          <p>
            I am drawn to opportunities that challenge me to think,
            learn, collaborate, and develop new perspectives. I value
            thoughtful communication, continuous improvement, and
            the process of turning knowledge into practical experience.
          </p>

          <p>
            Beyond my professional interests, I am someone who
            appreciates growth, meaningful conversations, and the
            opportunity to make a positive contribution wherever I am.
          </p>
        </motion.div>

        
{/* PROFESSIONAL ABOUT */}
<motion.div
  className="about-text-column"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.15 }}
>
  <span className="about-subtitle">02 / THE PROFESSIONAL</span>

  <h3>Business, technology & financial markets.</h3>

  <p>
    I hold a B.Sc. in Business Management from Abia State
    University, where I developed an academic foundation
    in business administration, organisational operations,
    strategic decision-making, and resource management.
  </p>

  <p>
    My interests extend across Product Management, Business
    Strategy, Business Analysis, Data Analytics, and Financial
    Markets. I am interested in understanding how businesses
    operate, identifying opportunities, interpreting information,
    and making informed decisions.
  </p>

  <p>
    Alongside my business interests, I have practical experience
    analysing and trading financial instruments, including Forex
    currency pairs, Gold (XAUUSD), Bitcoin (BTCUSD), and market
    indices such as US30 and NAS100.
  </p>

  <p>
    Beyond market analysis, I place importance on trading
    psychology and risk management, including position sizing,
    stop-loss placement, risk-to-reward ratios, and disciplined
    decision-making.
  </p>

  <p>
    I explore these interests alongside independent technology
    projects such as PawTrust Nigeria, a marketplace concept
    that has allowed me to engage with product conceptualisation,
    user requirements, and feature planning.
  </p>

  <p>
    My goal is to keep developing across business, technology,
    and financial analysis while contributing meaningfully to
    projects and opportunities that challenge me to think,
    build, and grow.
  </p>
</motion.div>

      </div> {/* END ABOUT COLUMNS */}

     <a href="#contact" className="about-connect">
  LET'S CONNECT <span>↗</span>
</a>

</div> {/* END ABOUT MAIN */}

{/* RIGHT — PORTRAIT */}
<motion.div
      className="about-portrait"
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/images/about.jpeg"
        alt="Orji Emmanuel Udeagha"
        fill
        sizes="(max-width: 768px) 100vw, 38vw"
        className="about-portrait-image"
      />

      <div className="portrait-caption">
        <span>ORJI EMMANUEL UDEAGHA</span>
        <span>BUSINESS · STRATEGY · TECHNOLOGY</span>
      </div>
    </motion.div>

  </div>
</section>  

{/* PAWTRUST PROJECT SECTION */}
<section className="projects-section" id="work">

  <div className="projects-topline">
    <span>02 — SELECTED WORK</span>
    <span>PROJECT / 01</span>
  </div>

  <div className="project-feature">

    <motion.div
      className="project-intro"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="project-category">
        ENTREPRENEURSHIP · PRODUCT DEVELOPMENT
      </span>

      <h2>
        PawTrust
        <em> Nigeria.</em>
      </h2>

      <p className="project-description">
        A technology-driven pet marketplace concept designed
        to connect pet buyers, sellers, veterinarians and
        delivery partners through one organised platform.
      </p>

      <div className="project-meta">
        <div>
          <span>ROLE</span>
          <p>Founder & Independent Project Lead</p>
        </div>

        <div>
          <span>YEAR</span>
          <p>2026 — Present</p>
        </div>

        <div>
          <span>STATUS</span>
          <p>Ongoing Development</p>
        </div>
      </div>

      <div className="project-stack">
        {["React", "JavaScript", "Vite", "Node.js",
          "Express.js", "PostgreSQL", "Prisma"].map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="project-cover"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/images/paw hero.jpeg"
        alt="PawTrust Nigeria homepage"
        fill
        className="project-cover-image"
        sizes="(max-width: 768px) 100vw, 55vw"
      />

      <span className="project-image-label">
        PAWTRUST NIGERIA — HOMEPAGE
      </span>
    </motion.div>

  </div>

  {/* PROJECT GALLERY */}
  <div className="project-gallery-heading">
    <span>INSIDE THE PRODUCT</span>
    <p>A look at the platform and its developing features.</p>
  </div>

  <div className="project-gallery">

    <motion.div
      className="gallery-item gallery-large"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="gallery-image">
        <Image
          src="/images/paw price.jpeg"
          alt="PawTrust pet marketplace and discovery interface"
          fill
          sizes="(max-width: 768px) 100vw, 65vw"
        />
      </div>
      <div className="gallery-caption">
        <span>01 / MARKETPLACE DISCOVERY</span>
        <p>Browse pets with search and filtering options.</p>
      </div>
    </motion.div>

    <motion.div
      className="gallery-item"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="gallery-image">
        <Image
          src="/images/paw listing.jpeg"
          alt="PawTrust seller pet listing form"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <div className="gallery-caption">
        <span>02 / SELLER EXPERIENCE</span>
        <p>Structured pet listing and information submission.</p>
      </div>
    </motion.div>

    <motion.div
      className="gallery-item gallery-wide"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="gallery-image">
        <Image
          src="/images/paw delivery.jpeg"
          alt="PawTrust proposed pet delivery experience"
          fill
          sizes="(max-width: 768px) 100vw, 90vw"
        />
      </div>
      <div className="gallery-caption">
        <span>03 / DELIVERY EXPERIENCE</span>
        <p>A product concept centred on animal welfare and safer transportation.</p>
      </div>
    </motion.div>

  </div>

  {/* PROJECT CONTRIBUTION */}
  <div className="project-outcome">

    <div className="outcome-heading">
      <span>MY CONTRIBUTION</span>
      <h3>From business idea to a working application.</h3>
    </div>

    <div className="outcome-content">
      <p>
        I initiated PawTrust to address challenges in Nigeria's
        pet marketplace. My involvement spans product concept
        development, feature planning, user experience decisions,
        frontend and backend implementation, testing and
        technical troubleshooting.
      </p>

      <div className="outcome-points">
        <span>01 — Product concept & planning</span>
        <span>02 — Marketplace feature development</span>
        <span>03 — Frontend & backend integration</span>
        <span>04 — Testing & problem-solving</span>
      </div>
    </div>

  </div>

  <div className="project-footer-note">
    <span>PAWTRUST NIGERIA</span>
    <span>AN ONGOING PRODUCT DEVELOPMENT PROJECT · 2026</span>
  </div>

</section>



{/* FINANCIAL MARKETS SECTION */}
<section className="trading-section" id="trading">

  <div className="about-topline">
    <span>03 — FINANCIAL MARKETS</span>
    <span>MARKET ANALYSIS & STRATEGY</span>
  </div>

  <div className="trading-intro">
    <span className="about-subtitle">ANOTHER AREA OF INTEREST</span>

    <h2>
      Understanding the markets.
      <em> Reading the price.</em>
    </h2>

    <p>
      My involvement in financial markets combines technical
      analysis, trading methodologies, strategy development,
      and risk management. I continuously study market behaviour
      and refine my approach through chart analysis and research.
    </p>
  </div>

  {/* TRADING ANALYSIS IMAGE */}
<motion.div
  className="trading-image"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  <Image
    src="/images/trading.jpeg"
    alt="Cryptocurrency chart analysis by Orji Emmanuel Udeagha"
    fill
    sizes="(max-width: 768px) 100vw, 90vw"
    className="trading-image-content"
  />

  <span className="trading-image-caption">
    CRYPTOCURRENCY MARKET ANALYSIS
  </span>
</motion.div>

  <div className="trading-grid">

    <div className="trading-card">
      <span>01</span>
      <h3>Financial Markets</h3>
      <p>
        Forex, Gold (XAUUSD), Bitcoin (BTCUSD), US30, and NAS100.
      </p>
    </div>

    <div className="trading-card">
      <span>02</span>
      <h3>Technical Analysis</h3>
      <p>
        Price Action, candlestick formations, market structure,
        trends, breakouts, reversals, and support and resistance.
      </p>
    </div>

    <div className="trading-card">
      <span>03</span>
      <h3>Trading Methodologies</h3>
      <p>
        Smart Money Concepts (SMC), ICT methodology, liquidity
        sweeps, order blocks, fair value gaps, and displacement.
      </p>
    </div>

    <div className="trading-card">
      <span>04</span>
      <h3>Strategy Development</h3>
      <p>
        Entry conditions, stop-loss placement, take-profit
        targets, and risk-to-reward analysis.
      </p>
    </div>

    <div className="trading-card">
      <span>05</span>
      <h3>Trading Technology</h3>
      <p>
        TradingView, chart analysis, Pine Script, custom
        indicators, and visual trading alerts.
      </p>
    </div>

    <div className="trading-card">
      <span>06</span>
      <h3>Risk & Psychology</h3>
      <p>
        Position sizing, daily loss limits, emotional discipline,
        patience, and risk management.
      </p>
    </div>

  </div>
</section>


      {/* SKILLS */}
      <section className="skills-section section-wrap">
        <span className="section-label">
          04 — SKILLS & CAPABILITIES
        </span>

        <h2>
          Building my <em>toolkit.</em>
        </h2>

        <div className="skills-grid">
          {[
            "Business Management",
            "Product Thinking",
            "Business Problem-Solving",
            "Strategic Thinking",
            "Project Planning",
            "Requirements Planning",
            "Analytical Thinking",
            "Communication",
          ].map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>0{index + 1}</span>
              <p>{skill}</p>
              <ArrowUpRight size={16} />
            </div>
          ))}
        </div>

        <p className="disclaimer">
          Skills reflect his stated academic background
          and developing professional capabilities.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="education-section" id="background">
        <div className="section-wrap">
          <span className="section-label">
            05 — EDUCATIONAL BACKGROUND
          </span>

          <h2>
            Where my foundation
            <br />
            <em>began.</em>
          </h2>

          <div className="education-card">
            <span>2025</span>

            <div>
              <h3>Abia State University</h3>
              <p>
                Bachelor of Science (BSc)
                <br />
                Business Management
              </p>
            </div>

            <strong>
              SECOND CLASS HONOURS
              <br />
              UPPER DIVISION
            </strong>
          </div>
        </div>
      </section>

   {/* AREAS OF INTEREST */}
      <section className="interest-section section-wrap">
        <span className="section-label">
          06 — AREAS OF INTEREST
        </span>

        <div className="interest-list">
          <p>Product <em>Management</em></p>
          <p>Business <em>Strategy</em></p>
          <p>Business <em>Analysis</em></p>
          <p>Data <em>Analytics</em></p>
          <p>Technology <em>& Innovation</em></p>
          <p>Frontend <em>Development</em></p>
          <p>Financial <em>Markets</em></p>
        </div>
      </section>

{/* CONTACT */}
<footer className="contact-section" id="contact">
  <div className="section-wrap">

    <span className="section-label">
      07 — LET'S CONNECT
    </span>

    <h2>
      Let's make
      <br />
      <em>something matter.</em>
    </h2>

    <p className="contact-intro">
      Have a project, opportunity, or just want to connect?
      Send Emmanuel a message.
    </p>

    <div className="contact-layout">

      {/* CONTACT FORM */}
      <form
        className="contact-form"
        onSubmit={async (e) => {
          e.preventDefault();

          const form = e.currentTarget;
          const formData = new FormData(form);

          setContactStatus("sending");

          try {
            const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const response = await fetch(`${API_URL}/api/contact`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                subject: formData.get("subject"),
                message: formData.get("message"),
                website: formData.get("website"),
              }),
            });

            const result = await response.json();

            if (!response.ok) {
              throw new Error(result.error || "Message could not be sent.");
            }

            setContactStatus("success");
            form.reset();

          } catch (error) {
            setContactStatus("error");
          }
        }}
      >

        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Leave this empty</label>
          <input
            id="contact-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="contact-form-row">

          <div className="form-group">
            <label htmlFor="contact-name">YOUR NAME</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              maxLength={100}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">EMAIL ADDRESS</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              maxLength={254}
            />
          </div>

        </div>

        <div className="form-group">
          <label htmlFor="contact-subject">SUBJECT</label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            placeholder="What's this about?"
            required
            maxLength={150}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">YOUR MESSAGE</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Write your message here..."
            required
            maxLength={5000}
          />
        </div>

        <button
          type="submit"
          className="contact-submit"
          disabled={contactStatus === "sending"}
        >
          {contactStatus === "sending"
            ? "SENDING..."
            : "SEND MESSAGE"}

          <ArrowUpRight size={19} />
        </button>

        {contactStatus === "success" && (
          <p className="form-feedback success" role="status">
            Your message has been sent successfully.
          </p>
        )}

        {contactStatus === "error" && (
          <p className="form-feedback error" role="alert">
            Something went wrong. Please try again.
          </p>
        )}

      </form>

      {/* DIRECT CONTACT DETAILS */}
      <div className="contact-details">

        <span className="contact-details-label">
          PREFER EMAIL?
        </span>

        <a
          className="contact-email"
          href="mailto:Orjiemmanuel9929@yahoo.com"
        >
          Orjiemmanuel9929@yahoo.com
          <ArrowUpRight size={19} />
        </a>

        <span className="contact-details-label">
          CONNECT WITH EMMANUEL
        </span>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/emmanuel-orji-b91171405"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Code2 size={15} />
          </a>
        </div>

      </div>

    </div>

    <div className="footer-bottom">

      <span>
        © 2026 ORJI EMMANUEL UDEAGHA
      </span>

      <a href="#home">BACK TO TOP ↑</a>

    </div>

  </div>
</footer>
    </main>
  );
}