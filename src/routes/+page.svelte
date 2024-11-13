<script>
  import Declined from "$lib/components/pages/bookings/Declined.svelte";
import Lineup from "$lib/components/pages/bookings/Lineup.svelte";
  import Pinned from "$lib/components/pages/bookings/Pinned.svelte";
  import Roster from "$lib/components/pages/bookings/Roster.svelte";
  import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
  import Card from "$lib/components/ui/Card.svelte";
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

<div class="p-4 bg-BG-Secondary space-y-4">
  <Breadcrumb data={$BreadcrumbRoutes} on:click={handleBreadcrumbClick} />
  <Card>
    <h2 class=" text-xl">Booking</h2>
    <Lineup />
    <Pinned />
    <Declined />
    <Roster />
  </Card>
</div>
