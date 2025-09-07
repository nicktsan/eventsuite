<script setup lang="ts">
// Example data (replace with props / API calls later)
const stats = [
  { label: 'Total Events', value: 24, icon: 'pi pi-calendar' },
  { label: 'Upcoming Events', value: 5, icon: 'pi pi-clock' },
  { label: 'Total Attendees', value: 1280, icon: 'pi pi-users' },
  { label: 'Platforms Connected', value: 3, icon: 'pi pi-link' },
]

const events = [
  {
    id: 1,
    name: 'Tech Meetup 2025',
    date: '2025-09-21',
    status: 'Published',
    platforms: ['Eventbrite', 'Meetup'],
  },
  {
    id: 2,
    name: 'Startup Pitch Night',
    date: '2025-09-28',
    status: 'Draft',
    platforms: ['Facebook'],
  },
  {
    id: 3,
    name: 'Design Workshop',
    date: '2025-10-05',
    status: 'Published',
    platforms: ['Meetup', 'LinkedIn'],
  },
]
</script>

<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md hidden md:flex flex-col">
      <nav class="flex-1 p-6 space-y-4">
        <a href="#" class="flex items-center space-x-2 text-indigo-600 font-semibold">
          <i class="pi pi-chart-bar"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
          <i class="pi pi-calendar"></i>
          <span>Events</span>
        </a>
        <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
          <i class="pi pi-plus-circle"></i>
          <span>Create Event</span>
        </a>
        <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
          <i class="pi pi-chart-line"></i>
          <span>Analytics</span>
        </a>
        <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8">
      <!-- Welcome -->
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Welcome back, Nicholas 👋</h1>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white shadow rounded-xl p-6 flex items-center space-x-4"
        >
          <div class="text-indigo-600 text-2xl">
            <i :class="stat.icon"></i>
          </div>
          <div>
            <div class="text-2xl font-bold">{{ stat.value }}</div>
            <div class="text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Upcoming Events -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
        <ul class="space-y-3">
          <li
            v-for="event in events.slice(0, 2)"
            :key="event.id"
            class="bg-white p-4 shadow rounded-lg flex justify-between items-center"
          >
            <div>
              <div class="font-medium text-gray-800">{{ event.name }}</div>
              <div class="text-sm text-gray-500">{{ event.date }}</div>
            </div>
            <span
              class="px-3 py-1 text-sm rounded-full"
              :class="{
                'bg-green-100 text-green-700': event.status === 'Published',
                'bg-yellow-100 text-yellow-700': event.status === 'Draft',
              }"
            >
              {{ event.status }}
            </span>
          </li>
        </ul>
      </section>

      <!-- Event Table -->
      <section>
        <h2 class="text-xl font-semibold text-gray-800 mb-4">All Events</h2>
        <div class="overflow-x-auto bg-white shadow rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th class="px-6 py-3 text-left">Event</th>
                <th class="px-6 py-3 text-left">Date</th>
                <th class="px-6 py-3 text-left">Status</th>
                <th class="px-6 py-3 text-left">Platforms</th>
                <th class="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 text-sm">
              <tr v-for="event in events" :key="event.id">
                <td class="px-6 py-4 font-medium text-gray-800">{{ event.name }}</td>
                <td class="px-6 py-4 text-gray-600">{{ event.date }}</td>
                <td class="px-6 py-4">
                  <span
                    class="px-2 py-1 rounded-full text-xs"
                    :class="{
                      'bg-green-100 text-green-700': event.status === 'Published',
                      'bg-yellow-100 text-yellow-700': event.status === 'Draft',
                      'bg-gray-100 text-gray-700': event.status === 'Completed',
                    }"
                  >
                    {{ event.status }}
                  </span>
                </td>
                <td class="px-6 py-4 flex space-x-2">
                  <span
                    v-for="platform in event.platforms"
                    :key="platform"
                    class="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                  >
                    {{ platform }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right space-x-2">
                  <button class="text-indigo-600 hover:underline text-sm">Edit</button>
                  <button class="text-gray-600 hover:underline text-sm">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Tailwind handles most styling */
</style>
