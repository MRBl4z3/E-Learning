<template>
  <v-container>
    <h2 class="mb-4">Available Courses</h2>
    <v-row>
      <v-col v-for="course in courses" :key="course.id" cols="12" md="6" lg="4">
        <v-card>
          <v-card-title>{{ course.title }}</v-card-title>
          <v-card-subtitle>by {{ course.instructor }}</v-card-subtitle>
          <v-card-text>{{ course.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary">Enroll Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { $db } = useNuxtApp()
const courses = ref([])

onMounted(async () => {
  courses.value = await $db.getCourses()
})
</script>