import React, { useContext, useState } from "react";
import { MemoriaContext } from "../context/MemoriaContext";

function Controlls() {
  const [ValorDisco, setValorDisco] = useState(0);
  const [ValorSO, setValorSO] = useState(0);
  const [ValorParticion, setValorParticion] = useState(0);
  const { setDisco, Disco, CrearParticion, Particiones } =
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
      <div>
        <input
          value={ValorSO}
          onChange={(e) => setValorSO(e.target.value)}
          type="text"
          placeholder="Tamaño del S.O."
        />
        <button onClick={() => CrearParticion("S.O.", parseInt(ValorSO))}>
          Ingresar
        </button>
        <i>Espacio Maximo permitido : {Disco * 0.3} MB</i>
      </div>
      <div>
        <input
          value={ValorParticion}
          onChange={(e) => setValorParticion(e.target.value)}
          type="text"
          placeholder="Tamaño de Particion"
        />
        <button
          onClick={() => {
            CrearParticion(
              "Particion " + Particiones.length,
              parseInt(ValorParticion)
            );
          }}
        >
          Ingresar
        </button>
        <i>Espacio Maximo permitido : {CalculateSize()} MB</i>
      </div>
    </div>
  );
}

export default Controlls;
