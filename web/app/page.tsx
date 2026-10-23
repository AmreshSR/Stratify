import Motion from "./Motion";
import ServiceFinder from "./ServiceFinder";
import {
  CREDITS, EMAIL, LINKEDIN, MAILTO, PHONE_DISPLAY, PHONE_TEL, PHOTOS, STANDARDS, STEPS,
} from "./content";

const d = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Page() {
  const [emailUser, emailDomain] = EMAIL.split("@");

  return (
    <>
      <main>
        {/* Hero: the name split to opposite corners, two screens pass between them */}
        <section className="hero" aria-labelledby="title">
          <div className="hero__pin">
            <h1 id="title" className="hero__name">
              <span className="hero__half hero__half--a">Strat</span>
              <span className="hero__half hero__half--b">ify</span>
            </h1>
          </div>

          <div className="hero__screen hero__screen--one">
            <figure className="hero__photo" data-open>
              <img src={PHOTOS.hero.src} width={PHOTOS.hero.w} height={PHOTOS.hero.h} alt={PHOTOS.hero.alt} fetchPriority="high" />
            </figure>
            <div className="hero__lead">
              <p className="lead" data-load style={{ "--d": "300ms" } as React.CSSProperties}>
                Stratify is a consulting firm in Suriname for strategy, governance, risk and compliance,
                information security, privacy and AI governance.
              </p>
              <a className="button" href={MAILTO} data-load style={{ "--d": "420ms" } as React.CSSProperties}>
                Start a conversation
              </a>
            </div>
            <nav className="hero__nav" aria-label="Sections">
              <a className="link" href="#approach">Approach</a>
              <a className="link" href="#services">Services</a>
              <a className="link" href="#founder">Founder</a>
              <a className="link" href="#contact">Contact</a>
            </nav>
          </div>

          <div className="hero__screen hero__screen--two">
            <figure className="hero__wide shutter" data-reveal>
              <img src={PHOTOS.bridge.src} width={PHOTOS.bridge.w} height={PHOTOS.bridge.h} alt={PHOTOS.bridge.alt} loading="lazy" />
            </figure>
            <div className="hero__tagline">
              <p className="statement" data-reveal style={d(1)}>From complexity to clarity.</p>
              <p className="body" data-reveal style={d(2)}>
                We partner with public and private sector organizations to strengthen governance,
                improve resilience, manage risk and grow sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Intro: right-half statement, lone photo hanging left */}
        <section className="intro" id="about" aria-labelledby="about-title">
          <div className="intro__text">
            <h2 id="about-title" className="heading" data-reveal>About Stratify</h2>
            <p className="statement" data-reveal style={d(1)}>
              Strategic insight, practical implementation, measurable results.
            </p>
            <p className="body" data-reveal style={d(2)}>
              Stratify N.V. specializes in Strategy, Governance, Risk &amp; Compliance (GRC),
              Information Security, Privacy, Artificial Intelligence (AI) Governance and Organizational
              Development. Beyond compliance, we help organizations build a culture of accountability,
              resilience, innovation and continuous improvement, through policy development, internal
              audits, risk assessments, awareness programs and capacity building.
            </p>
          </div>
          <figure className="intro__photo shutter" data-reveal style={d(2)}>
            <img src={PHOTOS.opening.src} width={PHOTOS.opening.w} height={PHOTOS.opening.h} alt={PHOTOS.opening.alt} loading="lazy" />
          </figure>
          <div className="intro__note" data-reveal style={d(3)}>
            <img className="intro__logo" src="/logo.jpg" width={400} height={400} alt="Stratify NV logo: From Complexity to Clarity" loading="lazy" />
            <p>For public and private sector organizations in Suriname and the region.</p>
          </div>
        </section>

        {/* Approach: lines that step across */}
        <section className="approach" id="approach" aria-labelledby="approach-title">
          <h2 id="approach-title" className="heading approach__title" data-reveal>How we work</h2>
          <p className="approach__intro body" data-reveal style={d(1)}>
            Effective governance and responsible innovation are the foundation of long term success.
            We integrate strategy, governance, processes and people.
          </p>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.line} className="step" style={{ "--col": 1 + i * 2 } as React.CSSProperties}>
                <h3 className="step__line" data-reveal>{s.line}</h3>
                <p className="step__text" data-reveal style={d(1)}>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Services: heading full width, list pushed right, live finder left */}
        <section className="services" id="services" aria-labelledby="services-title">
          <h2 id="services-title" className="heading services__title" data-reveal>Nine areas of practice</h2>
          <ServiceFinder>
            <figure className="services__photo shutter" data-reveal>
              <img src={PHOTOS.facade.src} width={PHOTOS.facade.w} height={PHOTOS.facade.h} alt={PHOTOS.facade.alt} loading="lazy" />
            </figure>
          </ServiceFinder>
        </section>

        {/* Standards: the names as one sentence, one lit at a time */}
        <section className="standards" aria-labelledby="standards-title">
          <figure className="standards__photo" data-reveal>
            <img className="drift" src={PHOTOS.lattice.src} width={PHOTOS.lattice.w} height={PHOTOS.lattice.h} alt={PHOTOS.lattice.alt} loading="lazy" />
          </figure>
          <div className="standards__text">
            <h2 id="standards-title" className="heading" data-reveal>International standards</h2>
            <p className="standards__names statement" data-reveal style={d(1)}>
              {STANDARDS.map((s, i) => (
                <span key={s.name}>
                  <span className="standard" data-standard={`${s.name}: ${s.topic}`}>{s.name}</span>
                  {i < STANDARDS.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
            <p className="standards__topic body" data-standard-topic aria-live="off">
              {`${STANDARDS[0].name}: ${STANDARDS[0].topic}`}
            </p>
            <p className="body" data-reveal style={d(2)}>
              We design, implement and continuously improve management systems aligned with these
              standards, from first assessment to certification readiness.
            </p>
          </div>
        </section>

        {/* Founder: side facts, wide paragraph */}
        <section className="founder" id="founder" aria-labelledby="founder-title">
          <dl className="founder__facts" data-reveal>
            <div><dt>Role</dt><dd>Founder &amp; Managing Director</dd></div>
            <div><dt>Company</dt><dd>Stratify N.V.</dd></div>
            <div><dt>Based in</dt><dd>Suriname</dd></div>
          </dl>
          <div className="founder__text">
            <h2 id="founder-title" className="heading" data-reveal style={d(1)}>Dr. Sheetal R. Ganput</h2>
            <p className="lead" data-reveal style={d(2)}>
              I&rsquo;m a strategic advisor, governance professional and organizational development
              specialist. I&rsquo;ve spent my career leading organizations through complex
              transformation and continuous improvement.
            </p>
            <p className="body" data-reveal style={d(3)}>
              I design, implement, certify and continually improve international management systems,
              including ISO 27001, ISO 27701, ISO 42001, ISO 22301, ISO 9001 and ISO 31000. I have
              also led enterprise wide initiatives in cyber resilience, business continuity and supplier
              development, including the implementation of the Bluewave Supplier Development Program.
              I combine strategic thinking with a people centered mindset, because lasting success
              comes when governance, processes, technology and people work in harmony.
            </p>
            <blockquote className="founder__quote statement" data-reveal style={d(4)}>
              &ldquo;Leadership begins with clarity of purpose and direction.&rdquo;
            </blockquote>
          </div>
          <div className="founder__record">
            <h3 className="founder__label" data-reveal>Record</h3>
            <ul className="founder__list" data-reveal style={d(1)}>
              <li>Bluewave Supplier Development Program</li>
              <li>Enterprise cyber resilience</li>
              <li>Business continuity programs</li>
              <li>ISO certification projects</li>
            </ul>
            <ul className="founder__list" data-reveal style={d(2)}>
              <li>Governance, risk &amp; compliance</li>
              <li>Organizational transformation</li>
              <li>Leadership development</li>
              <li><a className="link" href={LINKEDIN}>LinkedIn profile</a></li>
            </ul>
          </div>
        </section>

        {/* Contact: the email as display type on the forest field */}
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title" className="contact__title lead">
            Tell us where your organization wants to go.
          </h2>
          <a className="contact__email" href={MAILTO}>
            <span>{emailUser}@</span>
            <span>{emailDomain}</span>
          </a>
          <div className="contact__corner contact__corner--left">
            <a className="link" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            <span>Suriname</span>
          </div>
          <div className="contact__corner contact__corner--right">
            <a className="button button--light" href={MAILTO}>Start a conversation</a>
          </div>
        </section>
      </main>

      {/* Footer: the name first, ways to reach us under it */}
      <footer className="footer">
        <p className="footer__name" aria-hidden="true">Stratify</p>
        <div className="footer__row">
          <ul className="footer__places">
            <li><a className="link" href={MAILTO}>{EMAIL}</a></li>
            <li><a className="link" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
            <li><a className="link" href={LINKEDIN}>LinkedIn</a></li>
          </ul>
          <ul className="footer__links">
            <li><a className="link" href="#about">About</a></li>
            <li><a className="link" href="#approach">Approach</a></li>
            <li><a className="link" href="#services">Services</a></li>
            <li><a className="link" href="#founder">Founder</a></li>
          </ul>
        </div>
        <div className="footer__legal">
          <p>&copy; Stratify N.V. From Complexity to Clarity. {CREDITS}</p>
          <a className="link" href="#title">Back to top</a>
        </div>
      </footer>
      <Motion />
    </>
  );
}
