<script>
  // @ts-nocheck
  import TextBox from "../miscellaneous/TextBox.svelte";
  import {
    Memoria,
    SistemaOperativo,
    Trabajos,
    MemoriaRestante,
  } from "../stores/memoriaStore";
  import { Trabajo, Asignacion, CalcularAsignacion } from "../stores/clases";

  let Disco = new Asignacion();
  let OS = new Asignacion();
  let trabajo = new Asignacion();

  let trabajoActivo = null;
</script>

<section>
  <TextBox
    bind:value={Disco.size}
    on:click={() => {
      Memoria.set(CalcularAsignacion(parseFloat(Disco.size), Disco.format));
      SistemaOperativo.set(0);
      $Trabajos.set([]);
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
    bind:value={trabajo.size}
    bind:sizeValue={trabajo.format}
    on:click={() => {
      if ($Memoria <= 0) {
        alert("Se requiere primero inicializar el Disco");
        return;
      }
      if (
        CalcularAsignacion(parseFloat(trabajo.size), trabajo.format) >
        $MemoriaRestante
      ) {
        alert("Trabajo demasiado grande");
        return;
      }
      Trabajos.update((list) => [
        ...list,
        new Trabajo(
          "Trabajo " + (list.length + 1),
          CalcularAsignacion(parseFloat(trabajo.size), trabajo.format),
          list.length
            ? (() => {
                let newStart = parseFloat(
                  CalcularAsignacion(parseFloat(trabajo.size), trabajo.format)
                );
                list.forEach((item) => (newStart += item.size));
                return newStart;
              })()
            : parseFloat(
                CalcularAsignacion(parseFloat(trabajo.size), trabajo.format)
              )
        ),
      ]);
      trabajo.size = 0;
    }}
    title={"Tamaño del Trabajo"}
  />

  <h1>Disco Duro</h1>
  <h2>{$Memoria} MB</h2>
  <h1>Sistema Operativo</h1>
  <h2>{$SistemaOperativo} MB</h2>

  <h1>Trabajos Activos</h1>
  <select bind:value={trabajoActivo}>
    {#each $Trabajos as { label }, i}
      <option value={label}>{label}</option>
    {/each}
  </select>
  <button
    on:click={() =>
      Trabajos.update((list) =>
        list.filter((item) => item.label != trabajoActivo)
      )}>Liberar</button
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
