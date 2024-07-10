import CardAutoridad from '../../CardAutoridad/CardAutoridad'
import styles from './Autoridades.module.css'

function Autoridades() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Autoridades</h2>
      </div>
      <div className={styles.contenedorImagenes}>
        <CardAutoridad
          foto={'./DiegoBaron.jpg'}
          cargo={'Rector'}
          nombre={'Diego Baron'}
        />
        <CardAutoridad
          foto={'./KarinaPereyra.jpg'}
          cargo={'Vicerrectora'}
          nombre={'Karina Pereyra'}
        />
        <CardAutoridad
          foto={'./JuanAbreu.jpg'}
          cargo={'Rector TM'}
          nombre={'Juan de Abreu'}
        />
      </div>
      <div className={styles.contenedorImagenes}>
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Rectora TT'}
          nombre={"Silvina De'Aquino"}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Secretaria'}
          nombre={'Andrea Torres'}
        />
      </div>
    </section>
  )
}

export default Autoridades
