const leftControl = document.querySelectorAll('.left-control')
const rightControl = document.querySelectorAll('.right-control')
const movieContainer = document.querySelectorAll('.movie-container')
const imgMoveContainer = document.querySelector('.movie-container img')



function rightClick(index) {
  movieContainer[index].scrollLeft += imgMoveContainer.clientWidth;

}

function leftClick(index) {
  movieContainer[index].scrollLeft -= imgMoveContainer.clientWidth;
}

rightControl.forEach((item, index) => {
  item.addEventListener('click', () => {
    rightClick(index)
  })
})


leftControl.forEach((item, index) => {
  item.addEventListener('click', () => {
    leftClick(index)
  })
})

if (window.matchMedia('(max-width:480px)').matches) {

  function rightClick(index) {
    movieContainer[index].scrollLeft += imgMoveContainer.clientWidth;

  }

  function leftClick(index) {
    movieContainer[index].scrollLeft -= imgMoveContainer.clientWidth;
  }

  rightControl.forEach((item, index) => {
    item.addEventListener('click', () => {
      rightClick(index)
    })
  })


  leftControl.forEach((item, index) => {
    item.addEventListener('click', () => {
      leftClick(index)
    })
  })

}




// MENU MOBILE
const menuIcon = document.querySelector('.icon-menu')
const navPrimary = document.querySelector('nav')
const navUl = navPrimary.querySelector('ul')
const linksNav = navUl.querySelectorAll('li')

menuIcon.addEventListener('click', () => {
document.body.classList.toggle('overflow-hidden')
  navUl.classList.toggle('ativo')
  if (window.pageYOffset <= 200) {
    navPrimary.classList.toggle('bgdark')
  }
})

linksNav.forEach((item) => {
  item.addEventListener('click', () => {
    navUl.classList.toggle('ativo')
    document.body.classList.toggle('overflow-hidden')
  })
})


window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 200) {
    navPrimary.classList.add('bgdark')
  } else {
    navPrimary.classList.remove('bgdark')
  }
})

// copywiright 
const dateCopy = new Date();
const spanCopy = document.querySelector('span.copy');
spanCopy.innerHTML = dateCopy.getFullYear()


const video = document.querySelector('video')




//----------------------------
const serieBTN = document.querySelector('.series-btn')
const moviesBTN = document.querySelector('.movies-btn')
const homeBTN = document.querySelector('.home-btn')
const articleMain = document.querySelectorAll('article')

function exibeSeries(evento) {
  // evento.preventDefault()

  articleMain.forEach((item) => {
    item.classList.remove('dsp-none')
    if (item.classList.contains('series')) {
      item.classList.add('dsp-inital')
    } else {
      item.classList.add('dsp-none')
    }
  })

}

function exibeFilmes(evento) {
  // evento.preventDefault()
  articleMain.forEach((item) => {
    item.classList.remove('dsp-none')
    if (item.classList.contains('movies')) {

      item.classList.add('dsp-inital')
    } else {
      item.classList.add('dsp-none')
    }
  })

}
serieBTN.addEventListener('click', exibeSeries)
moviesBTN.addEventListener('click', exibeFilmes)