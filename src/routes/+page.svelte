<script>

  import '$lib/vendor/flickity/flickity.css'

  import Preload from '$lib/components/preload.svelte'

  import { fly, slide } from 'svelte/transition'
  import { onMount } from 'svelte';

  export let data
  let projects = data.projects
  let header_video = data.header_video

  $: activeProject = projects[0]


  onMount(async function() {
    // preload all project images
    for (let project of projects) {
      const el = new Image()
      el.src = `API_URL/blobs/${project.main_image}?w=600`
    }

    await import('$lib/vendor/flickity/flickity.min.js')
    const flck = new Flickity( '.flickity', {
      // options
      cellAlign: 'left',
      contain: true,
      groupCells: true
    });

    flck.on('dragStart', () => (document.ontouchmove = e => e.preventDefault()));
    flck.on('dragEnd', () => (document.ontouchmove = () => true));

    setTimeout(function() {
      // updates flickity height after images are loaded
      window.dispatchEvent(new Event('resize'))
    }, 2000)
  })



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

<video class="object-cover h-screen w-full absolute bg-dark" preload="auto" playsinline autoplay="autoplay" muted loop="loop" >
  <!-- <source src="/blobs/{header_video}?raw" type="video/mp4"> -->
    {#if header_video}
      <source type="video/mp4" src="/blobs/{header_video}?raw">
    {:else}
      <source type="video/mp4" src="https://rheinblick-residences.de/media/movie/180210_MAG_Rheinblick_Residences_Web_2.mp4#t=7.5">

    {/if}
</video>

<section class="flex h-screen relative text-center text-white">
  
  <div class="uppercase tracking-widest" in:fly={{y: 80, duration: 1200, delay: 200}}>
    A Journey of Passion
  </div>

  <div class="px-2 text-size-10 md:text-size-18" in:fly={{y: 80, duration: 1200, delay: 400}}>
    Leading Buildings
  </div>

  <button on:click={full} class="mt-12 bordered" in:fly={{y: 80, duration: 1200, delay: 600}}>
    <span class="i-clarity-volume-up-line text-size-6 align-middle relative -pb-3px -top-2px h-6"></span> Play full screen
  </button>

</section>

<section class="text-center py-26 text-size-20px md:text-size-37px tracking-wide lg:text-size-40px">
  <p class="mb-8 mx-8">
    „Drei Dinge sind an einem Gebäude zu beachten:<br>
    dass es am rechten Fleck stehe,<br>
    dass es wohlgegründet<br>
    und dass es vollkommen ausgeführt sei.“
  </p>
  <div class="text-size-0.5em">
    <span class="relative inline-block translate-x-60% text-gray">
      &hyphen; Johann Wolfgang von Goethe
    </span>
  </div>
</section>

<!-- DESKTOP -->
<section class="pb-20 container mx-auto hidden md:flex">
  <div class="my-8 w-full w-auto pl-12 text-center">
    {#each projects.filter((p) => p.construction_status == 'construction') as project}
      <div class="button project uppercase" on:click={() => activeProject=project} class:active={activeProject==project}>
        <div class="projectname">{project.title}</div>
        <div class="underline" />
      </div>
    {/each}
  </div>

  {#if activeProject}
    {#each [activeProject] as _ (activeProject)}
      <div class="grid grid-cols-12 gap-8 mt-8 items-end max-w-full min-h-500px lg:min-h-600px relative">
        <div class="text-left px-4 col-span-5 flex flex-col">
          <div class="py-24">
            <h3 in:fly|local={{y: 40, duration: 1600}} class="projectname">
              {activeProject.title}
            </h3>
            <h4 in:fly|local={{y: 40, duration: 1600, delay: 160}} class="tagline mb-6">
              {activeProject.tagline}
            </h4>
            <p in:fly|local={{y: 40, duration: 1600, delay: 320}} class="leading-6 text-size-0.9em text-black/50">
              {activeProject.description}
            </p>
          </div>
          <a href="/projects/{activeProject.slug}" class="button bordered dark w-50%" in:fly|local={{y: 40, duration: 1600, delay: 400}}>Explore</a>
        </div>
        <div class="col-span-7 h-full overflow-hidden relative">
          <Preload src="API_URL/blobs/{activeProject.main_image}?w=600" let:src>
            <img in:fly|local={{x: 40, duration: 1600}} {src} alt={activeProject.title} class="object-cover w-full h-full absolute">  
          </Preload>
        </div>
      </div>  
    {/each}
  {/if}

</section>

<!-- MOBILE -->
<section class="mx-8 mb-20 md:hidden border-t">

  {#each projects.filter((p) => p.construction_status == 'construction') as project, index (project)}
    <div class="border-b pt-4">
      <div class="uppercase pb-4 flex space-between" on:click={() => activeProject=activeProject == project ? null : project} class:active={activeProject==project}>
        <div class="projectname grow">{project.title}</div>
        <div class="toggle relative text-size-33px -top-12px">
          <div class:-scale-y-100={activeProject == project} class="transition absolute right-0">
            <span class="i-fluent-chevron-down-20-regular" />
          </div>
        </div>
      </div>
      {#if activeProject == project}
        <div transition:slide|local>
          <img src="API_URL/blobs/{activeProject.main_image}?w=600" alt={activeProject.title} class="object-cover aspect-square w-full">  
          <div class="text-left col-span-5 flex flex-col">
            <div class="md:py-24">
              <h4 class="tagline mb-6 mt-3 !text-size-9">
                {project.tagline}
              </h4>
              <p class="mb-12 leading-6 text-size-0.9em">
                {project.description}
              </p>
            </div>
            <a href="/projects/{project.slug}" class="button mb-8 bordered dark w-50%">Explore</a>
          </div>
        </div>  
      {/if}
    </div>
  {/each}


</section>

<div class="bg-#F4F4F4">
  <section class="flex py-20 container mx-auto">
    <h3 class="mb-8">
      HOW WE DO THINGS DIFFERENTLY
    </h3>

    <div class="grid grid-cols-2 container gap-8">
        <img src="/DIFFERENT1.jpg" class="object-cover w-full min-h-600px" alt="">

        <img src="/DIFFRENT2.jpg" class="object-cover w-full min-h-600px" alt="">

    </div>

    <div class="mt-20 text-center">
      <h2 class="text-size-38px font-normal mb-12">Different in Principle</h2>
      <p class="mx-18% leading-6 text-justify">
        We are doing things differently, with an emphasis on original design and unassuming service you will feel a quiet calm throughout all our properties. With loving appreciation we are committed to sustainable practices and spaces that meld into their surroundings. Our restrained, considered luxury is the antidote to the incessant beat of the every day – the perfect destination for those who know how precious their time is and how to spend it wisely.
      </p>

    </div>
  </section>
</div>

<section class="flex py-20 container mx-auto">
  <h3 class="mb-8 text-center">
    FAMILY HOLD SUBSTANTIAL REAL&nbsp;ESTATES
  </h3>

  <div class="flickity w-full">
    {#each projects.filter((p) => p.construction_status == 'completed') as reference}
      <div class="relative reference">
        <img class="aspect-square md:aspect-auto w-full object-cover" src="API_URL/blobs/{reference.main_image}?w=400" alt="" >
        <h3 class="uppercase !text-size-12px font-normal mt-4">{reference.title}</h3>
        <!-- <h4 class="font-normal mt-2 mb-5 text-size-24px">{reference.type}</h4> -->
        <p class="text-size-11px leading-4 min-h-120px mt-4">
          {reference.description}
        </p>
        <div class="text-size-11px leading-4 mt-2  grow mb-8">
          <strong>Fakten</strong><br>
          {@html reference.datapoints}
        </div>
      </div>
    {/each}
  </div>

  
</section>

<style>
  .reference {
    margin-right: 20px;
    width: calc((20% - 16px));
  }
  @media (max-width: 1280px) {
    .reference {
      margin-right: 15px;
      width: calc((33.333% - 10px));
    }
  }
  @media (max-width: 768px) {
    .reference {
      width: calc(100%);
    }
  }

</style>