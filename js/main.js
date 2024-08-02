console.log('hello');

const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('.search input');
const searchIconEl = document.querySelector('.search span');

searchIconEl.addEventListener('click', function(event) {
    event.stopPropagation(); // 이벤트 전파 방지

    if (!searchEl.classList.contains('focused')) {
        searchEl.classList.add('focused');
        searchInputEl.style.width = '190px'; // 너비 확장
        searchInputEl.focus(); // 포커스 주기
    } else {
        searchEl.classList.remove('focused');
        searchInputEl.style.width = '36px'; // 너비 축소
        searchInputEl.blur(); // 포커스 해제
        searchInputEl.setAttribute('placeholder', ''); // placeholder 비우기
    }
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색'); // 포커스 시 placeholder 변경
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', ''); // 포커스 해제 시 placeholder 비우기
});

const swiper = new Swiper('notice_line', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay:true

  });


new Swiper('.promotion .swiper-container ', {
    sliderPerView:3 , // 한번에 보여질 슬라이드 개수
    spaceBetween:10, // 슬라이드 사이 여백 
    centerSlides:true, // 보여질 슬라이드가 가운데
    loop:true ,
    autoplay:true,
});