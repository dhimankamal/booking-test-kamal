<script>
  import Table from "$lib/components/pages/bookings/Table.svelte";
import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
  import { writable } from "svelte/store";

  let BreadcrumbRoutes = writable([
    { name: "Home", href: "/" },
    { name: "Events", href: "/" },
    { name: "Bookings", href: "/" },
  ]);
  let selectedEvent = writable(null);

  function handleBreadcrumbClick() {
    selectedEvent.set(null);
    // BreadcrumbRoutes.set([{ name: "Home", href: "/" }]);
  }
</script>

<svelte:head>
  <title>Booking test by kamal</title>
</svelte:head>

<Breadcrumb data={$BreadcrumbRoutes} on:click={handleBreadcrumbClick} />
<section class="w-full space-y-6">
  <h2>Booking</h2>
  <div class="flex justify-between">
    <h3>lineup</h3>
    <button>action</button>
  </div>
  <Table />
</section>
