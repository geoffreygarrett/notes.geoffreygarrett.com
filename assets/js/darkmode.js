const userPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const currentTheme = localStorage.getItem('theme') ?? userPref
const giscusLoaded = false

function sendMessage(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) {
        console.log('there is no god')
    } else {
        iframe.contentWindow.postMessage({giscus: message}, 'https://giscus.app');
    }
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

function handleMessage(event) {
    if (event.origin !== 'https://giscus.app') return;
    if (!(typeof event.data === 'object' && event.data.giscus)) return;
    const giscusData = event.data.giscus;
    giscusTheme(currentTheme)
    window.removeEventListener('message', handleMessage);
    // You'll need to make sure that `giscusData` contains the message you're
    // expecting, e.g. by using `if ('discussion' in giscusData)`.
}

window.addEventListener('message', handleMessage);

window.addEventListener('DOMContentLoaded', () => {
    // Darkmode toggle
    const toggleSwitch = document.querySelector('#darkmode-toggle')


    // listen for toggle
    toggleSwitch.addEventListener('change', switchTheme, false)
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
    }
})
