<div id='projectSelect' style="background-color: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; color: {darkmode ? styles.DMcolor : styles.color};">
  <select
    bind:value={project}
    on:change={changeProject}
    style="background-color: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; color: {darkmode ? styles.DMcolor : styles.color};"
  >
    {#each projects as proj}
      <option value={proj[0]}
              style="background-color: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; color: {darkmode ? styles.DMcolor : styles.color};"
      >{proj[0]}</option>
    {/each}
  </select>
</div>

<style>
</style>

<script>
  import { createEventDispatcher } from 'svelte';

  export let project = '';
  export let projects = [];
  export let darkmode;
  export let styles;
  
  const dispatch = createEventDispatcher();
  
  function changeProject() {
    dispatch('projectChange', project);
  }
</script>
