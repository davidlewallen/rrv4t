export default {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    if (cb) { cb() };
    setTimeout(cb, 100) // weird bug if async?
  }
}
