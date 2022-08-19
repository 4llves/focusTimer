export default function () {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgRain = new Audio("https://github.com/4llves/myAssets/blob/main/rain.mp3?raw=true")
  const bgForest = new Audio("https://github.com/4llves/myAssets/blob/main/florest.mp3?raw=true")
  const bgFire = new Audio("https://github.com/4llves/myAssets/blob/main/fire.mp3?raw=true")
  const bgCoffee = new Audio("https://github.com/4llves/myAssets/blob/main/jazzCoffee.mp3?raw=true")


  bgRain.loop = true
  bgForest.loop = true
  bgFire.loop = true
  bgCoffee.loop = true


  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function playAudio(sound, card) {
    sound.loop = true
    let isActive = card.classList.contains('active')
    isActive === false ? sound.pause() : sound.play()
  }

  function adjustVolume(sound, volume) {
    sound.volume = volume
  }

  return {
    pressButton,
    timeEnd,
    bgRain,
    bgForest,
    bgFire,
    bgCoffee,
    playAudio,
    adjustVolume,
  }

}