$(document).ready(function() {
  // 導覽列按鈕
  $('.js-m-navbar__button').on('click', function(e) {
    $('.js-m-navbar__button').toggleClass('is-active')
    $('.js-m-navbar__list').toggleClass('is-active')
    e.preventDefault()
  })
  // 導覽列按鈕 end

  // 固定導覽列
  const setFixed = $('.js-m-navbar')
  let menuTop = setFixed.offset().top

  $(window).on('load scroll resize', function() {
    if ($(window).scrollTop() > menuTop) {
      setFixed.addClass('is-fixtop')
    } else {
      setFixed.removeClass('is-fixtop')
    }
  })
  // 固定導覽列 end

  // 至頂按鈕
  const backtopBtn = $('.js-e-backtop-btn')

  backtopBtn.hide()

  backtopBtn.on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow')
    return false
  })
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      backtopBtn.fadeIn()
    } else {
      backtopBtn.fadeOut()
    }
  })
  // 至頂按鈕 end
})
