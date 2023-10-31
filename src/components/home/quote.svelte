<script lang="ts">
  import { Linear, gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onDestroy, onMount } from 'svelte';

  let quoteRef: HTMLDivElement;
  let targetSection: HTMLElement;

  let willChange = false;
  let quoteAnimationRef: ScrollTrigger;

  const initQuoteAnimation = (
    quoteRef: HTMLDivElement,
    targetSection: HTMLElement,
  ): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef, { opacity: 0, duration: 2 })
      .to(quoteRef.querySelector('.text-strong'), {
        backgroundPositionX: '100%',
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: targetSection,
      start: 'center bottom',
      end: 'center center',
      scrub: 0,
      animation: timeline,
      onToggle: (self) => (willChange = self.isActive),
    });
  };

  onMount(() => {
    quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);
  });

  onDestroy(() => {
    quoteAnimationRef && quoteAnimationRef.kill;
  });
</script>

<section class="relative w-full select-none" bind:this="{targetSection}">
  <div class="tall:py-60 section-container py-72">
    <h1
      bind:this="{quoteRef}"
      class:will-change-opacity="{willChange}"
      class="font-medium text-4xl md:text-5xl text-center"
    >
      I have a <span class="text-strong font-bold">strong</span> obsession for attention
      to detail.
    </h1>
  </div>
</section>
