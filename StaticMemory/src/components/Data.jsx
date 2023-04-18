import { useContext } from "react";
import { MemoriaContext } from "../context/MemoriaContext";

function Data() {
  const { Particiones } = useContext(MemoriaContext);

  const CalcularInicio = (index) => {
    if (index == 0) return "S.O.";
    let start = 0;
    for (let i = 1; i <= index; i++) {
      start += Particiones[i].size;
    }
    return start;
  };

  const CargarInformacion = () => {
    let Data = [];
    for (let index = 1; index < Particiones.length; index++) {
      Data.push(
        <div key={Particiones[index].label}>
          <i>{Particiones[index].label}</i>
          <i>{Particiones[index].size} MB</i>
          <i>{CalcularInicio(index)}</i>
          <i>{Particiones[index].avaible ? "Libre" : "Ocupado"}</i>
          <i>{Particiones[index].work ?? "Disponible"}</i>
          <i>{Particiones[index].garbage ?? "Sin desperdicio"}</i>
        </div>
      );
    }
    return Data;
  };

  return (
    <div className="Tabla">
      <div>
        <i>Numero</i>
        <i>Tamaño</i>
        <i>Inicio</i>
        <i>Estado</i>
        <i>Trabajo</i>
        <i>Desperdicio</i>
      </div>
      {CargarInformacion()}
    </div>
  );
}

export default Data;
