<script lang="ts">
  import { gsap, Linear } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';

  let quoteRef: HTMLDivElement;
  let targetSection: HTMLElement;
  let willChange = false;

  const initAboutAnimation = (
    quoteRef: HTMLDivElement,
    targetSection: HTMLElement,
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });
    timeline
      .fromTo(
        quoteRef.querySelector('.about-1'),
        { opacity: 0.2 },
        { opacity: 1 },
      )
      .to(quoteRef.querySelector('.about-1'), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.querySelector('.about-2'),
        { opacity: 0.2 },
        { opacity: 1 },
        '<',
      )
      .to(quoteRef.querySelector('.about-2'), {
        opacity: 0.2,
        delay: 1,
      });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection,
      start: 'center 80%',
      end: 'center top',
      scrub: 0,
      animation: timeline,
      onToggle: (self) => (willChange = self.isActive),
    });
    return scrollTriggerInstance;
  };

  onMount(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(
      quoteRef,
      targetSection,
    );

    return aboutScrollTriggerInstance.kill;
  });
</script>

<section
  class="{`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container`}"
  bind:this="{targetSection}"
>
  <h1
    bind:this="{quoteRef}"
    class="font-medium text-3xl sm:text-4xl md:text-6xl"
  >
    <span
      class="{`about-1 leading-tight ${
        willChange ? 'will-change-opacity' : ''
      }`}"
    >
      I am a passionate UI Engineer who bridges the gap between development and
      design.{' '}
    </span>
    <span
      class="{`about-2 leading-tight ${
        willChange ? 'will-change-opacity' : ''
      }`}"
    >
      I take responsibility to craft a good user experience using modern
      frontend architecture.
    </span>
  </h1>
</section>
