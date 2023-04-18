<script>
  export let data = {
    label: "Numero",
    size: 0,
    start: 0,
    state: false,
    work: 0,
  };
</script>

<ul>
  <li>{data.label}</li>
  <li>{data.size ? data.size + " MB" : "Tamaño"}</li>
  <li>{data.start ? data.start + " MB" : "Inicio"}</li>
  <li>{!data.state ? "Libre" : "Ocupado"}</li>
  <li>{data.work ? data.work + " MB" : "Trabajo"}</li>
  <li>
    {#if data.work && !isNaN(data.size)}
      {data.size - data.work} MB
    {:else}
      Desperdicio
    {/if}
  </li>
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
    height: 60px;
  }
  li {
    border: 1px solid white;
    display: grid;
    place-items: center;
  }
</style>
