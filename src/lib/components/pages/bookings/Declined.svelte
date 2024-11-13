<script>
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import Button from "$lib/components/ui/Button/Button.svelte";
  import DropdownIcon from "$lib/assets/svg/chevron-down.svg";
  import DeclinedIcon from "$lib/assets/svg/declined.svg";
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

  let items = [
    {
      performer: {
        image: "/images/avatar.png",
        name: "Dana Gould",
      },
      status: "confirmed",
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
      <img src={DeclinedIcon} alt="Before Icon here" class="mr-2" />
      <h3 class="text-2xl text-Text-Tartiary">Declined</h3>
    </div>
  
    <Button className="w-full md:w-auto" strokebtn={true} afterIcon={DropdownIcon}
      >Action</Button
    >
    <Dropdown>
      <DropdownItem>Update</DropdownItem>
      <DropdownItem>Add</DropdownItem>
    </Dropdown>
  </div>
  
  <Table hoverable={true} {items}>
    <TableHead class=" bg-BG-Secondary text-sm font-normal text-Text-Tartiary">
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
          ><Badge size="medium" status="success">{item.status}</Badge
          ></TableBodyCell
        >
        <TableBodyCell
          ><Badge size="large" status="success">{item.position}</Badge
          ></TableBodyCell
        >
        <TableBodyCell>{item.set}</TableBodyCell>
        <TableBodyCell>{item.note}</TableBodyCell>
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
  
</section>

