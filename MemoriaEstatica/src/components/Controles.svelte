<script>
  // @ts-nocheck
  import TextBox from "../miscellaneous/TextBox.svelte";
  import {
    Memoria,
    SistemaOperativo,
    Particiones,
    MemoriaRestante,
  } from "../stores/memoriaStore";
  import { Particion, Asignacion, CalcularAsignacion } from "../stores/clases";
  import { format } from "mysql";

  let Disco = new Asignacion();
  let OS = new Asignacion();
  let Partition = new Asignacion();
  let Trabajo = new Asignacion();

  let trabajoActivo = null;
</script>

<section>
  <TextBox
    bind:value={Disco.size}
    on:click={() => {
      Memoria.set(CalcularAsignacion(parseFloat(Disco.size), Disco.format));
      SistemaOperativo.set(0);
      Particiones.set([]);
    }}
    bind:sizeValue={Disco.format}
    on:change={() => console.log(Disco)}
    title={"Tamaño del Disco"}
  />
  <TextBox
    bind:value={OS.size}
    bind:sizeValue={OS.format}
    on:click={() => {
      if ($Memoria <= 0) {
        alert("Se requiere primero inicializar el Disco");
        return;
      }
      if (CalcularAsignacion(parseFloat(OS.size), OS.format) > $MemoriaRestante)
        alert("El sistema operativo no puede ser mayor al Disco");
      else
        $SistemaOperativo = CalcularAsignacion(parseFloat(OS.size), OS.format);
    }}
    title={"Tamaño del Sistema Operativo"}
  />
  <TextBox
    bind:value={Partition.size}
    bind:sizeValue={Partition.format}
    on:click={() => {
      if (
        CalcularAsignacion(parseFloat(Partition.size), Partition.format) >
          $MemoriaRestante ||
        CalcularAsignacion(parseFloat(Partition.size), Partition.format) <= 0
      ) {
        alert("No se puede asignar la particion");
        return;
      }
      Particiones.update((list) => [
        ...list,
        new Particion(
          "Particion " + (list.length + 1),
          CalcularAsignacion(parseFloat(Partition.size), Partition.format),
          list.length
            ? (() => {
                let newStart = parseFloat(
                  CalcularAsignacion(
                    parseFloat(Partition.size),
                    Partition.format
                  )
                );
                list.forEach((item) => (newStart += item.size));
                return newStart;
              })()
            : parseFloat(
                CalcularAsignacion(parseFloat(Partition.size), Partition.format)
              )
        ),
      ]);
      Partition.size = 0;
    }}
    title={"Tamaño de la Particion"}
  />
  <TextBox
    bind:value={Trabajo.size}
    bind:sizeValue={Trabajo.format}
    on:click={() => {
      if (!$Particiones.length) {
        alert("No hay particiones disponibles");
        return;
      }
      const ParticionMaxAlta = Math.max(...$Particiones.map((p) => p.size));

      if (
        CalcularAsignacion(parseFloat(Trabajo.size), Trabajo.format) >
        ParticionMaxAlta
      ) {
        alert("Trabajo demasiado grande");
        return;
      }
      for (let i = 0; i < $Particiones.length; i++) {
        if (
          CalcularAsignacion(parseFloat(Trabajo.size), Trabajo.format) <=
            $Particiones[i].size &&
          !$Particiones[i].state
        ) {
          $Particiones[i].work = CalcularAsignacion(
            parseFloat(Trabajo.size),
            Trabajo.format
          );
          $Particiones[i].state = true;
          alert("Trabajo aceptado");
          Trabajo = new Asignacion();
          break;
        }
      }
    }}
    title={"Tamaño del Trabajo"}
  />

  <h1>Disco Duro</h1>
  <h2>{$Memoria} MB</h2>
  <h1>Sistema Operativo</h1>
  <h2>{$SistemaOperativo} MB</h2>

  <h1>Trabajos Activos</h1>
  <select bind:value={trabajoActivo}>
    {#each $Particiones as { label, work }, i}
      {#if work}
        <option value={i}>{label}</option>
      {/if}
    {/each}
  </select>
  <button on:click={() => ($Particiones[trabajoActivo].work = 0)}
    >Liberar</button
  >
</section>

<style>
  select {
    width: 250px;
    font-size: 1.5em;
  }
  button {
    font-size: 1.4em;
  }
</style>
