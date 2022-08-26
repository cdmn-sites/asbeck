<script>
import { onMount } from "svelte";

export let src

let loaded = false

onMount(function() {
  const el = new Image()
  el.onload = function(ev) {
    loaded = true
  }
  el.src = src
})

</script>

{#if loaded}
  <slot {src} />
{/if}