<div id="NoteList">
  <p>Notes in: {projectDir}</p>
  {#each notes as note}
    <Note notefile={note} editFile={editFile} deleteNote={deleteNote} /> 
  {:else}
    <p>Loading Notes....</p>
  {/each}
  <div id="addNote">
    <label for="filename">New File Name:</label>
    <input id="filename" type="text" bind:value={newfilename} style="background-color: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; color: {darkmode ? styles.DMcolor : styles.color};" />
    <button on:click={createNewNote} style="background-color: {darkmode ? styles.DMbkgrdcolor : styles.bkgrdcolor}; color: {darkmode ? styles.DMcolor : styles.color};">New Note</button>
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
  export let darkmode;
  export let styles;
  
  let newfilename = '';
  let notes = [];

  onMount(() => {
    getProjectNotes(projectDir);
  });

  function createNewNote() {
    if(newfilename !== '') {
      fig.stream('/usr/bin/touch "' + projectDir + '/.notes/' + newfilename + '";', (data, err) => {
        notes.push(projectDir + '/.notes/' + newfilename);
        notes = notes;
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
      var lsOutput = [];
      fig.stream('/bin/ls "' + pjdir + '/.notes/"', (data, err) => {
        if(err) {
          fig.stream('/bin/mkdir "' + pjdir + '/.notes/"', (data, err) => {
            notes = [];
          });
        } else {
          if((data !== null) && (data.includes('No such file'))) {
            fig.stream('/bin/mkdir "' + pjdir + '/.notes/"', (data, err) => {
              notes = [];
            });
          } else {
            if(data === null) {
              notes = lsOutput.filter(item => ((item[0] !== '.')&&(item !== ''))).map(item => {
                return(pjdir + "/.notes/" + item);
              });
            } else {
              data = data.split('\n');
              if(data.length > 1) {
                data.forEach(item => lsOutput.push(item));
              } else {
                lsOutput.push(data[0]);
              }
            }
          }
        }
      });
    }
  }

  function deleteNote(note) {
    fig.stream('/bin/rm "' + note + '"', (data,err) => {
      notes = notes.filter(item => !item.includes(note));
    });
  }
</script>
