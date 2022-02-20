import Card from './card'
const components = [
  Card
]
const install = (Vue) => {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}

export default {
  install,
  Card
}
