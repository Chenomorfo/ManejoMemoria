<script>
  //@ts-nocheck
  import RowData from "../miscellaneous/RowData.svelte";
  import { Particiones } from "../stores/memoriaStore";
  const ROW_HEADER = {
    label: "Numero",
    state: false,
    garbage: "Desperdicio",
  };
</script>

<section>
  <RowData data={ROW_HEADER} />
  {#each $Particiones as particion}
    <RowData data={particion} />
  {/each}
</section>
