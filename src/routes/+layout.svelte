<script lang="ts">
  import "../app.css";
</script>

<div class="flex h-screen bg-gray-20">
  <h2 class="border-stroke-Primary w-96 p-4 text-2xl opacity-10">side bar</h2>
  <div class=" flex h-full w-full flex-col">
    <main class=" flex-1 ">
      <slot />
    </main>
  </div>
</div>
