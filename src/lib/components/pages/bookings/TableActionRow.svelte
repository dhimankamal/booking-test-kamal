<script>
  import { TableBodyCell } from "flowbite-svelte";
  import Profile from "$lib/assets/icons/profile.svg";
  import PlusIcon from "$lib/assets/icons/plus.svg";
  import MoreIcon from "$lib/assets/svg/more-actions.svg";
  import Button from "$lib/components/ui/Button/Button.svelte";
</script>

<TableBodyCell class=" max-w-48 border-y border-BG-Tartiary">
  <div class="flex items-center gap-4 w-full">
    <span class="text-Text-Tartiary invisible">::</span>
    <img src={Profile} alt="hello" />
    <Button strokebtn={true} beforeIcon={PlusIcon} className="!text-brand-Primary"
    >Add</Button
  >
  </div>
</TableBodyCell>
<TableBodyCell class="border-y border-BG-Tartiary"></TableBodyCell>
<TableBodyCell class="border-y border-BG-Tartiary"></TableBodyCell>
<TableBodyCell class="border-y border-BG-Tartiary">30</TableBodyCell>
<TableBodyCell class="border-y border-BG-Tartiary"></TableBodyCell>
<TableBodyCell class=" flex items-end justify-end">
  <button class=" grid place-content-center p-2 bg-BG-Secondary rounded-lg">
    <img src={MoreIcon} alt="more-actions" class="" />
  </button>

</TableBodyCell>
