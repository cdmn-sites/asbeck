<script>
  import FullVideo from '$lib/components/full_video.svelte';

  import { onMount } from 'svelte';
  import { page } from '$app/stores'

  export let data
  let projects = data.projects
  $: project = projects.find(p => p.slug === $page.params.slug)

  onMount(async function() {
    await import('$lib/vendor/fslightbox/fslightbox.js')
    refreshFsLightbox()
  })


</script>

<FullVideo {...project} />

<div class="bg-white relative pt-16 md:pt-32 lg:text-size-0.8vw ">

  <div class="pb-16 md:pb-32 text-center text-size-4 lg:text-size-6 mx-8 lg:mx-1/6 leading-5 lg:leading-8">
    {project.description}
  </div>

<section class="grid lg:grid-cols-2  container mx-auto gap-6 items-start">
  <div class="overflow-hidden whitespace-nowrap  h-400px lg:h-500px relative">
    <!-- {#each project.gallery || [] as image}
      <a data-fslightbox="gallery" class="inline-block w-full align-top relative h-full" href="SERVER_URL/blobs/{image.image}?w=1920">
        <img class="object-cover object-center w-full h-full relative" src="SERVER_URL/blobs/{image.image}?w=800" alt="" />
      </a>
    {/each} -->
    <a data-fslightbox="gallery" class="inline-block w-full align-top relative h-full" href="SERVER_URL/blobs/{project.main_image}?w=1920">
      <img class="object-cover object-center w-full h-full relative" src="SERVER_URL/blobs/{project.main_image}?w=800" alt="" />
    </a>
  </div>
  <div class=" tracking-wide md:pl-8">
    <div class="grid grid-cols-2 gap-8">
      <div class="border-b mb-8 text-size-3 tracking-2px pb-2">
        OVERVIEW
      </div>
      <!-- <div class="border-b text-center mb-8 text-size-3 tracking-2px pb-2 border-black/20 text-black/40">
        DATA
      </div> -->
    </div>
    <div class="md:text-size-1.5em mt-4  uppercase text-gray tracking-widest">
      {project.tagline}
    </div>
    <div class="text-size-2em md:text-size-3.5em">
      {project.title}
    </div>
    <div class="mt-6 text-#555 leading-1.6em text-black/50">
      {@html project.datapoints}
    </div>
  </div>
</section>

<section class="bg-light py-32 mt-32">
  <h2 class="text-center font-normal text-size-4 tracking-widest text-gray uppercase mb-3">Discover more</h2>
  <h1 class="text-center font-normal md:text-size-12 tracking-wide mb-10">Explore our Projects</h1>
  <div class="container mx-auto grid md:grid-cols-3 gap-4">
    {#each projects.filter((p) => p.construction_status == 'construction').filter(p => p.id !== project.id) as fp, i}
      <a class="mb-6" href="/projects/{fp.slug}">
        <img src="SERVER_URL/blobs/{fp.main_image}?w=600" class="object-cover w-full h-80" alt="" />
        <h2 class="text-black text-size-4 mt-2 font-normal uppercase tracking-wide">{fp.title}</h2>
      </a>
    {/each}
  </div>
</section>
</div>