<script>
  //@ts-nocheck
  import RowData from "../miscellaneous/RowData.svelte";
  import { Trabajos } from "../stores/memoriaStore";
  const ROW_HEADER = {
    label: "Numero",
    state: false,
    garbage: "Desperdicio",
  };
</script>

<section>
  <RowData data={ROW_HEADER} />
  {#each $Trabajos as trabajo}
    <RowData data={trabajo} />
  {/each}
</section>
