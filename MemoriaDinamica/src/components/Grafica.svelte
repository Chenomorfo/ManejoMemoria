<script>
  import { styles, garbage } from "../stores/dynamicStyles";

  import {
    Memoria,
    Trabajos,
    SistemaOperativo,
    MemoriaRestante,
  } from "../stores/memoriaStore";

  const CalcularTamano = (value = 0) => {
    return (value * 100) / $Memoria;
  };
</script>

<section>
  {#if $SistemaOperativo}
    <div style="height: {CalcularTamano($SistemaOperativo)}%;">
      Sistema Operativo <br />
      {$SistemaOperativo} MB
    </div>
  {/if}

  {#each $Trabajos as { label, size, work }, i}
    <div style="height: {CalcularTamano(work ? work : size)}%;{styles[i]}">
      {label} <br />
      {work ? work : size} MB
    </div>
    {#if work}
      <div style="height: {CalcularTamano(size - work)}%;{garbage}">
        Desperdicio <br />
        {size - work} MB
      </div>
    {/if}
  {/each}
  {#if $MemoriaRestante > 0}
    <div style="height: {($MemoriaRestante * 100) / $Memoria}%;">
      {$MemoriaRestante} MB
    </div>
  {/if}
</section>

<style>
  div {
    margin: auto;
    width: 50%;
    border: 1px solid white;
    display: grid;
    place-items: center;
    text-align: center;
  }
</style>
