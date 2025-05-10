import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import Home from "../Pages/Home";
import Servicios from "../Pages/Servicios";
import Contacto from "../Pages/Contacto";
import About from "../Pages/About";

export let enrutador = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Registro",
    element: <Registro />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Servicios",
    element: <Servicios />,
  },
  {
    path: "/Contact",
    element: <Contacto />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Cerrar-Sesion",
    element: null,
  },
];
