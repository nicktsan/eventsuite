<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Event Details Form -->
      <div class="bg-white p-6 rounded-2xl shadow-sm">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Event title</label>
          <InputText v-model="event.title" placeholder="Enter event title" class="w-full mt-1" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Description</label>
          <Textarea
            v-model="event.description"
            rows="4"
            placeholder="Enter description"
            class="w-full mt-1"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Location</label>
          <InputText v-model="event.location" placeholder="Enter location" class="w-full mt-1" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Date</label>
          <Calendar v-model="event.date" showIcon dateFormat="M dd, yy" class="w-full mt-1" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Upload image</label>
          <FileUpload mode="basic" name="demo[]" url="/api/upload" auto chooseLabel="Upload" />
        </div>

        <p class="text-xs text-gray-400 mt-2">Draft saved</p>
      </div>

      <!-- Publish + Event Options -->
      <div class="bg-white p-6 rounded-2xl shadow-sm">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">Publish to</h2>
        <div class="space-y-3">
          <div class="flex justify-between items-center border rounded-lg px-3 py-2">
            <div class="flex items-center gap-2">
              <i class="pi pi-ticket text-indigo-600"></i> Eventbrite
            </div>
            <InputSwitch v-model="publish.eventbrite" />
          </div>

          <div class="flex justify-between items-center border rounded-lg px-3 py-2">
            <div class="flex items-center gap-2">
              <i class="pi pi-facebook text-blue-600"></i> Facebook
            </div>
            <InputSwitch v-model="publish.facebook" />
          </div>

          <div class="flex justify-between items-center border rounded-lg px-3 py-2">
            <div class="flex items-center gap-2">
              <i class="pi pi-users text-purple-600"></i> Meetup
            </div>
            <InputSwitch v-model="publish.meetup" />
          </div>
        </div>

        <h2 class="text-lg font-semibold text-gray-800 mt-6 mb-4">Event Options</h2>
        <div class="space-y-3">
          <div class="flex justify-between items-center border rounded-lg px-3 py-2">
            <div class="flex items-center gap-2"><i class="pi pi-credit-card"></i> Tickets</div>
            <span class="text-gray-500">Free</span>
          </div>

          <div class="flex justify-between items-center border rounded-lg px-3 py-2">
            <div class="flex items-center gap-2"><i class="pi pi-lock"></i> Require Approval</div>
            <InputSwitch v-model="options.requireApproval" />
          </div>

          <div class="flex justify-between items-center border rounded-lg px-3 py-2">
            <div class="flex items-center gap-2"><i class="pi pi-users"></i> Capacity</div>
            <InputText v-model="options.capacity" placeholder="Unlimited" class="w-24" />
          </div>
        </div>

        <Button
          label="Publish"
          class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-3"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import FileUpload from 'primevue/fileupload'
import InputSwitch from 'primevue/inputswitch'

const event = ref({
  title: '',
  description: '',
  location: '',
  date: null,
})

const publish = ref({
  eventbrite: false,
  facebook: false,
  meetup: false,
})

const options = ref({
  requireApproval: false,
  capacity: 'Unlimited',
})
</script>
