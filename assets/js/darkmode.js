const userPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const currentTheme = localStorage.getItem('theme') ?? userPref

function giscusThemeChange(theme) {
    const iframe = document.querySelector < HTMLIFrameElement > ('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.sendMessage({
        setConfig: {theme: theme,}
    });
}

if (currentTheme) {
    document.documentElement.setAttribute('saved-theme', currentTheme);
}

const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('saved-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        giscusThemeChange('dark')
    } else {
        document.documentElement.setAttribute('saved-theme', 'light')
        localStorage.setItem('theme', 'light')
        giscusThemeChange('light')
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
