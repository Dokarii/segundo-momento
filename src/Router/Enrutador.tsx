import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import Home from "../Pages/Home";
import Servicios from "../Pages/Servicios";

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
    path: "/Contacto",
    element: null,
  },
  {
    path: "/Acerca-de",
    element: null,
  },
  {
    path: "/Cerrar-Sesion",
    element: null,
  },
];
