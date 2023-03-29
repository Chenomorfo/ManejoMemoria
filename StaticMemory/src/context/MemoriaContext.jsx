import { createContext, useState } from "react";

export const MemoriaContext = createContext();

export function MemoriaContextProvider(props) {
  const [Disco, setDisco] = useState(0);

  const [OS, setOS] = useState(0);

  const [Particiones, setParticiones] = useState([]);

  class Partition {
    constructor(label, size, avaible = true, work, garbage) {
      (this.label = label),
        (this.size = size),
        (this.avaible = avaible),
        (this.work = work),
        (this.garbage = garbage);
    }
  }

  const CrearParticion = (label, size) => {
    if (Particiones[0]) if (Particiones[0].label === label) return;

    let nuevasParticiones = [...Particiones, new Partition(label, size)];
    
    setParticiones(nuevasParticiones);
  };

  return (
    <MemoriaContext.Provider
      value={{
        Disco,
        setDisco,
        OS,
        setOS,
        Particiones,
        setParticiones,
        CrearParticion,
      }}
    >
      {props.children}
    </MemoriaContext.Provider>
  );
}
