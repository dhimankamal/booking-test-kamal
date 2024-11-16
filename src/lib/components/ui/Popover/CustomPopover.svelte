
<script>
  // @ts-nocheck
  import { Popover } from "flowbite-svelte";

  export let triggeredById = "";
  export let placement = "top";
  export let trigger = "hover";
  export let border = false;
  export let arrow = false;
</script>

<Popover
  {arrow}
  {placement}
  triggeredBy={`#${triggeredById}`}
  {trigger}
  {border}
  defaultClass="text-sm rounded-lg px-3 py-4  border border-stroke-Primary shadow-sm {$$restProps.class}"
>
  <slot />
</Popover>

