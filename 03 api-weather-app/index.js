myFunction = () => {
  let city = document.getElementById('text').value
  // document.getElementById('demo').innerHTML = city

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8607733247f6711b025fc67ec17d0776&lang=ru`
  )
    .then(function (resp) {
      return resp.json()
    })
    .then(function (data) {
      console.log(data)

      document.querySelector('.city-name').textContent = data.name
      document.querySelector('.weather').innerHTML =
        Math.round(data.main.temp - 273) + '&deg'
      document.querySelector('.about').textContent =
        data.weather[0]['description']
    })

  document.getElementById('text').value = ''
}

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Vitebsk&appid=8607733247f6711b025fc67ec17d0776&lang=ru`
)
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    console.log(data)

    document.querySelector('.city-name2').textContent = data.name
    document.querySelector('.weather2').innerHTML =
      Math.round(data.main.temp - 273) + '&deg'
    document.querySelector('.about2').textContent =
      data.weather[0]['description']
  })

////

fetch(
  `http://api.openweathermap.org/data/2.5/forecast?q=Vitebsk&cnt=16&appid=f1d0c37acd44bd38445b62d037ca578e&lang=ru`
)
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    console.log(data)

    document.querySelector('.date3').innerHTML = data.list[5].dt_txt

    document.querySelector('.weather3').innerHTML =
      Math.round(data.list[5].main.temp - 273) + '&deg'

    document.querySelector('.about3').textContent =
      data.list[5].weather[0]['description']

    document.querySelector('.date4').innerHTML = data.list[13].dt_txt

    document.querySelector('.weather4').innerHTML =
      Math.round(data.list[13].main.temp - 273) + '&deg'

    document.querySelector('.about4').textContent =
      data.list[13].weather[0]['description']

    // document.querySelector('.weather2').innerHTML =
    //   Math.round(data.main.temp - 273) + '&deg'
    // document.querySelector('.about2').textContent =
    //   data.weather[0]['description']
  })
