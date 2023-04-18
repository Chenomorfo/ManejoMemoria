import { writable, derived } from "svelte/store";

export const Memoria = writable(0);

export const SistemaOperativo = writable(0);

export const Particiones = writable([]);

export const MemoriaRestante = derived(
  [Memoria, SistemaOperativo, Particiones],
  ([$Memoria, $SistemaOperativo, $Particiones]) => {
    let memoriaRestante = $Memoria;
    memoriaRestante -= $SistemaOperativo || 0;
    $Particiones.forEach((item) => {
      // @ts-ignore
      memoriaRestante -= item.size || 0;
    });
    return memoriaRestante;
  }
);
