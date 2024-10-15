import CardPublicacion from '../../CardPublicacion/CardPublicacion'
import '../Publicaciones/Publicaciones.css'
import eventos from './eventos_hard_code.json';
import './Eventos.css'


function Eventos() {

  // hardcodeamos los eventos desde un json

  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Nuestros Eventos</h2>
      </div>

      <div className="contenedor-grid">
        {eventos.map((evento) => (
          <div
            key={evento.idPost}
            className={`estilos-div ${evento.hidden ? 'hidden' : ''}`}
          >
            <CardPublicacion
              title={evento.title}
              content={evento.content}
              dateUploaded={evento.dateUploaded}
              imgPath={evento.imgPath}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Eventos;
