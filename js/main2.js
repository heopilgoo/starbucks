console.log('hello');

// 검색창 관련
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchInputEl.setAttribute('placeholder', '통합검색');
    searchEl.classList.add('focused');
});

searchInputEl.addEventListener('blur', function() {
    searchInputEl.setAttribute('placeholder', '');
    searchEl.classList.remove('focused');
});

// 배너의 Fade-in 애니메이션
const fadeEls = document.querySelectorAll('.banner .fade-in');

fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, {
        delay: (index + 1) * 0.5,
        opacity: 1,
        duration: 1
    });
});

// 공지사항 슬라이더 설정
new Swiper('.notice .swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.notice .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.notice .swiper-prev',
        nextEl: '.notice .swiper-next',
    },
});

// 프로모션 슬라이더 설정
const promoSwiper = new Swiper('.promotion .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    },
});

// 프로모션 슬라이더 제어 버튼 설정
const swiperControlBtn = document.querySelector('.swiper-control-btn');
swiperControlBtn.addEventListener('click', function() {
    let isSwiperOn = swiperControlBtn.classList.contains('on');
    if (isSwiperOn) {
        swiperControlBtn.classList.remove('on');
        promoSwiper.autoplay.stop();
    } else {
        swiperControlBtn.classList.add('on');
        promoSwiper.autoplay.start();
    }
});

// 프로모션 토글 기능
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', function() {
    if (promotionEl.classList.contains('show')) {
        promotionEl.classList.remove('show');
        promotionEl.classList.add('hide');
        promotionToggleBtn.textContent = 'keyboard_arrow_down'; // 화살표 방향 변경
    } else {
        promotionEl.classList.remove('hide');
        promotionEl.classList.add('show');
        promotionToggleBtn.textContent = 'keyboard_arrow_up'; // 화살표 방향 변경
    }
});

// ScrollMagic 설정
const sqyEls = document.querySelectorAll('#body_layout .scroll-sqy');

sqyEls.forEach(function(sqyEl) {
    new ScrollMagic.Scene({
        triggerElement: sqyEl,
        triggerHook: 0.8
    })
    .setClassToggle(sqyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5, // 한 화면에 5개의 슬라이드 표시
      spaceBetween: 30, // 슬라이드 간의 간격
      loop: true, // 슬라이드 반복
      autoplay: {
        delay: 3000, // 3초마다 슬라이드 전환
        disableOnInteraction: false, // 사용자가 상호작용해도 자동 전환 유지
      },
      navigation: {
        prevEl: '.swiper-prev', // 이전 버튼 선택자
        nextEl: '.swiper-next', // 다음 버튼 선택자
      },
      
    });
  });


  const badgeEl = document.querySelector('#head_layout .badges');
  //console.log('badges');

  window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrrolY);
    if(window.scrollY > 500){
        // 배지 숨기기
        //badgeEl.style.display = 'none';
        gsap.to(badgeEl,.6,{
            opacity:0,
            display:'none'
        });
        // 상단버튼 보이기 
        gsap.to('#top', .3,{
            x : 0
        });
            
        

    }else{
        //badgeEl.style.display = 'block';
        gsap.to(badgeEl,.6,{
            opacity:1,
            display:'block'
        });
        //상단버튼 숨기기 
        gsap.to('#top', .3,{
            x:100
        });

    }

},300));

// 상단으로 이동 

const topEl = document.querySelector('#top');
topEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo : 0
    })
});