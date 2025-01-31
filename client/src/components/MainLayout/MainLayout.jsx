import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Sidebar from '../Sidebar/Sidebar.jsx'
import SidebarResponsive from '../SidebarResponsive/SidebarResponsive.jsx'
import BottomNavbar from '../BottomNavbar/BottomNavbar.jsx'
import Footer from '../Footer/Footer'

import LoginLayout from '../LoginLayout/LoginLayout'
import Inicio from '../Sections/Inicio/Inicio.jsx'
import PublicacionesSL from '../Sections/Publicaciones/PublicacionesSL.jsx'
import PublicacionesCL from '../Sections/Publicaciones/PublicacionesCL.jsx'

import NuestraHistoria from '../Sections/Institucion/NuestraHistoria.jsx'
import Autoridades from '../Sections/Institucion/Autoridades.jsx'
import Documentos from '../Sections/Institucion/Documentos.jsx'

import PracticasProfesionalizantes from '../Sections/PractIcasProfesionalizantes/PracticasProfesionalizantes.jsx'

import CicloBasico from '../Sections/PlanDeEstudio/CicloBasico.jsx'
import Gao from '../Sections/PlanDeEstudio/Gao.jsx'
import Computacion from '../Sections/PlanDeEstudio/Computacion.jsx'

import PreguntasFrecuentes from '../Sections/PreguntasFrecuentes/PreguntasFrecuentes.jsx'
import NotFound from '../Sections/NotFound/NotFound.jsx'
import Eventos from '../Sections/Eventos/Eventos.jsx'
import Tinku from '../Sections/Tinku/Tinku.jsx'
import './LoginButton.css'

function MainLayout() {
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasRedirected, setHasRedirected] = useState(false)

  const [isLaptopResolution, setIsLaptopResolution] = useState(
    window.innerWidth <= 1470
  )
  const [isCellResolution, setIsCellResolution] = useState(
    window.innerWidth <= 768
  )

  function RenderRedirectToPublicacionesCL({ isLoggedIn }) {
    const navigate = useNavigate()
    useEffect(() => {
      if (isLoggedIn && !hasRedirected) {
        navigate('/publicaciones-logged-in')
        setHasRedirected(true)
      }
    }, [isLoggedIn, navigate])

    return null
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setHasRedirected(false)
    navigate('/')
  }
  const handleResize = () => {
    const currentWindowWidth = window.innerWidth

    if (currentWindowWidth <= 768) {
      setIsLaptopResolution(false)
      setIsCellResolution(true)
    } else {
      setIsLaptopResolution(true)
      setIsCellResolution(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      {isLaptopResolution ? (
        <SidebarResponsive
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      ) : (
        <Sidebar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      )}

      <RenderRedirectToPublicacionesCL isLoggedIn={isLoggedIn} />

      {isCellResolution ? <BottomNavbar /> : null}

      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route
          exact
          path="/login"
          element={
            <LoginLayout
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          exact
          path="/publicaciones"
          element={isLoggedIn ? <PublicacionesCL /> : <PublicacionesSL />}
        />
        <Route
          exact
          path="/publicaciones-logged-in"
          element={isLoggedIn ? <PublicacionesCL /> : <PublicacionesSL />}
        />
        <Route exact path="/nuestra-historia" element={<NuestraHistoria />} />
        <Route exact path="/autoridades" element={<Autoridades />} />
        <Route exact path="/documentos" element={<Documentos />} />

        <Route
          exact
          path="/practicas-profesionalizantes"
          element={<PracticasProfesionalizantes />}
        />

        <Route exact path="/computacion" element={<Computacion />} />
        <Route exact path="/gao" element={<Gao />} />
        <Route exact path="/ciclo-basico" element={<CicloBasico />} />
        <Route
          exact
          path="/preguntas-frecuentes"
          element={<PreguntasFrecuentes />}
        />
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/eventos" element={<Eventos />} />
        <Route exact path="/tinku" element={<Tinku />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default MainLayout
