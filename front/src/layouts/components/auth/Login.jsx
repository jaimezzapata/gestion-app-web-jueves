import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [getUsuario, setUsuario] = useState("admin")
    const [getContrasena, setContrasena] = useState("")
    let redireccion = useNavigate()
    if (getUsuario === 'Jaime') {
        redireccion("/home")
    }
    return (
        <form>
            <section>
                <input onChange={(e) => { setUsuario(e.target.value) }} placeholder='Usuario' type="text" />
                <input onChange={(e) => { setContrasena(e.target.value) }} placeholder='Contraseña' type="text" />
            </section>
            <section>
                <button type='button'>Iniciar Sesión</button>
                <button type='button'>Crear Cuenta</button>
            </section>
        </form>
    )
}

export default Login