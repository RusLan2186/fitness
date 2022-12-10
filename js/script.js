// ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('active');
   })
})

// ............................................................................................................

new Swiper('.services__slider', {
   slidesPerView: 4,
   // spaceBetween: 30,
   autowidth: true,
   navigation: {
      nextEl: '.services__arrow-right',
      prevEl: '.services__arrow-left'
   },
   nested: true,
   speed: 800,
   breakpoints: {
      320: {
         slidesPerView: 1.2,
         spaceBetween: 10,
         autoHeight: true,
      },
      580: {
         slidesPerView: 2,

      },
      840: {
         slidesPerView: 3,

      },
      991: {
         slidesPerView: 3
      },
      1100: {
         slidesPerView: 4
      }
   }
});


new Swiper('.instructors__slider', {
   slidesPerView: 3,
   spaceBetween: 82,
   autowidth: true,
   navigation: {
      nextEl: '.instructors__arrow-right',
      prevEl: '.instructors__arrow-left'
   },
   nested: true,
   speed: 800,
   breakpoints: {
      320: {
         slidesPerView: 1.2,
         spaceBetween: 5,
         autoHeight: true,
         spaceBetween: 10,
      },
      650: {
         slidesPerView: 2,
         autoHeight: true,

      },
      700: {
         slidesPerView: 2,
         // spaceBetween: 20,

      },

      850: {
         slidesPerView: 3
      }
   }
});

new Swiper('.testimonial__slider', {
   slidesPerView: 1,
   // spaceBetween: 82,
   autowidth: true,
   navigation: {
      nextEl: '.testimonial__arrow-right',
      prevEl: '.testimonial__arrow-left'
   },
   nested: true,
   speed: 100,
   // breakpoints: {
   320: {
      slidesPerView: 1.2,
      spaceBetween: 55,
      autoHeight: true,
      spaceBetween: 10,
   },
   //    650: {
   //       slidesPerView: 2,
   //       autoHeight: true,

   //    },
   //    700: {
   //       slidesPerView: 2,
   //       // spaceBetween: 20,

   //    },

   //    850: {
   //       slidesPerView: 3
   //    }
   // }
});


// спойлер-аккордион 
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.item-spoiler__link').click(function (event) {
      // общий класс спойлера
      if ($('.footer-top__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.item-spoiler__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.item-spoiler__block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});


// КНОПКА НАВЕРХ

$('.back-to-top').click(function () {
   $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
   let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

   if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back-to-top').addClass('active');
   } else {
      $('.back-to-top').removeClass('active');
   }
});
