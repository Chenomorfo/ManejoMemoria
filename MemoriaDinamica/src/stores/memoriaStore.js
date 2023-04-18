import { writable, derived } from "svelte/store";

export const Memoria = writable(0);

export const SistemaOperativo = writable(0);

export const Trabajos = writable([]);

export const MemoriaRestante = derived(
  [Memoria, SistemaOperativo, Trabajos],
  ([$Memoria, $SistemaOperativo, $Trabajos]) => {
    let memoriaRestante = $Memoria;
    memoriaRestante -= $SistemaOperativo || 0;
    $Trabajos.forEach((item) => {
      // @ts-ignore
      memoriaRestante -= item.size || 0;
    });
    return memoriaRestante;
  }
);
