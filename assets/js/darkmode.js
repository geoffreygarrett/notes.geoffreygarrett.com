const userPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const currentTheme = localStorage.getItem('theme') ?? userPref

// function sendMessage(message) {
//     const iframe = document.querySelector('iframe.giscus-frame');
//     if (!iframe) return;
//     iframe.contentWindow.postMessage({giscus: message}, 'https://giscus.app');
// }

const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('saved-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        // localStorage.setItem('giscus-theme', 'https://giscus.app/themes/dark_dimmed.css')
        // sendMessage({
        //     setConfig: {
        //         // theme: {{ .Site.Dta.config.comments.giscus.theme.dark }}
        //         theme: 'https://giscus.app/themes/dark_dimmed.css'
        //     }
        // })

    } else {
        document.documentElement.setAttribute('saved-theme', 'light')
        localStorage.setItem('theme', 'light')
        // localStorage.setItem('giscus-theme', 'https://giscus.app/themes/light.css')
        // sendMessage({
        //     setConfig: {
        //         // theme: {{ .Site.Data.config.comments.giscus.theme.light }}
        //         theme: 'https://giscus.app/themes/light.css'
        //     }
        // })
    }
}


window.addEventListener('DOMContentLoaded', () => {
    // Darkmode toggle
    const toggleSwitch = document.querySelector('#darkmode-toggle')

    // listen for toggle
    toggleSwitch.addEventListener('change', switchTheme, false)
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
    }
})
