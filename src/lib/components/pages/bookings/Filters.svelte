<script>
  import CrossIcon from "$lib/assets/svg/cross.svg";
  import Button from "$lib/components/ui/Button/Button.svelte";
  import { Select, Checkbox } from "flowbite-svelte";
  let selectData = [
    { value: "se1", name: "dummy 1" },
    { value: "se2", name: "dummy 2" },
    { value: "se3", name: "dummy 3" },
  ];
</script>

<section class="space-y-5 w-full">
  <div class="flex justify-between items-center">
    <h3 class=" text-xl text-Text-Tartiary">Filters</h3>
    <button>
      <img src={CrossIcon} alt="" />
    </button>
  </div>
  <div class=" space-y-2">
    <h3 class="text-sm font-medium">Availability</h3>
    <div class="flex gap-2 items-center">
      <Checkbox />
      <label for="checkbox" class="text-sm text-Text-Secondary"
        >Available</label
      >
    </div>
  </div>
  <div class=" space-y-5">
    <div>
      <label for="tier" class=" text-sm font-medium">Tier</label>
      <Select class="mt-2" items={selectData} placeholder="Any" />
    </div>
    <div>
      <label for="tier" class=" text-sm font-medium">Gender</label>
      <Select class="mt-2" items={selectData} placeholder="Any" />
    </div>
    <div>
      <label for="tier" class=" text-sm font-medium">Ethnicity</label>
      <Select class="mt-2" items={selectData} placeholder="Any" />
    </div>
    <div>
      <label for="tier" class=" text-sm font-medium">Last booked</label>
      <Select class="mt-2" items={selectData} placeholder="Any" />
    </div>
  </div>
  <div class=" flex gap-3">
    <Button>Show 32 results</Button>
    <Button strokebtn={true}>Reset</Button>
  </div>
</section>
