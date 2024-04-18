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

        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={(e) => { setUsuario(e.target.value) }} placeholder='Usuario' type="text" />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input onChange={(e) => { setContrasena(e.target.value) }} placeholder='Contraseña' type="text" />
                </div>
                <button type="button">Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default Login