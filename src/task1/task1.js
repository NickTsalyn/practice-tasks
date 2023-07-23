const images = document.querySelectorAll('.thumbnail')
  const mainImg = document.querySelector('#mainImage')

  images.forEach(img => {
    img.addEventListener('click', onClick)

    function onClick(evt) {
      const src = img.getAttribute('src')
      mainImg.setAttribute('src', src)

      images.forEach(photo => {
        photo.classList.remove('selected')
      })
      img.classList.add('selected')
    }
  })