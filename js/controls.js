export default function Controls({
  buttonPlay,
  buttonPause,
  buttonAddMinutes,
  buttonMinusMinutes,
  buttonLightTheme,
  buttonDarkTheme
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonAddMinutes.classList.add('hidden')
    buttonMinusMinutes.classList.add('hidden')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonAddMinutes.classList.remove('hidden')
    buttonMinusMinutes.classList.remove('hidden')
  }

  function sun() {
    buttonLightTheme.classList.add('hide')
    buttonDarkTheme.classList.remove('hide')
  }

  function moon() {
    buttonDarkTheme.classList.add('hide')
    buttonLightTheme.classList.remove('hide')
  }

  function toggle(card) {
    card.classList.toggle('active')
  }

  function removeActiveCard(card) {
    if (card.classList.contains('active')) {
      card.classList.remove('active')
    }
  }

  function changeBackground(card, bg) {
    let clearClass = document.querySelector('body').className = ''

    if (card.classList.contains('active') === false) {
      clearClass
      document.querySelector('body').className = (`${bg}`)
    } else if (card.classList.contains('active') === !true) {
      clearClass
    }
  }

  return {
    play,
    pause,
    reset,
    toggle,
    removeActiveCard,
    changeBackground,
    sun,
    moon
  }
}