<script>
  import Controles from "../components/Controles.svelte";
  import Datos from "../components/Datos.svelte";
  import Grafica from "../components/Grafica.svelte";
</script>

<main>
  <Controles />
  <Grafica />
  <Datos />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 35vw 15vw 45vw;
    justify-content: center;
    height: 95vh;
  }
</style>
