import {
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
  volumeFire
} from './elements.js'

export default function ({ controls, timer, sound, theme }) {

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonAddMinutes.addEventListener('click', function () {
    timer.addMinutes()
  })

  buttonMinusMinutes.addEventListener('click', function () {
    timer.minusMinutes()
  })

  buttonForest.addEventListener('click', function () {
    controls.changeBackground(cardForest, 'bgGifForest')
    controls.toggle(cardForest)
    controls.toggle(iconForest)
    sound.playAudio(sound.bgForest, cardForest)
    controls.removeActiveCard(cardRain)
    controls.removeActiveCard(iconRain)
    sound.playAudio(sound.bgRain, cardRain)
    controls.removeActiveCard(cardCoffee)
    controls.removeActiveCard(iconCoffee)
    sound.playAudio(sound.bgCoffee, cardCoffee)
    controls.removeActiveCard(cardFire)
    controls.removeActiveCard(iconFire)
    sound.playAudio(sound.bgFire, cardFire)
  })

  volumeForest.addEventListener('input', function () {
    sound.adjustVolume(sound.bgForest, volumeForest.value)
  })

  buttonRain.addEventListener('click', function () {
    controls.changeBackground(cardRain, 'bgGifRain')
    controls.toggle(cardRain)
    controls.toggle(iconRain)
    sound.playAudio(sound.bgRain, cardRain)
    controls.removeActiveCard(cardForest)
    controls.removeActiveCard(iconForest)
    sound.playAudio(sound.bgForest, cardForest)
    controls.removeActiveCard(cardCoffee)
    controls.removeActiveCard(iconCoffee)
    sound.playAudio(sound.bgCoffee, cardCoffee)
    controls.removeActiveCard(cardFire)
    controls.removeActiveCard(iconFire)
    sound.playAudio(sound.bgFire, cardFire)
  })

  volumeRain.addEventListener('input', function () {
    sound.adjustVolume(sound.bgRain, volumeRain.value)
  })

  buttonCoffee.addEventListener('click', function () {
    controls.changeBackground(cardCoffee, 'bgGifCoffee')
    controls.toggle(cardCoffee)
    controls.toggle(iconCoffee)
    sound.playAudio(sound.bgCoffee, cardCoffee)
    controls.removeActiveCard(cardRain)
    controls.removeActiveCard(iconRain)
    sound.playAudio(sound.bgRain, cardRain)
    controls.removeActiveCard(cardForest)
    controls.removeActiveCard(iconForest)
    sound.playAudio(sound.bgForest, cardForest)
    controls.removeActiveCard(cardFire)
    controls.removeActiveCard(iconFire)
    sound.playAudio(sound.bgFire, cardFire)
  })

  volumeCoffee.addEventListener('input', function () {
    sound.adjustVolume(sound.bgCoffee, volumeCoffee.value)
  })

  buttonFire.addEventListener('click', function () {
    controls.changeBackground(cardFire, 'bgGifFire')
    controls.toggle(cardFire)
    controls.toggle(iconFire)
    sound.playAudio(sound.bgFire, cardFire)
    controls.removeActiveCard(cardRain)
    controls.removeActiveCard(iconRain)
    sound.playAudio(sound.bgRain, cardRain)
    controls.removeActiveCard(cardCoffee)
    controls.removeActiveCard(iconCoffee)
    sound.playAudio(sound.bgCoffee, cardCoffee)
    controls.removeActiveCard(cardForest)
    controls.removeActiveCard(iconForest)
    sound.playAudio(sound.bgForest, cardForest)
  })

  volumeFire.addEventListener('input', function () {
    sound.adjustVolume(sound.bgFire, volumeFire.value)
  })

}