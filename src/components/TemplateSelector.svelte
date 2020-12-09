<div id='templateSelect' style="--border: 2px solid {darkmode ? styles.DMcolor : styles.color}; --itemHoverBG: {darkmode ? styles.DMhvbkgrdcolor : styles.hvbkgrdcolor}; --background: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; --listBackground: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; background-color: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; --itemColor: {darkmode ? styles.DMcolor : styles.color}; color: {darkmode ? styles.DMcolor : styles.color};">
  <Select {items} selectedValue={template} listPlacement={'bottom'} on:select={changeTemplate}>
  </Select>
</div>

<style>
  #templateSelect {
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import Select from 'svelte-select';

  export let template;
  export let templates;
  export let darkmode;
  export let styles;
  
  let items;

  const dispatch = createEventDispatcher();

  $: items = createList(templates);
 
  function changeTemplate(templt) {
    dispatch('templateChange', templt.detail.value);
  }

  function createList(things) {
    return things.map(item => { 
      return {
        value: item.name, 
        label: item.name,
        group: 'templates'
      }
    });
  }
</script>
