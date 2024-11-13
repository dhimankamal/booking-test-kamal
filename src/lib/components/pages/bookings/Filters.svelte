<script>
  import CrossIcon from "$lib/assets/svg/cross.svg";
  import Input from "$lib/components/ui/Input/Input.svelte";
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
  ];
</script>

<section>
  <div class="flex justify-between items-center">
    <h3>Filters</h3>
    <button>
      <img src={CrossIcon} alt="" />
    </button>
  </div>
  <div>
    <h3 class="text-sm font-medium">Availability</h3>
  </div>
  <div>
    <div>
      <Select class="mt-2" items={countries} />
    </div>
  </div>
</section>
