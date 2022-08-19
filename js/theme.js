export default function Theme() {
  const toggle = document.getElementById('toggleDark')
  const html = document.querySelector('html')
  const span = document.querySelectorAll('span')
  const button = document.querySelectorAll('button')
  const card = document.querySelectorAll('#cards .card')



  toggle.addEventListener(`click`, function () {
    this.classList.toggle(`ph-sun`)

    if (this.classList.toggle(`ph-moon`)) {
      html.style.background = `#121214`
      html.style.color = `#e3e3e3`
      span[0].style.color = `#e3e3e3`
      span[1].style.color = `#e3e3e3`
      span[2].style.color = `#e3e3e3`
      button[0].style.color = `#e3e3e3`
      button[1].style.color = `#e3e3e3`
      button[2].style.color = `#e3e3e3`
      button[3].style.color = `#e3e3e3`
      button[4].style.color = `#e3e3e3`
      card[0].style.background = `#e3e3e3`
      card[1].style.background = `#e3e3e3`
      card[2].style.background = `#e3e3e3`
      card[3].style.background = `#e3e3e3`


    } else {
      html.style.background = `#e3e3e3`
      html.style.color = `#323238`
      span[0].style.color = `#323238`
      span[1].style.color = `#323238`
      span[2].style.color = `#323238`
      button[0].style.color = `#323238`
      button[1].style.color = `#323238`
      button[2].style.color = `#323238`
      button[3].style.color = `#323238`
      button[4].style.color = `#323238`
      card[0].style.background = `#323238`
      card[1].style.background = `#323238`
      card[2].style.background = `#323238`
      card[3].style.background = `#323238`
    }
  })
}