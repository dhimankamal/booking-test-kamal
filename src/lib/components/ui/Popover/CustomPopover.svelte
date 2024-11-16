<script>
  import { onMount } from "svelte";
  import { Popover } from "flowbite-svelte";

  export let id = "";

  onMount(() => {
    document.querySelectorAll("[data-popover-target]").forEach(button => {
      const targetId = button.getAttribute("data-popover-target");
      const popoverEl = document.getElementById(targetId);

      if (popoverEl) {
        new Popover(popoverEl);
      }
    });
  });
</script>

<div
  data-popover
  {id}
  role="tooltip"
  class="absolute z-10 invisible flex text-sm text-gray-500 transition-opacity duration-300 bg-white border border-[#D4D6D9] px-3 py-4 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 {$$restProps.class}"
>
  <slot />
</div>
