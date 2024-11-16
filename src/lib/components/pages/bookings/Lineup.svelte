<script>
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import Button from "$lib/components/ui/Button/Button.svelte";
  import DropdownIcon from "$lib/assets/svg/chevron-down.svg";
  import ProfileIcon from "$lib/assets/svg/profile.svg";
  import CustomPopover from "$lib/components/ui/Popover/CustomPopover.svelte";
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
  import InvitedIcon from "$lib/assets/icons/invited.svg";
  import Confirmed from "$lib/assets/icons/confirm.svg";
  import TableActionRow from "./TableActionRow.svelte";

  import PlusIcon from "$lib/assets/icons/plus.svg";
  import MobileRow from "./MobileRow.svelte";

  let items = [
    {
      performer: {
        image: "/images/avatar.png",
        name: "Dana Gould",
      },
      status: "confirmed",
      icon: Confirmed,
      position: "HOST",
      set: "10",
      note: "Can I go up early?",
      id: 100,
    },
    {
      performer: {
        image: "/images/avatar.png",
        name: "Natasha Pearl Hansen and Her Very Long Name",
      },
      icon: InvitedIcon,
      status: "invited",
      position: "HOST",
      set: "10",
      note: "Can I go up early?",
      id: 200,
    },
    {
      performer: {
        image: "/images/avatar.png",
        name: "Dana Gould",
      },
      status: "confirmed",
      icon: Confirmed,
      position: "HEADLINER",
      set: "10",
      note: "Can I go up early?",
      id: 300,
    },
    {
      performer: {
        image: "/images/avatar.png",
        name: "Dana Gould",
      },
      status: "confirmed",
      icon: Confirmed,
      position: "GUEST",
      set: "10",
      note: "Can I go up early?",
      id: 400,
    },
    {
      performer: {
        image: "/images/avatar.png",
        name: "Dana Gould",
      },
      status: "confirmed",
      icon: Confirmed,
      position: "FEATURE",
      set: "10",
      note: "Can I go up early?",
      id: 500,
    },
  ];
</script>

<section class="space-y-6">
  <div class="flex justify-between items-center">
    <div class=" flex items-center">
      <img src={ProfileIcon} alt="Before Icon here" class="mr-2" />
      <h3 class="text-2xl text-Text-Tartiary">Lineup</h3>
    </div>

    <div>
      <Button className="" strokebtn={true} afterIcon={DropdownIcon}
        >Action</Button
      >
      <Dropdown>
        <DropdownItem>Update</DropdownItem>
        <DropdownItem>Add</DropdownItem>
      </Dropdown>
    </div>
  </div>
  <div class="hidden md:block">
    <Table hoverable={true} {items}>
      <tfoot>
        <tr class="">
          <TableActionRow />
        </tr>
      </tfoot>
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
              <p
                class=" overflow-hidden whitespace-pre-wrap text-sm font-normal"
              >
                {item.performer.name}
              </p>
            </div>
          </TableBodyCell>
          <TableBodyCell
            ><Badge size="medium" icon={item.icon} status={item.status}
              >{item.status}</Badge
            ></TableBodyCell
          >
          <TableBodyCell
            ><Badge
              size="large"
              bgColor={PoitionsColor[item.position].bgColor}
              textColor="#FFFFFF">{item.position}</Badge
            ></TableBodyCell
          >
          <TableBodyCell class="font-normal">{item.set}</TableBodyCell>
          <TableBodyCell class="font-normal">{item.note}</TableBodyCell>
          <TableBodyCell class=" flex items-end justify-end">
            <button
              class=" grid place-content-center p-2 bg-BG-Secondary rounded-lg"
              id={`popover-no-arrow-${item.id}`}
            >
              <img src={MoreIcon} alt="more-actions" class="" />
            </button>

            <CustomPopover
              triggeredById={`popover-no-arrow-${item.id}`}
              placement="left"
              trigger="click"
            >
              <div class="flex flex-col gap-2 text-Tartiary text-sm">
                <button
                  class=" text-left hover:bg-BG-Secondary p-1 font-normal rounded-md text-sm text-Text-Tartiary hover:text-Text-Primary"
                  >Message performer</button
                >
                <button
                  class=" text-left hover:bg-BG-Secondary p-1 font-normal rounded-md text-sm text-Text-Tartiary hover:text-Text-Primary"
                  >View invitation history</button
                >
                <button
                  class=" text-left hover:bg-BG-Secondary p-1 font-normal rounded-md text-sm text-Text-Tartiary hover:text-Text-Primary"
                  >Display on event page <span class=" text-brand-Primary"
                    >✓</span
                  >
                </button>
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
  <Button strokebtn={true} beforeIcon={PlusIcon} className="!text-brand-Primary"
    >New spot</Button
  >
</section>
