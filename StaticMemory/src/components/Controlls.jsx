import React, { useContext, useState } from "react";
import { MemoriaContext } from "../context/MemoriaContext";

function Controlls() {
  const [ValorDisco, setValorDisco] = useState(0);
  const [ValorSO, setValorSO] = useState(0);
  const [ValorParticion, setValorParticion] = useState(0);
  const [valorTrabajo, setValorTrabajo] = useState(0);

  const { setDisco, Disco, CrearParticion, Particiones, ValidarTrabajo, ReiniciarSimulacion } =
    useContext(MemoriaContext);

  const CalculateSize = () => {
    let size = 0;
    for (let index = 0; index < Particiones.length; index++) {
      size += Particiones[index].size;
    }
    return Disco - size;
  };

  return (
    <div className="Controles">
      <h1>Asignar Disco duro</h1>
      <div>
        <input
          value={ValorDisco}
          onChange={(e) => setValorDisco(e.target.value)}
          type="text"
          placeholder="Tamaño del disco"
        />
        <button
          onClick={() => {
            setDisco(parseInt(ValorDisco));
          }}
        >
          Ingresar
        </button>
      </div>
      <h2>Asignar Sistema operativo</h2>
      <div>
        <input
          value={ValorSO}
          onChange={(e) => setValorSO(e.target.value)}
          type="text"
          placeholder="Tamaño del S.O."
        />
        <button
          onClick={() => {
            if (Disco <= 0) {
              alert("No existe un disco duro");
              return;
            }
            CrearParticion("S.O.", parseInt(ValorSO));
          }}
        >
          Ingresar
        </button>
        <i>Espacio Maximo permitido : {Disco * 0.3} MB</i>
      </div>
      <h2>Asignar particion</h2>
      <div>
        <input
          value={ValorParticion}
          onChange={(e) => setValorParticion(e.target.value)}
          type="text"
          placeholder="Tamaño de Particion"
        />
        <button
          onClick={() => {
            if (Particiones.length > 0)
              CrearParticion(
                "Particion " + Particiones.length,
                parseInt(ValorParticion)
              );
            else alert("Se requiere inicalizar el Sistema Operativo primero");
          }}
        >
          Ingresar
        </button>
        <i>Espacio Maximo permitido : {CalculateSize()} MB</i>
      </div>
      <h2>Asignar trabajo</h2>
      <div>
        <input
          value={valorTrabajo}
          onChange={(e) => setValorTrabajo(e.target.value)}
          type="text"
          placeholder="Tamaño de Trabajo"
        />
        <button
          onClick={() => {
            ValidarTrabajo(parseInt(valorTrabajo));
          }}
        >
          Ingresar
        </button>
        <i>Espacio Maximo permitido : {CalculateSize()} MB</i>
      </div>
      <div>
        <button onClick={() => ReiniciarSimulacion()}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Controlls;
