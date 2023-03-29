<script>
  import SystemController from "./miscellaneous/SystemController.svelte";
  import WorksController from "./miscellaneous/WorksController.svelte";

  export let DiskSpace;
  export let SO;
</script>

<div>
  <SystemController bind:DiskSpace bind:SO on:click />
  <WorksController />
</div>

<style>
</style>
