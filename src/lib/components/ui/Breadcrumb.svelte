<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import BreadcrumbArrow from "$lib/assets/svg/arrow-up.svg";
  import BreadcrumbHome from "$lib//assets/svg/home.svg";

  interface Breadcrumb {
    name: string;
    href?: string; // href is optional
  }

  export let data: Breadcrumb[] = [];

  const dispatch = createEventDispatcher<{ click: Breadcrumb }>();

  function handleClick(crumb: Breadcrumb) {
    dispatch("click", crumb);
  }
</script>

<div>
  {#if data.length > 0}
    <nav class="inline-flex text-sm leading-[14px] font-medium">
      {#each data as crumb, index}
        <div class="flex items-center">
          {#if index > 0}
            <img src={BreadcrumbArrow} alt="" class="w-3 h-3 mx-2.5" />
          {/if}
          {#if index === 0}
            <img src={BreadcrumbHome} alt="" class="w-3 h-3 mr-2.5" />
          {/if}
          {#if index === data.length - 1}
            <span class="text-Text-Tartiary cursor-default">{crumb.name}</span>
          {:else}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <span class="text-Text-Secondary no-underline cursor-pointer">
              <a
                href={crumb.href}
                on:click={() => handleClick(crumb)}
                class="hover:no-underline"
              >
                {crumb.name}
              </a>
            </span>
          {/if}
        </div>
      {/each}
    </nav>
  {/if}
</div>
