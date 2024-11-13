<script>
  import EyeIcon from "$lib/assets/svg/eye.svg";
  import SearchIcon from "$lib/assets/svg/search.svg";
  import FilterIcon from "$lib/assets/svg/filter-btn.svg";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  import MoreIcon from "$lib/assets/svg/more-actions.svg";
  import Input from "$lib/components/ui/Input/Input.svelte";
  import Button from "$lib/components/ui/Button/Button.svelte";
  import Filters from "./Filters.svelte";
  import Badge from "$lib/components/ui/Badges/Badge.svelte";
  import { PoitionsColor } from "$lib/utils/utils";

  let items = [
    {
      performer: {
        image: "/images/avatar.png",
        name: "Dana Gould",
      },
      ethnicity: "Black, Middle Eastern,Hispanic",
      lastbooked: "31/12/2023",
      id: 1,
    },
    {
      performer: {
        image: "/images/avatar1.png",
        name: "Jese Leos",
      },
      ethnicity: "Asian, white",
      lastbooked: "31/12/2023",
      id: 2,
    },
    {
      performer: {
        image: "/images/avatar.png",
        name: "Jese Leos",
      },
      ethnicity: "Asian, white",
      lastbooked: "31/12/2023",
      id: 3,
    },
  ];
</script>

<section class=" space-y-6">
  <div class="flex justify-between items-center">
    <div class=" flex items-center">
      <img src={EyeIcon} alt="Before Icon here" class="mr-2" />
      <h3 class="text-2xl text-Text-Tartiary">Roster</h3>
    </div>
  </div>
  <div class="flex items-center gap-4">
    <Input icon={SearchIcon} placeholder="Search" size="large" />
    <Button
      strokebtn={true}
      beforeIcon={FilterIcon}
      className="!text-brand-Primary">Filter</Button
    >
  </div>
  <Table hoverable={true} {items}>
    <TableHead class=" bg-BG-Secondary text-sm font-normal text-Text-Tartiary">
      <TableHeadCell class="py-6 rounded-tl-lg capitalize font-normal"
        >Performer</TableHeadCell
      >
      <TableHeadCell
        class="font-normal"
        sort={(a, b) => a.type.localeCompare(b.type)}>Ethnicity</TableHeadCell
      >
      <TableHeadCell
        class="font-normal"
        sort={(a, b) => a.make - b.make}
        defaultDirection="desc">Position</TableHeadCell
      >
      <TableHeadCell
        class="font-normal"
        sort={(a, b) => a.make - b.make}
        defaultDirection="desc">Last booked</TableHeadCell
      >
      <TableHeadCell class="rounded-tr-lg">
        <span class="sr-only">Notes</span>
      </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass=" border-BG-Secondary">
      <TableBodyRow slot="row" let:item>
        <TableBodyCell class=" max-w-48 font-normal">
          <div class="flex items-center gap-4 w-full">
            <img src={item.performer.image} alt="" />
            <p class=" overflow-hidden whitespace-pre-wrap text-sm">
              {item.performer.name}
            </p>
          </div>
        </TableBodyCell>

        <TableBodyCell class="font-normal">{item.ethnicity}</TableBodyCell>
        <TableBodyCell class="font-normal">Host</TableBodyCell>
        <TableBodyCell class="!font-normal">{item.lastbooked}</TableBodyCell>
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

<Filters />
