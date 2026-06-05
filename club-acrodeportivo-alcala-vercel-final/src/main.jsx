import React from 'react'
import { createRoot } from 'react-dom/client'
import { Mail, MapPin, Instagram, Clock, Trophy, Users, Star } from 'lucide-react'
import './styles.css'

const grupos = [
  {
    nombre: 'Competición pequeños',
    edad: '6–9 años',
    horario: 'Martes y jueves · 18:00–19:00',
    precio: '30€/mes',
  },
  {
    nombre: 'Competición mayores',
    edad: '9–15 años',
    horario: 'Martes y jueves · 19:00–20:30',
    precio: '40€/mes',
  },
  {
    nombre: 'Adultos',
    edad: '+16 años',
    horario: 'Martes y jueves · 20:30–21:30',
    precio: '40€/mes',
  },
]

const galeria = [
  { src: '/images/equipo.jpg', alt: 'Equipo del Club Acrodeportivo Alcalá' },
  { src: '/images/lema.jpg', alt: 'Lema del club en camiseta' },
  { src: '/images/flexibilidad.jpg', alt: 'Entrenamiento de flexibilidad' },
  { src: '/images/puente.jpg', alt: 'Trabajo técnico de puente' },
  { src: '/images/vertical.jpg', alt: 'Entrenamiento de vertical' },
]

function App() {
  const asunto = encodeURIComponent('Inscripción Club Acrodeportivo Alcalá')
  const cuerpo = encodeURIComponent(
    'Hola, quiero solicitar información para inscribirme en el Club Acrodeportivo Alcalá.\n\nNombre:\nEdad:\nTeléfono:\nGrupo que me interesa:\nComentarios:'
  )

  return (
    <main>
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <img src="/images/logo.png" alt="Logo Club Acrodeportivo Alcalá" />
            <span>Club Acrodeportivo Alcalá</span>
          </div>
          <div className="nav-links">
            <a href="#club">Club</a>
            <a href="#horarios">Horarios</a>
            <a href="#inscripcion">Inscripción</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <section className="hero-content">
          <p className="eyebrow">Gimnasia · Acrobacia · Equipo</p>
          <h1>Club Acrodeportivo Alcalá</h1>
          <p>
            Acrobacia, gimnasia y formación deportiva para todas las edades en Alcalá de Henares.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#inscripcion">Inscripciones abiertas</a>
            <a className="button secondary" href="#horarios">Ver horarios</a>
          </div>
        </section>
      </header>

      <section id="club" className="section two-columns">
        <div>
          <p className="section-label">Sobre nosotros</p>
          <h2>Un club para crecer, aprender y tocar el cielo</h2>
          <p>
            En Club Acrodeportivo Alcalá creemos que la gimnasia es mucho más que un deporte.
            Es esfuerzo, compañerismo, disciplina, confianza y superación personal.
          </p>
          <p>
            Trabajamos con grupos por edades y niveles para acompañar a cada gimnasta en su
            evolución técnica y personal, siempre en un ambiente cercano, positivo y motivador.
          </p>
        </div>
        <img className="rounded-image" src="/images/equipo.jpg" alt="Foto de grupo del Club Acrodeportivo Alcalá" />
      </section>

      <section className="quote-section">
        <Star />
        <blockquote>“Soy gimnasta. ¿Cuál es tu manera de tocar el cielo?”</blockquote>
      </section>

      <section className="section cards-section">
        <p className="section-label">Entrenamientos</p>
        <h2>Gimnasia, acrobacia y desarrollo técnico</h2>
        <div className="cards">
          <article className="card">
            <Trophy />
            <h3>Competición</h3>
            <p>Grupos de competición para pequeños y mayores, con trabajo técnico adaptado a cada edad.</p>
          </article>
          <article className="card">
            <Users />
            <h3>Ambiente de equipo</h3>
            <p>Fomentamos el compañerismo, la constancia y la motivación dentro y fuera del tapiz.</p>
          </article>
          <article className="card">
            <Clock />
            <h3>Progresión</h3>
            <p>Entrenamientos enfocados en flexibilidad, fuerza, coordinación, control corporal y acrobacia.</p>
          </article>
        </div>
      </section>

      <section id="horarios" className="section">
        <p className="section-label">Horarios y precios</p>
        <h2>Grupos disponibles</h2>
        <div className="pricing-grid">
          {grupos.map((grupo) => (
            <article className="price-card" key={grupo.nombre}>
              <h3>{grupo.nombre}</h3>
              <p className="age">{grupo.edad}</p>
              <p>{grupo.horario}</p>
              <strong>{grupo.precio}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-label">Galería</p>
        <h2>Así entrenamos</h2>
        <div className="gallery">
          {galeria.map((foto) => (
            <img key={foto.src} src={foto.src} alt={foto.alt} />
          ))}
        </div>
      </section>

      <section id="inscripcion" className="section signup">
  <div>
    <p className="section-label">Inscripciones</p>
    <h2>Solicita información o reserva tu plaza</h2>
    <p>
      Completa nuestro formulario de inscripción y nos pondremos en contacto contigo lo antes posible.
    </p>

    <a
      className="button primary"
      href="https://docs.google.com/forms/d/e/1FAIpQLSclUJjtdRrpxlQsgc1SVirdix5tz1lmiRwmDkUgrUQpRTgPgQ/viewform"
      target="_blank"
      rel="noreferrer"
    >
      📝 Rellenar formulario de inscripción
    </a>
  </div>
</section>

      <section id="contacto" className="section contact">
        <p className="section-label">Contacto</p>
        <h2>Ven a conocernos</h2>
        <div className="contact-grid">
          <a href="mailto:gymnasticseducation.alcala@gmail.com">
            <Mail /> gymnasticseducation.alcala@gmail.com
          </a>
          <a href="https://www.instagram.com/acrodeportivo" target="_blank" rel="noreferrer">
            <Instagram /> @acrodeportivo
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Colegio+La+Garena+Calle+Arturo+Soria+3+Alcala+de+Henares" target="_blank" rel="noreferrer">
            <MapPin /> Colegio La Garena, Calle Arturo Soria 3, Alcalá de Henares
          </a>
        </div>
        <iframe
          title="Ubicación Colegio La Garena"
          src="https://www.google.com/maps?q=Colegio%20La%20Garena%20Calle%20Arturo%20Soria%203%20Alcala%20de%20Henares&output=embed"
          loading="lazy"
        />
      </section>

      <footer>
        <img src="/images/logo.png" alt="Logo Club Acrodeportivo Alcalá" />
        <p>© 2026 Club Acrodeportivo Alcalá · Azul y amarillo, esfuerzo y equipo.</p>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
