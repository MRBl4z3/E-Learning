export default defineNuxtConfig({
  ssr: true,
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@nuxtjs/vuetify'],
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseAppId: process.env.FIREBASE_APP_ID
    }
  }
})