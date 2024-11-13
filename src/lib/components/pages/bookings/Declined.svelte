<script>
  import DeclinedIcon from "$lib/assets/svg/declined.svg";
  import ConfirmIcon from "$lib/assets/icons/confirm.svg";
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
  import CustomPopover from "$lib/components/ui/Popover/CustomPopover.svelte";
  import { PoitionsColor } from "$lib/utils/utils";
  import MobileRow from "./MobileRow.svelte";

  let items = [
    {
      performer: {
        image: "/images/avatar.png",
        name: "Dana Gould",
      },
      status: "declined",
      position: "HOST",
      icon: DeclinedIcon,
      set: "10",
      note: "Can I go up early?",
      id: 1,
    },
    {
      performer: {
        image: "/images/avatar.png",
        name: "Dana Gould",
      },
      status: "declined",
      position: "HOST",
      set: "10",
      icon: DeclinedIcon,
      note: "Can I go up early?",
      id: 2,
    },
  ];
</script>

<section class=" space-y-6">
  <div class="flex justify-between items-center">
    <div class=" flex items-center">
      <img src={DeclinedIcon} alt="Before Icon here" class="mr-2" />
      <h3 class="text-2xl text-Text-Tartiary">Declined</h3>
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
      <TableBody tableBodyClass=" border-BG-Secondary ">
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
            ><Badge size="medium" icon={DeclinedIcon} status={item.status}
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
              data-popover-target={`popover-no-arrow-${item.id}`}
              data-popover-placement="right"
              data-popover-trigger="click"
            >
              <img src={MoreIcon} alt="more-actions" class="" />
            </button>

            <CustomPopover id={`popover-no-arrow-${item.id}`}>
              <div class="flex flex-col gap-2 text-Tartiary text-sm">
                <button
                  class=" text-left hover:bg-BG-Secondary p-1 font-normal rounded-md text-sm text-Text-Tartiary hover:text-Text-Primary"
                  >Message performer</button
                >
                <button
                  class=" text-left hover:bg-BG-Secondary p-1 font-normal rounded-md text-sm text-Text-Tartiary hover:text-Text-Primary"
                  >View invitation history</button
                >
              </div>
            </CustomPopover>
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
