/*THEMES*/
const buttonLightTheme = document.querySelector('.ph-sun')
const buttonDarkTheme = document.querySelector('.ph-moon')

/*SECTION TIMER*/
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.add-minutes')
const buttonMinusMinutes = document.querySelector('.minus-minutes')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

/*SECTION BG SONG*/
const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardCoffee = document.querySelector('.coffee-shop')
const cardFire = document.querySelector('.fire')

const buttonForest = cardForest.querySelector('.buttonForest')
const buttonRain = cardRain.querySelector('.buttonRain')
const buttonCoffee = cardCoffee.querySelector('.buttonCoffee')
const buttonFire = cardFire.querySelector('.buttonFire')

const iconForest = cardForest.querySelector('.ph-tree')
const iconRain = cardRain.querySelector('.ph-cloud-snow')
const iconCoffee = cardCoffee.querySelector('.ph-storefront')
const iconFire = cardFire.querySelector('.ph-flame')

const volumeForest = cardForest.querySelector('input')
const volumeRain = cardRain.querySelector('input')
const volumeCoffee = cardCoffee.querySelector('input')
const volumeFire = cardFire.querySelector('input')

export {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddMinutes,
  buttonMinusMinutes,
  cardForest,
  cardRain,
  cardCoffee,
  cardFire,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
  iconForest,
  iconRain,
  iconCoffee,
  iconFire,
  volumeForest,
  volumeRain,
  volumeCoffee,
  volumeFire,
  buttonLightTheme,
  buttonDarkTheme
}