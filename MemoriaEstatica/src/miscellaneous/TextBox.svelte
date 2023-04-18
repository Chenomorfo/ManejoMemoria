<script>
  export let sizeValue = 0;
  export let title = "";
  export let value = 0;
</script>

<div>
  <h1>{title}</h1>
  <input bind:value type="text" />
  <select bind:value={sizeValue}>
    <option value="KB">KB</option>
    <option value="MB">MB</option>
    <option value="GB">GB</option>
  </select>
  <button on:click>Ingresar</button>
</div>

<style>
  input {
    font-size: 1.4em;
  }
  button {
    font-size: 1.4em;
  }
  select {
    font-size: 1.4em;
  }
</style>
