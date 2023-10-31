<script lang="ts">
  import VanillaTilt from 'vanilla-tilt';
  import type { IProject } from '$lib/constants';
  import styles from './ProjectTile.module.scss';
  import { onMount } from 'svelte';

  let projectCard: HTMLDivElement;

  export let project: IProject = {
    name: '',
    tech: [],
    image: '',
    blurImage: '',
    description: '',
    gradient: ['#FFFFFF', '#000000'],
    url: '',
  };
  export let animationEnabled: Boolean;
  const {
    name,
    tech,
    image,
    blurImage,
    description,
    gradient: [stop1, stop2],
  } = project;

  function getImg(atech: string) {
    return `/projects/tech/${atech}.svg`;
  }
  onMount(() => {
    VanillaTilt.init(projectCard!, {
      max: 5,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      gyroscope: false,
    });
  });
</script>

<a
  href="{project.url}"
  target="_blank"
  rel="noreferrer"
  class="link overflow-hidden rounded-3xl snap-start"
  style="
    maxWidth: animationEnabled ? 'calc(100vw - 2rem)' : 'calc(100vw - 4rem)',
    flex: '1 0 auto',
    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
  "
>
  <div
    bind:this="{projectCard}"
    class="ProjectTile rounded-3xl relative p-6 flex-col flex justify-between max-w-full"
    style="{`background: linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)`}"
  >
    <img
      src="/project-bg.svg"
      alt="Project"
      layout="fill"
      class="absolute w-full h-full top-0 left-0 opacity-20"
    />
    <img
      placeholder="blur"
      blurDataURL="{blurImage}"
      src="{image}"
      alt="{name}"
      layout="fill"
      class="ProjectImg z-0"
    />
    <div
      class="absolute top-0 left-0 w-full h-20"
      style="{`background: linear-gradient(180deg, ${stop1} 0%, rgba(0,0,0,0) 100%)`}"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-full h-32"
      style="{`background: linear-gradient(0deg, ${stop1} 10%, rgba(0,0,0,0) 100%),`}"
    ></div>
    <h1
      class="text-2xl sm:text-3xl z-10 pl-2"
      style=" transform:'translateZ(3rem)'"
    >
      {name}
    </h1>
    <div
      class="techIcons w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden"
    >
      <div class="flex flex-col pb-8">
        {#each tech as atech, i}
          <div class:ml-16="{i % 2 === 0}" class="mb-4">
            <img
              src="{getImg(atech)}"
              alt="{atech}"
              height="{45}"
              objectFit="contain"
              width="{45}"
            />
          </div>
        {/each}
      </div>
    </div>
    <h2
      class="text-lg z-10 tracking-wide font-medium"
      style="{'transform: "translateZ(0.8rem)" '}"
    >
      {description}
    </h2>
  </div>
</a>

<style lang="scss">
  .ml-16 {
    @apply ml-16;
  }

  .ProjectTile {
    transform: perspective(1000px);
    transform-style: preserve-3d;
    background: black;
    width: 38rem;
    height: 22rem;

    @media (min-width: 768px) {
      height: 26rem;
    }

    img {
      object-fit: cover;
    }
  }

  .ProjectImg {
    @apply absolute top-0 rounded-xl shadow-xl;
    right: 2rem !important;
    bottom: unset !important;
    left: unset !important;
    transform: rotate(-22.5deg);
    width: 16.8rem !important;
    min-width: unset !important;
    height: unset !important;
    max-height: unset !important;
    object-fit: contain !important;
  }

  .techIcons {
    transform: rotate(-22.5deg) translateZ(2rem);
  }
</style>
