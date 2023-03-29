import { useContext } from "react";
import { MemoriaContext } from "../context/MemoriaContext";

function Graph() {
  const { Disco, Particiones } = useContext(MemoriaContext);

  const LoadPartitions = () => {
    let myPartitiones = [];
    for (let i = 0; i < Particiones.length; i++) {
      myPartitiones.push(
        <i style={{ height: `${(Particiones[i].size * 100) / Disco}%` }}>
          {Particiones[i].label} <br />
          {Particiones[i].size} MB
        </i>
      );
    }
    return myPartitiones;
  };

  const ReduceTotal = () => {
    let UsedSpace = 0;
    for (let index = 0; index < Particiones.length; index++) {
      UsedSpace += Particiones[index].size;
    }
    return Disco - UsedSpace;
  };

  return (
    <div className="Graph">
      {LoadPartitions()}
      {ReduceTotal() > 0 ? (
        <i
          style={{ height: `${Disco ? (ReduceTotal() * 100) / Disco : 100}%` }}
        >
          Espacio disponible: <br />
          {Disco ? ReduceTotal() : 0} MB
        </i>
      ) : null}
    </div>
  );
}

export default Graph;
