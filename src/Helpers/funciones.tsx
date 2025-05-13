import Swal from "sweetalert2";
import type { SweetAlertIcon } from "sweetalert2";

// Función para alerta de confirmación básica
export function alertaConfirmacion(): void {
  Swal.fire({
    title: "Bienvenido", // Corregido "Bievenido" -> "Bienvenido"
    text: "Ha iniciado sesión de forma correcta!", // Corregido "seción" -> "sesión"
    icon: "success",
  });
}

// Función para alertas de error personalizadas
export function alertaError(
  titulo: string = "Error",
  mensaje: string = "Ocurrió un error",
  icono: SweetAlertIcon = "error"
): void {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
  });
}

// Función para alertas con redirección
export function alertaRedireccion(
  redireccion: (url: string) => void,
  titulo: string,
  mensaje: string,
  icono: SweetAlertIcon,
  url: string
): void {
  let timerInterval: number;

  Swal.fire({
    title: titulo,
    html: mensaje,
    timer: 2000,
    icon: icono,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup()?.querySelector("b");

      if (timer) {
        timerInterval = setInterval(() => {
          const timeLeft = Swal.getTimerLeft();
          if (timer && timeLeft !== undefined) {
            timer.textContent = `${timeLeft}`;
          }
        }, 100);
      }
    },
    willClose: () => {
      clearInterval(timerInterval);
      redireccion(url);
    },
  }).then((result) => {
    // Manejar cierre manual del alerta
    if (result.dismiss === Swal.DismissReason.timer) {
      return;
    }
    clearInterval(timerInterval);
  });
}

// Función para generar un token (versión mejorada)
export function generarToken(): string {
  return (
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10)
  );
}
