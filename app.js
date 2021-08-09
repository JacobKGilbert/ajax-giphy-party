console.log("Let's get this party started!")

$('#search-form').submit(async function (evt) {
  evt.preventDefault()

  let input = evt.currentTarget[0]
  let value = $(input).val()

  await axios(
    `https://api.giphy.com/v1/gifs/random?api_key=S7oqGe0LADO5nQkZ0gkfRVdVcpGzyquX&tag=${value}`
  )
    .then(function (res) {
      gif = res.data.data.fixed_width_small_url
      appendGIF(gif)
    })
    .catch(function (err) {
      console.log(err)
    })
})

function appendGIF (gif) {
  html = `<img src="${gif}" alt="gif image" class="gif-image">`
  $('.container').append(html)
}

$('#remove-gifs-button').on('click', function (evt) {
  $('.gif-image').remove()
})