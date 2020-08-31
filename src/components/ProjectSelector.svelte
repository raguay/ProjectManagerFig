<div id='projectSelect'>
  <select
    bind:value={project}
    on:change={changeProject}
  >
    {#each projects as proj}
      <option value={proj[0]}>{proj[0]}</option>
    {/each}
  </select>
</div>

<style>
</style>

<script>
  import { createEventDispatcher } from 'svelte';

  export let project = '';
  export let projects = [];
  
  const dispatch = createEventDispatcher();
  
  function changeProject() {
    dispatch('projectChange', project);
  }
</script>
