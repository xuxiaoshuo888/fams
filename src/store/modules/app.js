import 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: true
    }
  },
  mutations: {
    toggle_sidebar: state => {
      if (state.sidebar.opened) {
        state.sidebar.opened = false
      }else {
        state.sidebar.opened = true
      }
    }
  },
  actions: {}
}

export default app
