<script>
  export let DiskSpace;
  export let partitions = [];

  const FreeSpace = () => {
    let UsedSpace = 0;
    for (let index = 0; index < partitions.length; index++) {
      UsedSpace += partitions[index].size;
    }
    return UsedSpace;
  };
</script>

<div>
  {#each partitions as partition}
    <i style="height: {(partition.size * 100) / DiskSpace}%;">
      {partition.label}
    </i>
  {/each}
  <i style="height:calc({((DiskSpace - FreeSpace()) * 100) / DiskSpace}%)"
    >{DiskSpace - FreeSpace()}</i
  >
</div>

<style>
  div {
    display: block;
    margin-top: 10px;
    height: 95%;
    width: 100%;
  }
  i {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
  }
</style>
