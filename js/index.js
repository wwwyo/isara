$(function() {
  const init = () => {
    $('.page-top').hide();
  }

  const appearPageTop = () => {
    $('.page-top').fadeIn();
  };

  const removePageTop = () =>{
    $('.page-top').fadeOut();
  };

  const scrollTop = () => {
    $('html').animate({scrollTop: 0});
  };

  const scrollForm = () => {
    const formTop = $('form').position().top;
    $('html').animate({scrollTop: formTop});
  };

  $(window).scroll(() => {
    const pageTop = $(this).scrollTop();
    if (pageTop >= 100) {
      appearPageTop();
    } else {
      removePageTop();
    }
  });

  $('.page-top').click(scrollTop); 
  $('.header__right-mt').click(scrollForm);
  $('.header__right-lt').click(scrollForm);
  $('.recruit__form').click(scrollForm);

  $('.learn-flow__list-head').click((obj) => {
    const target = obj.currentTarget;
    $(target).next('.learn-flow__list-body').slideToggle();
    $(target).find('.slide-down').toggleClass('slide-up');
  })

  $('.q_and_a__wrapper').find('.slide-down').click((obj) => {
    const target = obj.currentTarget;
    $(target).next('p').slideToggle();
    $(target).toggleClass('slide-up');
  })

  init();
});