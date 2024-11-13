<script lang="ts">
  import "../app.css";
</script>

<div class="flex h-screen bg-gray-20">
  <h2 class="border w-96">side bar</h2>
  <div class=" flex h-full w-full flex-col py-8">
    <main class=" flex-1 overflow-y-auto px-8">
      <slot />
    </main>
  </div>
</div>
