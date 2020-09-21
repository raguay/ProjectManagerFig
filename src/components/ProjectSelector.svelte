<div id='projectSelect' style="--border: 2px solid {darkmode ? styles.DMcolor : styles.color}; --itemHoverBG: {darkmode ? styles.DMhvbkgrdcolor : styles.hvbkgrdcolor}; --background: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; --listBackground: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; background-color: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; --itemColor: {darkmode ? styles.DMcolor : styles.color}; color: {darkmode ? styles.DMcolor : styles.color};">
  <Select {items} selectedValue={project} listPlacement={'bottom'} on:select={changeProject}>
  </Select>
</div>

<style>
  #projectSelect {
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import Select from 'svelte-select';

  export let project;
  export let projects;
  export let darkmode;
  export let styles;
  
  let items;

  const dispatch = createEventDispatcher();

  $: items = createList(projects);
 
  function changeProject(proj) {
    dispatch('projectChange', proj.detail.value);
  }

  function createList(things) {
    return things.map(item => { 
      return {
        value: item[0], 
        label: item[0],
        group: 'projects'
      }
    });
  }
</script>
