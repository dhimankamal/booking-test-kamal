<script>
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import Button from "$lib/components/ui/Button/Button.svelte";
  import DropdownIcon from "$lib/assets/svg/chevron-down.svg";
  import PinnedIcon from "$lib/assets/svg/pinned.svg";
  import Statuspinned from "$lib/assets/icons/pinned.svg";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  import MoreIcon from "$lib/assets/svg/more-actions.svg";
  import Badge from "$lib/components/ui/Badges/Badge.svelte";
  import { PoitionsColor } from "$lib/utils/utils";
  import MobileRow from "./MobileRow.svelte";

  let items = [
    {
      performer: {
        image: "/images/avatar.png",
        name: "Dana Gould",
      },
      status: "pinned",
      position: "HOST",
      set: "10",
      note: "Can I go up early?",
      id: 1,
    },
  ];
</script>

<section class=" space-y-6">
  <div class="flex justify-between items-center">
    <div class=" flex items-center">
      <img src={PinnedIcon} alt="Before Icon here" class="mr-2" />
      <h3 class="text-2xl text-Text-Tartiary">Pinned</h3>
    </div>
    <div>
      <Button
        className="w-full md:w-auto"
        strokebtn={true}
        afterIcon={DropdownIcon}>Action</Button
      >
      <Dropdown>
        <DropdownItem>Update</DropdownItem>
        <DropdownItem>Add</DropdownItem>
      </Dropdown>
    </div>
  </div>

  <div class="hidden md:block">
    <Table hoverable={true} {items}>
      <TableHead
        class=" bg-BG-Secondary text-sm font-normal text-Text-Tartiary"
      >
        <TableHeadCell class="py-6 rounded-tl-lg capitalize font-normal"
          >Performer</TableHeadCell
        >
        <TableHeadCell
          class="font-normal"
          sort={(a, b) => a.type.localeCompare(b.type)}>Status</TableHeadCell
        >
        <TableHeadCell
          class="font-normal"
          sort={(a, b) => a.make - b.make}
          defaultDirection="desc">Position</TableHeadCell
        >
        <TableHeadCell
          class="font-normal"
          sort={(a, b) => a.make - b.make}
          defaultDirection="desc">Set</TableHeadCell
        >
        <TableHeadCell
          class="font-normal"
          sort={(a, b) => a.make - b.make}
          defaultDirection="desc">Notes</TableHeadCell
        >
        <TableHeadCell class="rounded-tr-lg">
          <span class="sr-only">Notes</span>
        </TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass=" border-BG-Secondary">
        <TableBodyRow slot="row" let:item>
          <TableBodyCell class=" max-w-48">
            <div class="flex items-center gap-4 w-full">
              <span class="text-Text-Tartiary">::</span>
              <img src={item.performer.image} alt="" />
              <p class=" overflow-hidden whitespace-pre-wrap text-sm">
                {item.performer.name}
              </p>
            </div>
          </TableBodyCell>
          <TableBodyCell
            ><Badge size="medium" icon={Statuspinned} status={item.status}
              >{item.status}</Badge
            ></TableBodyCell
          >
          <TableBodyCell class="opacity-30"
            ><Badge
              size="large"
              bgColor={PoitionsColor[item.position].bgColor}
              textColor="#FFFFFF">{item.position}</Badge
            ></TableBodyCell
          >
          <TableBodyCell class="opacity-30">{item.set}</TableBodyCell>
          <TableBodyCell class="opacity-30">{item.note}</TableBodyCell>
          <TableBodyCell class=" flex items-end justify-end">
            <button
              class=" grid place-content-center p-2 bg-BG-Secondary rounded-lg"
            >
              <img src={MoreIcon} alt="more-actions" class="" />
            </button>
          </TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </Table>
  </div>
  <div class="md:hidden">
    {#each items as item}
      <MobileRow data={item} />
    {/each}
  </div>
</section>
