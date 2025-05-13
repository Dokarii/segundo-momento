import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import Home from "../Pages/Home";
import Servicios from "../Pages/Servicios";
import Contacto from "../Pages/Contacto";
import About from "../Pages/About";
import RutaProtegida from "../Componets/RutaProtegida";

export let enrutador = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Sing-up",
    element: <Registro />,
  },
  {
    path: "/Home",
    element: (
      <RutaProtegida>
        <Home />
      </RutaProtegida>
    ),
  },
  {
    path: "/Services",
    element: (
      <RutaProtegida>
        <Servicios />
      </RutaProtegida>
    ),
  },
  {
    path: "/Contact",
    element: (
      <RutaProtegida>
        <Contacto />
      </RutaProtegida>
    ),
  },
  {
    path: "/About",
    element: (
      <RutaProtegida>
        <About />
      </RutaProtegida>
    ),
  },
  {
    path: "/Cerrar-Sesion",
    element: null, // Puedes usarlo para logout más adelante
  },
];
