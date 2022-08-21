export default function Theme() {
  const html = document.querySelector('html')
  const sun = document.querySelector('.ph-sun')
  const buttonToggle = document.querySelector('.toggleDark')

  const getStyle = (element, style) =>
    window
      .getComputedStyle(element)
      .getPropertyValue(style)

  const initialColors = {
    bg: getStyle(html, "--bg"),
    bgCard: getStyle(html, "--bg-card"),
    colorText: getStyle(html, "--color-text"),
    bgActive: getStyle(html, "--bg-active")
  }

  const darkMode = {
    bg: '#121214',
    bgCard: '#29292E',
    colorText: '#C4C4CC',
    bgActive: '#0A3442'
  }

  const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

  const changeColors = (colors) => {
    Object.keys(colors).map(key =>
      html.style.setProperty(transformKey(key), colors[key])
    )
  }

  buttonToggle.addEventListener("click", () => {
    if (sun.classList.contains('hide') === true) {
      changeColors(darkMode)
    } else {
      changeColors(initialColors)
    }
  })


}