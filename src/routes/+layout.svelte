<script lang="ts">
  import "../app.css";
</script>

<div class="flex h-screen bg-gray-20">
  <h2 class="border border-stroke-Primary w-96">side bar</h2>
  <div class=" flex h-full w-full flex-col">
    <main class=" flex-1 overflow-y-auto">
      <slot />
    </main>
  </div>
</div>
