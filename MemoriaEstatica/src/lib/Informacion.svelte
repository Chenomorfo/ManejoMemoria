<script>
  export let partitions = [];

  const CalcularInicio = (index) => {
    if (index == 0) return "S.O.";
    let start = 0;
    for (let i = 1; i <= index; i++) {
      start += partitions[i].size;
    }
    return start;
  };
</script>

<div class="Tabla">
  <div>
    <i>Numero</i>
    <i>Tamaño</i>
    <i>Inicio</i>
    <i>Estado</i>
    <i>Trabajo</i>
    <i>Desperdicio</i>
  </div>
  {#each partitions as partition, i}
    <div>
      <i>Particion {partition.label}</i>
      <i>{partition.size}</i>
      <i>{CalcularInicio(i)}</i>
      <i>{partition.avaible ? "Libre" : "Ocupado"}</i>
      <i>{partition.work ?? "Disponible"}</i>
      <i>{partition.garbage ?? "Sin desperdicio"}</i>
    </div>
  {/each}
</div>

<style>
  .Tabla {
    margin-top: 15px;
    display: block;
  }
  .Tabla div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 95%;
    margin: auto;
    transition: .3s;
  }
  .Tabla div:hover {
    background-color: white;
    color: #242424;
    cursor: pointer;
  }

  div i {
    border: 1px solid white;
    padding: 5px;
    text-align: center;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
  
</style>
