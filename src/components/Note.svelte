<div class="note">
  <span class="delete" on:click={() => { deleteNote(notefile); }}>❌</span>
  <span class="edit"   on:click={() => { editFile(notefile);   }}>✏️</span>
  {noteName}
</div>

<style>
  .note {
    display: flex;
    flex-direction: row;
    margin: 10px 0p 0px 0px;
  }

  .delete {
    margin: 0px 5px;
    cursor: pointer;
  }

  .edit {
    margin: 0px 5px;
    cursor: pointer;
  }
</style>

<script>
  export let editFile;
  export let notefile;
  export let deleteNote;

  let noteName = '';
  
  ; noteName = filename(notefile);

  function filename(fn) {
    var parts = fn.split('\/');
    return parts[parts.length-1];
  }
</script>
