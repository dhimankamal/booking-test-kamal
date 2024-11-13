<script>

    import { TableBodyCell } from "flowbite-svelte";
    import Profile from "$lib/assets/icons/profile.svg";
    import PlusIcon from "$lib/assets/icons/plus.svg";
  import MoreIcon from "$lib/assets/svg/more-actions.svg";

</script>

<TableBodyCell class=" max-w-48">
    <div class="flex items-center gap-4 w-full">
      <span class="text-Text-Tartiary invisible">::</span>
      <img src={Profile} alt="hello" />
     <button class="border border-[#D4D6D9] px-3 py-2 rounded-[8px] font-[14px] text-[#0284FE] flex gap-2">
      <img src={PlusIcon} alt=""/>
      Add</button>
    </div>
  </TableBodyCell>
  <TableBodyCell
    ></TableBodyCell
  >
  <TableBodyCell
    ></TableBodyCell
  >
  <TableBodyCell>30</TableBodyCell>
  <TableBodyCell></TableBodyCell>
  <TableBodyCell class=" flex items-end justify-end">
    <button
      class=" grid place-content-center p-2 bg-BG-Secondary rounded-lg"
    >
      <img src={MoreIcon} alt="more-actions" class="" />
    </button>
  </TableBodyCell>
