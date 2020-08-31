{#if show}
  <slot>
    <p>No information for this button</p>
  </slot>
{/if}
<button on:click={buttonFunction}>{buttonName}</button>

<style>
</style>

<script>
  export let show;
  export let buttonFunction;
  export let buttonName;
</script>
