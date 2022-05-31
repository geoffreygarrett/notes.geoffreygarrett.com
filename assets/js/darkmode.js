const userPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const currentTheme = localStorage.getItem('theme') ?? userPref

function sendMessage(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({giscus: message}, 'https://giscus.app');
}

if (currentTheme) {
    document.documentElement.setAttribute('saved-theme', currentTheme);
}

// handle the switching of giscus theme
function giscusChangeTheme(theme) {
    // console.log('giscusChangeTheme: ', theme);
    // console.log('currentTheme: ', currentTheme);
    const giscusWrapper = document.getElementsByClassName('giscus-wrapper');
    if (giscusWrapper.length === 0) return;
    if (theme === 'dark') {
        // console.log('dark theme');
        const darkTheme = giscusWrapper[0].getAttribute('data-giscus-dark-theme');
        sendMessage({
            setConfig: {
                theme: (darkTheme ? darkTheme : 'https://giscus.app/themes/dark.css')
            }
        })
    } else {
        // console.log('light theme');
        const lightTheme = giscusWrapper[0].getAttribute('data-giscus-light-theme');
        sendMessage({
            setConfig: {
                theme: (lightTheme ? lightTheme : 'https://giscus.app/themes/light.css')
            }
        })
    }
}


const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('saved-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        giscusChangeTheme('dark')
    } else {
        document.documentElement.setAttribute('saved-theme', 'light')
        localStorage.setItem('theme', 'light')
        giscusChangeTheme('light')
    }
}

// message handler for giscus -> parent.
function handleMessage(event) {
    if (event.origin !== 'https://giscus.app') return;
    if (!(typeof event.data === 'object' && event.data.giscus)) return;
    // const giscusData = event.data.giscus;
    giscusChangeTheme(localStorage.getItem('theme') ?? currentTheme);

    // remove listener after giscus theme changed (only used to set theme).
    // window.removeEventListener('message', handleMessage);
}

// giscus event listener. This is used to set the theme of the giscus app when
// giscus is loaded.
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
