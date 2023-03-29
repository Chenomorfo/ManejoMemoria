<script>
  export let DiskSpace;
  export let SO;
  let limitSO;
  let partitionSpace;
</script>

<div class="System">
  <div>
    <input
      type="text"
      placeholder="Tamaño de disco (MB)"
      bind:value={DiskSpace}
      on:keyup={() => (limitSO = DiskSpace * 0.3)}
    />
    <button on:click={() => (limitSO = DiskSpace * 0.3)}>INGRESAR</button>
  </div>

  <div>
    <input bind:value={SO} type="text" placeholder="Tamaño del S.O. (MB)" />
    <button on:click>INGRESAR</button>
  </div>
  <i>Tamaño Maximo : {limitSO ?? 0} MB</i>

  <div>
    <input type="text" placeholder="Tamaño de la particion (MB)" />
    <button>INGRESAR</button>
  </div>
  <i>Espacio restante : {partitionSpace ?? 0} MB</i>
</div>

<style>
  .System {
    width: 100%;
    margin: auto;
    display: grid;
    grid-auto-flow: row;
    text-align: center;
  }
  div {
    margin: auto;
    margin-top: 15px;
  }
  input {
    font-size: 1.2rem;
    width: 65%;
  }
  button {
    font-size: 1.2rem;
    background-color: white;
    color: black;
  }
</style>
