import type { JSX } from "react"
import { Navigate } from "react-router-dom"

function RutaProtegida({ proteger }: { proteger: JSX.Element }) {
    let tokenAcceso = localStorage.getItem("token")
    return tokenAcceso ? proteger : <Navigate to="/" />
}

export default RutaProtegida