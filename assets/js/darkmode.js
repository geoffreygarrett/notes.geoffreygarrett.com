const userPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const currentTheme = localStorage.getItem('theme') ?? userPref

function sendMessage(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({giscus: message}, 'https://giscus.app');
}

function giscusTheme(theme) {
    if (theme === 'dark') {
        sendMessage({
            setConfig: {
                theme: 'https://giscus.app/themes/dark_dimmed.css'
            }
        })
    } else {
        sendMessage({
            setConfig: {
                theme: 'https://giscus.app/themes/light.css'
            }
        })
    }
}

if (currentTheme) {
    document.documentElement.setAttribute('saved-theme', currentTheme);
}

const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('saved-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        giscusTheme('dark')

    } else {
        document.documentElement.setAttribute('saved-theme', 'light')
        localStorage.setItem('theme', 'light')
        giscusTheme('light')
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
