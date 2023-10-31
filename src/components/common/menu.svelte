<script lang="ts">
  import { MENULINKS } from '../../lib/constants';

  export let setmenuVisible: (arg0: boolean) => void;
</script>

<template>
  <section
    class="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
    style="{` visibility: 'hidden' `}"
  >
    <div class="flex-none overflow-hidden flex items-center justify-center">
      <div
        class="text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen"
      >
        <ul class="list-none py-4 px-0 m-0 block max-h-screen" role="menu">
          {#each MENULINKS as el}
            <li class="p-0 m-6 text-2xl block" role="menuitem">
              <a
                class="link relative inline font-bold text-5xl duration-300 hover:no-underline"
                href="{`#${el.ref}`}"
                on:click="{() => setmenuVisible(false)}"
              >
                {el.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
</template>
