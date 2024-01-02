export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Meshach',
    lastName: 'Jackson',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = 'Meshach'
      this.lastName = 'Jackson'
    },
  },
  getters: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
