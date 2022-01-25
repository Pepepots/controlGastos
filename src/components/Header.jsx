import { ControlPresupuesto } from "./ControlPresupuesto";
import { NuevoPresupuesto } from "./NuevoPresupuesto";

export const Header = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    presupuestoValido,
    setPresupuestoValido,
}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {
                presupuestoValido ? ( 
                    <ControlPresupuesto 
                        gastos={gastos}
                        setGastos={setGastos}
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setPresupuestoValido={setPresupuestoValido}
                    />
                ) : (
                    <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setPresupuestoValido={setPresupuestoValido}
                    />
                )
            }
        </header>
    );
};
