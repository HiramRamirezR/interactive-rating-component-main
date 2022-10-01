const ratings = document.querySelectorAll('.rating')
const numberSelection = document.querySelector('.numberSelection')
const back = document.querySelector('.back')
const front = document.querySelector('.front')
const submit = document.querySelector('#submit')


ratings.forEach((rating) => {
  rating.addEventListener('click', (e) => {
    numberSelection.textContent = e.currentTarget.innerText
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.remove('selected')
      ratings[i].classList.add('circle')
    }
    e.currentTarget.classList.remove('circle')
    e.currentTarget.classList.add('selected')
  })
})

submit.addEventListener('click', () => {
  back.classList.remove('hidden')
  front.classList.add('hidden')
})
