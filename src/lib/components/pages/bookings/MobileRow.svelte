<script>
  import Badge from "$lib/components/ui/Badges/Badge.svelte";
  import { PoitionsColor } from "$lib/utils/utils";

  export let data = {};
</script>

<div class="py-4 border-b border-stroke-Primary">
  <div class="flex items-center gap-4 w-full">
    <span class="text-Text-Tartiary">::</span>
    <img src={data?.performer?.image} alt="" />
    <div class="w-full space-y-2">
      <div class="flex justify-between w-full gap-2 overflow-hidden">
        <p class=" text-sm font-normal overflow-hidden h-5">
          {data?.performer?.name}
        </p>
        <p class=" whitespace-nowrap text-sm">
          SET: {data?.set}
        </p>
      </div>
      <div class=" flex justify-between items-center gap-2">
        <Badge
          size="medium"
          bgColor={PoitionsColor[data?.position].bgColor}
          textColor="#FFFFFF">{data?.position}</Badge
        >
        <Badge size="medium" icon={data?.icon} status={data?.status}
          >{data?.status}</Badge
        >
      </div>
    </div>
  </div>
</div>
