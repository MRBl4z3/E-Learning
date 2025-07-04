export default defineNuxtPlugin(() => {
  const mockUser = {
    uid: 'user123',
    email: 'demo@example.com',
    displayName: 'Demo User',
    role: 'student',
  }

  const fakeAuth = {
    currentUser: mockUser,
    signInWithEmailAndPassword: async (email, password) => {
      console.log('Mock login:', email, password)
      return Promise.resolve({ user: mockUser })
    },
    signOut: async () => {
      console.log('Mock sign out')
      return Promise.resolve()
    },
  }

  const fakeDB = {
    getCourses: () => Promise.resolve([
      { id: 'c1', title: 'Vue 3 Basics', instructor: 'Jane Doe' },
      { id: 'c2', title: 'Firebase 101', instructor: 'John Smith' },
    ]),
    getUserProgress: () => Promise.resolve({ c1: '75%', c2: '50%' }),
  }

  const fakeStorage = {
    upload: async () => Promise.resolve('Uploaded successfully'),
  }

  return {
    provide: {
      auth: fakeAuth,
      db: fakeDB,
      storage: fakeStorage,
    }
  }
})