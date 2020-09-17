{#if show}
  <slot>
    <p>No information for this button</p>
  </slot>
{/if}
<slot name="extra"></slot>
{#if darkmode}
<button on:click={buttonFunction} style="background-color: {styles.DMbkgrdcolor}; color: {styles.DMcolor};">{buttonName}</button>
{:else}
<button on:click={buttonFunction} style="background-color: {styles.bkgrdcolor}; color: {styles.color};">{buttonName}</button>
{/if}

<style>
</style>

<script>
  export let show;
  export let buttonFunction;
  export let buttonName;
  export let styles;
  export let darkmode;
</script>
