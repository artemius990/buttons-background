const btn = document.querySelector('.green')
const btn2 = document.querySelector('.red')
const btn3 = document.querySelector('.yellow')

btn.onclick = function () {
  document.body.style.backgroundColor = btn.value
}

btn2.onclick = function () {
  document.body.style.backgroundColor = btn2.value
}

btn3.onclick = function () {
  document.body.style.backgroundColor = btn3.value
}
