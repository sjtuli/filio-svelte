<script lang="ts">
  import { Linear, gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { MENULINKS, SKILLS } from '$lib/constants';
  import { onDestroy, onMount } from 'svelte';
  import RenderSkillColumn from '../common/render-skill-column.svelte';

  let targetSection: HTMLDivElement;
  let willChange = false;
  let revealAnimationRef: ScrollTrigger;

  const initRevealAnimation = (
    targetSection: HTMLDivElement,
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.querySelectorAll('.seq'),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      '<',
    );

    return ScrollTrigger.create({
      trigger: targetSection.querySelector('.skills-wrapper'),
      start: '100px bottom',
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => (willChange = self.isActive),
    });
  };

  onMount(() => {
    revealAnimationRef = initRevealAnimation(targetSection);
  });
  onDestroy(() => {
    revealAnimationRef && revealAnimationRef.kill;
  });
</script>

<section class="relative">
  <div
    class="absolute right-0 hidden max-w-xs w-1/5 justify-end -bottom-1/3 md:flex"
  >
    <img
      src="/pattern-r.svg"
      loading="lazy"
      height="{700}"
      width="{320}"
      alt="pattern"
    />
  </div>
  <div class="absolute left-0 hidden max-w-xs w-1/12 -bottom-3.5 md:block">
    <img
      src="/pattern-l.svg"
      loading="lazy"
      height="{335}"
      width="{140}"
      alt="pattern"
    />
  </div>
  <div
    class="w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center"
    id="{MENULINKS[2].ref}"
    bind:this="{targetSection}"
  >
    <div class="skills-wrapper flex flex-col">
      <div class="flex flex-col">
        <p class="section-title-sm seq">SKILLS</p>
        <h1 class="section-heading seq mt-2">My Skills</h1>
        <h2 class="seq mt-2 w-full text-2xl md:max-w-2xl">
          I like to take responsibility to craft aesthetic user experience using
          modern frontend architecture.{' '}
        </h2>
      </div>
      <div class="mt-10">
        <RenderSkillColumn
          title="FRONTEND DEVELOPMENT"
          {willChange}
          skills="{SKILLS.frontend}"
        ></RenderSkillColumn>
      </div>
      <div class="mt-10 flex flex-wrap">
        <div class="mb-6 mr-6">
          <RenderSkillColumn
            title="User Interface, User Experience Design"
            {willChange}
            skills="{SKILLS.userInterface}"
          ></RenderSkillColumn>
        </div>
        <div>
          <RenderSkillColumn
            title="Other Skills"
            {willChange}
            skills="{SKILLS.other}"
          ></RenderSkillColumn>
        </div>
      </div>
    </div>
  </div>
</section>
