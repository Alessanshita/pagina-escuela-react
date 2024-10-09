import { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  CloseIcon,
  HomeIcon,
  PublicationIcon,
  InstitutionIcon,
  BookIcon,
  EventIcon,
  HikingIcon,
  QuestionIcon,
  HamburguerIcon,
  BriefcaseIcon,
} from '../Icons/Icons.jsx'
import './SidebarResponsive.css'

function SidebarResponsive({ isLoggedIn, handleLogout }) {

  const [showInstitucion, setShowInstitucion] = useState(false);
  const [showPlanDeEstudio, setShowPlanDeEstudio] = useState(false);

  const toggleInstitucion = () => {
    setShowInstitucion(!showInstitucion);
  };

  const togglePlanDeEstudio = () => {
    setShowPlanDeEstudio(!showPlanDeEstudio);
  };

  return (
    <div className="header">
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <HamburguerIcon />
      </button>
      <Link className="container-logo" to="/">
        <img src="et7.png" width="45" height="61" alt="Logo escuela" />
        <p className="texto-bold texto-violeta">
          ESCUELA TÉCNICA DOLORES LAVALLE DE LAVALLE
        </p>
      </Link>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <button
            className="btn"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="offcanvas-body">
          <nav className="container-items">
            <ul className="items">
              <Link to="/">
                <li className="container-item-individual texto-semibold">
                  <HomeIcon />
                  <p className="texto-violeta">Inicio</p>
                </li>
              </Link>
              <Link to="publicaciones">
                <li className="container-item-individual texto-semibold">
                  <PublicationIcon />
                  <p className="texto-violeta">Publicaciones</p>
                </li>
              </Link>
              <li className={"container-item-individual texto-semibold"}  style={{cursor: "pointer"}} onClick={toggleInstitucion}>
                <InstitutionIcon />
                <p className="texto-violeta dropdown-toggle">Institución</p>
              </li>
              <ul className="container-subitems" style={{position: "relative", display: `${showInstitucion ? 'block' : 'none'}`}}>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="nuestra-historia"
                    >
                      Nuestra historia
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="autoridades"
                    >
                      Autoridades
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link 
                      className="subitem texto-semibold texto-violeta" 
                      to="documentos"
                    >
                      Documentos
                    </Link>
                  </li>
                </ul>

              <Link to="/practicas-profesionalizantes">
                <li className="container-item-individual texto-semibold">
                  <BriefcaseIcon />
                  <p className="texto-violeta">Prácticas Profesionalizantes</p>
                </li>
              </Link>
              <li className="container-item-individual texto-semibold" style={{cursor: "pointer"}} onClick={togglePlanDeEstudio}>
                <BookIcon />
                <p className="texto-violeta dropdown-toggle">Plan de estudio</p>
              </li>
              <ul className="container-subitems" style={{position: "relative", display: `${showPlanDeEstudio ? 'block' : 'none'}`}}>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="computacion"
                    >
                      Computación
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="gao"
                    >
                      GAO
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="ciclo-basico"
                    >
                      Ciclo básico
                    </Link>
                  </li>
                </ul>
              
              <Link to="eventos">
                <li className="container-item-individual texto-semibold">
                  <EventIcon />
                  <p className="texto-violeta">Nuestros Eventos</p>
                </li>
              </Link>

              <Link to="tinku">
                <li className="container-item-individual texto-semibold">
                  <HikingIcon />
                  <p className="texto-violeta">TINKU</p>
                </li>
              </Link>

              <Link to="preguntas-frecuentes">
                <li className="container-item-individual texto-semibold">
                  <QuestionIcon />
                  <p className="texto-violeta">Preguntas frecuentes</p>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SidebarResponsive;
