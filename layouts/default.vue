<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>E-Learning Platform</v-toolbar-title>
      <v-spacer />
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/courses">Courses</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/auth/login">Login</v-btn>
    </v-app-bar>

    <v-main class="pa-4">
      <slot />
    </v-main>

    <v-footer app color="primary" dark>
      <v-col class="text-center">
        &copy; {{ new Date().getFullYear() }} E-Learning Platform. All rights reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>