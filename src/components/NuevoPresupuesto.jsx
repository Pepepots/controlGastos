import { useState } from "react"
import { Mensaje } from "./Mensaje"

export const NuevoPresupuesto = ({ 
    presupuesto, 
    setPresupuesto, 
    setPresupuestoValido 
    }) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if (presupuesto <= 0) {
            setMensaje('No es un presupuesto valido')
            return
        }

        setMensaje('')
        setPresupuestoValido(true)

    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label>Definir Presupuesto</label>

                    <input
                        type="number"
                        className='nuevo-presupuesto'
                        placeholder='Añade tu Presupuesto'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />

                    <input
                        type="submit"
                        value='Añadir'
                    />

                    {
                        mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>
                    }
                </div>
            </form>
        </div>
    )
}
