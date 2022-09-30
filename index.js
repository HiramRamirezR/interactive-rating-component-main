const ratings = document.querySelectorAll('.rating')
const numberSelection = document.querySelector('.numberSelection')
const back = document.querySelector('.back')
const front = document.querySelector('.front')
const submit = document.querySelector('#submit')


ratings.forEach((rating) => {
  rating.addEventListener('click', (e) => {
    numberSelection.textContent = e.currentTarget.innerText
    e.currentTarget.classList.remove('circle')
    e.currentTarget.classList.add('selected')
    console.log('ok')
  })
})

submit.addEventListener('click', () => {
  back.classList.remove('hidden')
  front.classList.add('hidden')
})
