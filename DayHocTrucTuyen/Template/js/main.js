//const { flash } = require("modernizr");
$(window).load(function () {
    $('.wavy-wraper').addClass('hidden');
});
(function () {
    "use strict";

    //--- bootstrap tooltip and popover	
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    });

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) backtotop.classList.add('active')
            else backtotop.classList.remove('active')
        });
        $(".back-to-top").click(function () {
            $("body,html").animate({ scrollTop: 0 }, 'slow');
        });
    });

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Testimonials slider
     */
    new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()


//JS xử lý các sự kiện

//Hàm đăng xuất
function dangxuat() {
    $.getJSON('/Default/Logout', function (data) {
        getThongBao('success', 'Đăng xuất thành công', data.mess)

        //Thay đổi header khi đăng xuất
        document.getElementById('userSystem').innerHTML =
            '<a href="/Default/Register" class="get-started-a">Đăng ký</a>' +
            '<a href="/Default/Login" class="btn get-started-btn">Đăng nhập</a>';
    })
}