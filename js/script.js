$(document).ready(function () {
    // 모달창
    let modal_close = $('.modal-close');
    let modal = $('.modal');
    let sw_visual_control_a = $('.sw-visual-control a');
    let sw_visual_bar = $('.sw-visual-bar');
    // 자연스러운 UI 를 위해서 글자 색상 유지
    let sw_visual_focus = 0;


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

        on: {
            slideChange: function () {
                changeVisual(this.realIndex)
            }
        }
    
    

    });

    new Swiper('.sw-polite', {
        loop: true, // 무한반복
        // 좌우 이동 버튼
        navigation: {
            nextEl: '.sw-polite-next',
            prevEl: '.sw-polite-prev'
        }
    });



    function changeVisual(_index) {
        sw_visual_control_a.removeClass('sw-visual-focus');
        sw_visual_control_a.eq(_index).addClass('sw-visual-focus');
        sw_visual_bar.css('left', `${(20*_index)}%`);

        // 현재 포커스를 저장해 둔다.
        sw_visual_focus = _index;
    }


    // 메뉴 클릭 처리
    $.each(sw_visual_control_a, function (index, item) {
        // 사용자 UI 를 개선한다.
        $(this).mouseenter(function () {
            sw_visual.autoplay.stop();
            // 글자 포커스 
            sw_visual_control_a.removeClass('sw-visual-focus');
            sw_visual_control_a.eq(index).addClass('sw-visual-focus');
            // 포커스 유지
            sw_visual_control_a.eq(sw_visual_focus).addClass('sw.visual-focus');
        });
        $(this).mouseleave(function () {
            sw_visual.autoplay.start();
        });
        // 클릭 처리
        $(this).click(function (event) {
            // href 를 막는다.
            event.preventDefault();
            // 슬라이드 내용 이동
            sw_visual.slideTo(index, 1000, false);
            // 라인 이동하기
            changeVisual(index);
        });
    });


});