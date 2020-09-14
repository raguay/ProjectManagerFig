<div id="NoteList">
  <p>Notes in: {projectDir}</p>
  {#each notes as note}
    <Note notefile={note} editFile={editFile} deleteNote={deleteNote} />
  {:else}
    <p>Loading Notes....</p>
  {/each}
  <div id="addNote">
    <label for="filename">New File Name:</label>
    <input id="filename" type="text" bind:value={newfilename} />
    <button on:click={createNewNote}>New Note</button>
  </div>
</div>

<style>
  #NoteList {
    display: flex;
    flex-direction: column;
  }

  #addNote {
    margin: 10px 0px 0px 0px;
  }
</style>

<script>
  import { onMount } from 'svelte';

  import Note from './Note.svelte';

  export let projectDir;
  export let editFile;
  export let fig;
  
  let newfilename = '';
  let notes = [];

  onMount(() => {
    getProjectNotes(projectDir);
  });

  function createNewNote() {
    if(newfilename !== '') {
      fig.execute('/usr/bin/touch "' + projectDir + '/.notes/' + newfilename + '";', (data, err) => {
        notes = notes.push(projectDir + '/.notes/' + newfilename);
        newfilename = '';
      });
    }
  }

  function getProjectNotes(pjdir) {
    if((typeof pjdir !== 'undefined') &&
       (pjdir !== '')) {
      //
      // Get a list of note files in the project.
      //
      console.log('/bin/ls "' + pjdir + '/.notes/"');
      fig.execute('/bin/ls "' + pjdir + '/.notes/"', (data, err) => {
        if(!err) {
          if(data.includes('No such file')) {
            fig.execute('/bin/mkdir "' + pjdir + '/.notes/"', (data, err) => {
              notes = [];
            });
          } else {
            notes = data.split('\n').filter(item => ((item[0] !== '.')&&(item !== ''))).map(item => {
              return(pjdir + "/.notes/" + item);
            });
          }
        }
      });
    }
  }

  function deleteNote(note) {
    fig.execute('/bin/rm "' + note + '"', (data,err) => {
      notes = notes.filter(item => !item.includes(note));
    });
  }
</script>
