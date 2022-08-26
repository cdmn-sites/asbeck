<script>
  import './style.css'
  import 'virtual:uno.css'
  import { fade } from 'svelte/transition'
  import { goto, afterNavigate } from '$app/navigation'

  let navShown
  let scrollY = 0, oldScrollY= 0
  let transitioning = true
  
  $: {
    navShown = scrollY <= oldScrollY
    oldScrollY = scrollY
  }
  
  function transition(ev) {
    if (ev.target.dataset.fslightbox) return
    if (ev.target.parentNode.dataset.fslightbox) return
    const href = ev.target.href || ev.target.parentNode.href
    if (href) {
      ev.preventDefault()
      if (transitioning) return
      transitioning = true
      setTimeout(function() {
        console.log(href)
        if (href.includes(document.location.host)) goto(href)
        else window.location.href = href
      }, 600)
    }
  }

  afterNavigate(function() {
    transitioning = false
  })
</script>

<svelte:window bind:scrollY />
<svelte:body on:click={transition} />

{#if transitioning}
  <div transition:fade={{duration:600}} class="fixed w-full h-screen bg-white z-200" />
{/if}

<nav class:navShown={navShown || scrollY == 0} class:top={scrollY == 0}>
  <a href="/" class="brand">
    <img src="/logo.png" alt="Mark Asbeck Grundbesetz" class="p-4 h-20 md:p-8 md:h-32">
  </a>
</nav>


<div class="relative">
  <slot />
</div>


<footer class="container mx-auto mt-12">
  <a href="legal" class="text-size-11px text-center text-sm">Datenschutz / Impressum</a>
  
  <div class="text-size-11px border-t border-black mt-2 mb-12 pt-3 md:flex">
    <div class="relative">
      Heinrich-Brüning-Straße 16, 53113 Bonn, Tel: 0700-00ASBECK, Tel: +49 228-659988, E-Mail: <a href="info@asbeck.com">info@asbeck.com</a>
    </div>
    <div class="text-right grow">
      &copy; 2022 MAG
    </div>
  </div>

</footer>

<style>
nav {
  top: -132px;
  position: fixed;
  z-index: 1000;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
}
nav.top {
  background-color: transparent;
}
nav.navShown {
  top: 0;
}
nav img {
  transition: all 0.5s ease-in-out;
  filter: invert(1);
}
nav.top img {
  filter: invert(0);
}
img {
  object-position: center;
}

</style>