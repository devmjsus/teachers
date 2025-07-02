import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size', {
    beforeMount(el) {
        el.style.fontSize = 50 + 'px'
        el.style.color = 'blue'
    },
})

app.directive('custom-size', {
    beforeMount(el, binding) {
        let size = 18
        switch (binding.arg) {
            case 'small':
                size = 12
                break
            case 'medium':
                size = 18
                break
            case 'large':
                size = 24
                break
            case 'xlarge':
                size = 36
                break
            default:
                size = binding.value || 18
        }
        el.style.fontSize = size + 'px'
    },
})

app.directive('custom-font', {
    beforeMount(el, binding) {
        let size = 18
        if (binding.modifiers.small) {
            size = 12
        } else if (binding.modifiers.medium) {
            size = 18
        } else if (binding.modifiers.large) {
            size = 24
        } else if (binding.modifiers.xlarge) {
            size = 36
        }
        el.style.fontSize = size + 'px'

        if (binding.modifiers.red) {
            el.style.color = 'red'
        } else if (binding.modifiers.blue) {
            el.style.color = 'blue'
        } else if (binding.modifiers.green) {
            el.style.color = 'green'
        }else if (binding.modifiers.cyan) {
            el.style.color = 'cyan'
        } else {
            el.style.color = 'black'
        }
    },
})

app.mount('#app')
