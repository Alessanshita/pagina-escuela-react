import { useState, useEffect } from 'react'
import CardPublicacion from '../../CardPublicacion/CardPublicacion'
import './Publicaciones.css'
import publicaciones from './publicaciones_hard_code.json';

//const URL_POSTS = 'http://localhost:3001'
const URL_POSTS = 'https://pagina-escuela-react-production.up.railway.app'

function PublicacionesSL() {

  // // RESOLVER ESTE TEMA DESDE EL BACK EN EL FUTURO
  // const [publicaciones, setPublicaciones] = useState([])
  // useEffect(() => {
  //   fetch(`${URL_POSTS}/posts`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPublicaciones(data)
  //     })
  //     .catch((error) => {
  //       console.error('Error al obtener las publicaciones: ', error)
  //     })
  // }, [])

  // hardcodeamos las publicaciones para salir del paso


  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Publicaciones</h2>
      </div>

      <div className="contenedor-grid">
        {publicaciones.map((publicacion) => (
          <div
            key={publicacion.idPost}
            className={`estilos-div ${publicacion.hidden ? 'hidden' : ''}`}
          >
            <CardPublicacion
              title={publicacion.title}
              content={publicacion.content}
              dateUploaded={publicacion.dateUploaded}
              imgPath={publicacion.imgPath}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PublicacionesSL
