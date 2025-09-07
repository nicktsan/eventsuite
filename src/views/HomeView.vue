<!-- LandingPage.vue -->
<template>
  <div class="min-h-screen bg-white text-gray-800">
    <!-- Hero -->
    <section class="relative pt-28 md:pt-36">
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
            One Event. <span class="text-indigo-600">Everywhere.</span>
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            Create your event once and publish instantly to Eventbrite, Meetup, Facebook, and more —
            in minutes, not hours.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              label="Get Early Access"
              icon="pi pi-send"
              @click="scrollTo('cta')"
              class="p-button-rounded p-button-lg p-button-primary"
            />
            <Button
              label="Learn More"
              icon="pi pi-info-circle"
              outlined
              @click="scrollTo('how')"
              class="p-button-rounded p-button-lg"
            />
          </div>
        </div>

        <!-- Hero Visual Mock -->
        <div class="relative">
          <div class="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 space-y-3">
            <div class="h-10 rounded-lg bg-gray-100"></div>
            <div class="h-24 rounded-lg bg-gray-100"></div>
            <div class="grid grid-cols-2 gap-3">
              <div class="h-10 rounded-lg bg-gray-100"></div>
              <div class="h-10 rounded-lg bg-gray-100"></div>
            </div>
            <div class="h-10 w-40 rounded-lg bg-indigo-600/90"></div>
          </div>
          <!-- Platforms -->
          <div class="mt-6 grid grid-cols-3 gap-4">
            <Chip label="Eventbrite" icon="pi pi-calendar" />
            <Chip label="Meetup" icon="pi pi-users" />
            <Chip label="Facebook" icon="pi pi-facebook" />
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how" class="bg-gray-50 py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold tracking-tight">How it works</h2>
        <p class="mt-2 text-gray-600">Three simple steps to publish your event everywhere.</p>

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <template #title><i class="pi pi-pencil text-indigo-600"></i> Create</template>
            <template #content>Add your event details once using our simple form.</template>
          </Card>
          <Card>
            <template #title><i class="pi pi-check-circle text-indigo-600"></i> Select</template>
            <template #content>Choose the platforms you want to publish to.</template>
          </Card>
          <Card>
            <template #title><i class="pi pi-send text-indigo-600"></i> Publish</template>
            <template #content>Go live everywhere with a single click.</template>
          </Card>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section id="benefits" class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold tracking-tight">Why organizers love it</h2>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <template #title><i class="pi pi-clock text-indigo-600"></i> Save time</template>
            <template #content>No more duplicate posting across platforms.</template>
          </Card>
          <Card>
            <template #title><i class="pi pi-check text-indigo-600"></i> Consistency</template>
            <template #content>Keep details aligned everywhere automatically.</template>
          </Card>
          <Card>
            <template #title
              ><i class="pi pi-bullhorn text-indigo-600"></i> Reach more people</template
            >
            <template #content>Expand your audience with one click.</template>
          </Card>
          <Card>
            <template #title><i class="pi pi-list text-indigo-600"></i> Stay organized</template>
            <template #content>Manage everything from a single dashboard.</template>
          </Card>
        </div>
      </div>
    </section>

    <!-- Integrations -->
    <section id="integrations" class="bg-gray-50 py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold tracking-tight">Works with the platforms you already use</h2>
        <div class="mt-10 flex justify-center gap-8 flex-wrap">
          <Chip label="Eventbrite" icon="pi pi-calendar" />
          <Chip label="Meetup" icon="pi pi-users" />
          <Chip label="Facebook" icon="pi pi-facebook" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      id="cta"
      class="bg-gradient-to-r from-indigo-600 to-indigo-500 py-20 text-center text-white"
    >
      <h2 class="text-3xl sm:text-4xl font-extrabold">Stop posting events one by one.</h2>
      <p class="mt-3 text-indigo-100">
        Join the waitlist to get early access when we launch the beta.
      </p>

      <form
        @submit.prevent="submitEmail"
        class="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
      >
        <InputText
          v-model="email"
          placeholder="you@example.com"
          class="w-full sm:w-96 p-inputtext-lg"
          type="email"
          required
        />
        <Button
          type="submit"
          label="Join the Waitlist"
          icon="pi pi-arrow-right"
          class="p-button-lg"
        />
      </form>
      <p v-if="submitted" class="mt-3 text-sm text-indigo-100">
        Thanks! We’ll be in touch soon. 🎉
      </p>
    </section>

    <!-- Footer -->
    <footer class="py-10 text-center text-sm text-gray-500">
      © {{ new Date().getFullYear() }} Everywhere Events — All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Chip from 'primevue/chip'

const email = ref('')
const submitted = ref(false)

function scrollTo(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function submitEmail() {
  submitted.value = true
}
</script>
