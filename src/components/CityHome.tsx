import { OriginalPhoto } from './OriginalPhoto'
import { services } from '@/data/site'
import { Shell, CTA, Process, Coverage, FAQ, Footer, StructuredData } from './BrandShell'
import { VehicleSelector } from './PremiumMotion'

export default function CityHome() {
  return (
    <Shell>
      <main id="contenuto">
        <section className="bari-dispatch" aria-labelledby="bari-title">
          <div className="wrap dispatch-grid">
            <div className="dispatch-copy">
              <span className="dispatch-status">Soccorso stradale 24 ore</span>
              <h1 id="bari-title">Carroattrezzi<br />a <em>Bari.</em></h1>
              <p>Auto in panne, moto ferma o veicolo incidentato? Chiamaci per organizzare il recupero a Bari e nei comuni vicini.</p>
              <div className="dispatch-actions">
                <CTA label="Chiama 080 548 4383" />
                <a href="#servizi">Vedi i servizi <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <figure className="dispatch-visual">
              <OriginalPhoto name="hero" alt="Tecnico del soccorso stradale al lavoro a Bari" priority sizes="(max-width: 760px) 92vw, 48vw" />
              <figcaption><span aria-hidden="true">↗</span> Recupero e trasporto veicoli<br />Bari e provincia</figcaption>
            </figure>
          </div>
        </section>
        <section id="servizi" className="section wrap dispatch-services">
          <div className="section-top" data-reveal>
            <h2>Soccorso stradale<br />a Bari</h2>
            <p>Dal guasto al trasporto in officina. Scegli il servizio per sapere come funziona e quali informazioni comunicare al telefono.</p>
          </div>
          <div className="dispatch-cards">
            {services.map((service, index) => (
              <a key={service.slug} href={`/servizi/${service.slug}/`} className="dispatch-card" data-reveal>
                {index < 2 && (
                  <div className="dispatch-card-photo">
                    <OriginalPhoto name={index === 0 ? 'card-soccorso' : 'card-traino'} alt="" sizes="(max-width: 760px) 92vw, 46vw" />
                  </div>
                )}
                <div className="dispatch-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="dispatch-arrow" aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className="section wrap"><VehicleSelector /></section>
        <Process />
        <Coverage />
        <FAQ />
      </main>
      <Footer />
      <StructuredData />
    </Shell>
  )
}
