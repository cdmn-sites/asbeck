<script>
  import { fly } from 'svelte/transition'
  
  export let title
  export let tagline
  export let video
  
  let scrollY

  function full() {
    const vid = document.getElementsByTagName('video')[0];
    if (vid) {
      vid.muted = false
      if (vid.webkitEnterFullscreen) {
        vid.webkitEnterFullscreen()
      }
      else if (vid.requestFullscreen) {
        vid.requestFullscreen()
      }

    }
  }
</script>

<svelte:window bind:scrollY/>

<video style="transform:translateY({scrollY/3}px)" class="bg-dark object-cover h-screen w-full absolute" preload="auto" autoplay="autoplay" playsinline muted loop="loop" poster="API_URL/blobs/{video}?w=1920"  >
  <source src="API_URL/blobs/{video}" type="video/mp4">
</video>

<section class="flex h-screen relative text-center text-white">
  <div class="uppercase tracking-widest" in:fly={{y: 80, duration: 1200, delay: 200}}>
    {tagline}
  </div>

  <div class="px-2 text-size-10 md:text-size-18" in:fly={{y: 80, duration: 1200, delay: 300}}>
    {title}
  </div>

  <button on:click={full} class="mt-12 bordered" in:fly={{y: 80, duration: 1200, delay: 400}}>
    <span class="i-clarity-volume-up-line text-size-6 align-middle relative -pb-3px -top-2px h-6"></span> Play full screen
  </button>
</section>
