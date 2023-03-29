<script>
  import Controllers from "./lib/Controllers.svelte";
  import Grafico from "./lib/Grafico.svelte";
  import Informacion from "./lib/Informacion.svelte";

  class Partition {
    constructor(label, size, avaible = true, work, garbage) {
      (this.label = label),
        (this.size = size),
        (this.avaible = avaible),
        (this.work = work),
        (this.garbage = garbage);
    }
  }

  let DiskSpace;
  let SO;
  let partitions = [
    /*     new Partition("S.O.", 100),
    new Partition(1, 120),
    new Partition(2, 240),
    new Partition(3, 90),
    new Partition(4, 120),
    new Partition(5, 180), */
  ];
  const SaveSO = () => {
    if (partitions[0]) return;
    partitions.push(new Partition("S.O.", SO));
    console.log(partitions);
  };
</script>

<div>
  <Controllers bind:SO bind:DiskSpace on:click={SaveSO} />
  <Grafico bind:DiskSpace bind:partitions />
  <Informacion bind:partitions />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 40% 155px 1fr;
    gap: 15px;

    height: 100vh;
    width: 100%;
  }
</style>
