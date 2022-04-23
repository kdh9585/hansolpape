$(document).ready(function () {
    // 모달창
    let modal_close = $('.modal-close');
    let modal = $('.modal');

    modal_close.click(function () {
        modal.hide();
    });

    let modal_bt = $('.modal-bt');
    modal_bt.click(function () {
        modal.show();
    });

    //  주메뉴 기본형
    let gnb = $('.gnb');
    gnb.mouseenter(function () {
        $(this).find('.submenu').show();
    });
    gnb.mouseleave(function () {
        $(this).find('.submenu').hide();
    });

    new Swiper('.sw-visual', {
        loop: true, // 무한반복
        autoplay: {
            delay: 1000, // 대기시간
            disableOnInteraction: false, // 사용자 siwipe 후에 다시 실행
        },
        speed: 1000, // 모션 속도

        // 좌우 이동 버튼
        navigation: {
            nextEl: '.sw-visual-next',
            prevEl: '.sw-visual-prev'
        },

        // 슬라이드 목록
        pagination: {
            el: '.sw-visual-pg',
            clickable: true,
        }
    });
    
});