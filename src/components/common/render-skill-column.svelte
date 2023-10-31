<script lang="ts">
  export let skills: string[];
  export let willChange: boolean;
  export let title: string;
</script>

<h3 class="section-title-sm seq mb-4">{title}</h3>
<div class:will-change-opacity="{willChange}" class="flex flex-wrap seq">
  {#each skills as skill}
    <img
      src="{`/skills/${skill}.svg`}"
      alt="{skill}"
      width="{76}"
      height="{76}"
      class="skill"
    />
  {/each}
</div>
