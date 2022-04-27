// Page Loader : hide loader when all are loaded
$(window).load(function () {
    "use strict";
    $('.wavy-wraper').addClass('hidden');
});

//Custom time
$(document).ready(function () {
    $("span.timeago").timeago();
    $("i.timeago").timeago();
});

jQuery(document).ready(function ($) {

    "use strict";

    //----- popup display on window load	
    function delay() {
        $(".popup-wraper.subscription").fadeIn();
    }
    window.setTimeout(delay, 3000);

    $('.popup-closed').on('click', function () {
        $('.popup-wraper.subscription').addClass('closed');
        return false;
    });
    // popup end	

    //------- Notifications Dropdowns
    $('.top-area > .setting-area > li > a').on("click", function () {
        var $parent = $(this).parent('li');
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        $parent.siblings().children('div').removeClass('active');
        $(this).siblings('div').toggleClass('active');
        return false;
    });

    $('.popup-wraper4').on('click', function (e) {
        if (e.target.id != 'createRoomHelp') {
            $(".popup-roomhelp").removeClass('active');
        }
        else {
            $(".popup-roomhelp").toggleClass('active');
        }
    })
    $('.popup-createExam').on('click', function (e) {
        if (e.target.id != 'createHelp') {
            $(".popup-roomhelp").removeClass('active');
        }
        else {
            $(".popup-roomhelp").toggleClass('active');
        }
    })

    $("body *").not('.top-area > .setting-area > li > a').on("click", function () {
        $(".top-area > .setting-area > li > a").removeClass('active');

    });


    // New submit post box
    $(".new-postbox").click(function () {
        $(".postoverlay").fadeIn(500);
    });
    $(".postoverlay").not(".new-postbox").click(function () {
        $(".postoverlay").fadeOut(500);
    });
    //$("[type = submit]").click(function () {
    //    var post = $("textarea").val();
    //    $("<p class='post'>" + post + "</p>").appendTo("section");
    //});	

    // top menu list	
    $('.main-menu > span').on('click', function () {
        $('.nav-list').slideToggle(300);

    });

    // show comments	
    $('.comment').on('click', function () {
        $(this).parents(".post-meta").siblings(".coment-area").slideToggle("slow");
    });

    // add / post location	
    $('.add-loc').on('click', function () {
        $('.add-location-post').slideToggle("slow");
    });

    // add popup upload from gallery	
    $('.from-gallery').on('click', function () {
        $('.already-gallery').addClass('active');

    });

    $('.canceld').on('click', function () {
        $('.already-gallery').removeClass('active');
    });

    // Stories slide show
    $('.story-box').on('click', function () {
        $('.stories-wraper').addClass('active');
    });
    $('.close-story').on('click', function () {
        $('.stories-wraper').removeClass('active');
    });

    // add popup upload photo
    $('.edit-prof').on('click', function () {
        $('.popup-wraper').addClass('active');
    });
    $('.popup-closed').on('click', function () {
        $('.popup-wraper, .popup-wraper1').removeClass('active');
    });

    // Create class room
    $('.create-room').on('click', function () {
        $('.popup-wraper4').addClass('active');
    });
    $('.popup-closed').on('click', function () {
        $('.popup-wraper4').removeClass('active');
        $('.popup-roomhelp').removeClass('active');
    });

    // Create group friend
    $('.item-upload.album').on('click', function () {
        $('.popup-wraper5').addClass('active');
    });
    $('.popup-closed').on('click', function () {
        $('.popup-wraper5').removeClass('active');
    });

    // popup event
    $('.event-title h4').on('click', function () {
        $('.popup-wraper7').addClass('active');
    });
    $('.popup-closed').on('click', function () {
        $('.popup-wraper7').removeClass('active');
    });

    // chat messenger remove unread
    $('.msg-pepl-list .nav-item').on('click', function () {
        $(this).removeClass('unread');
    });

    // select gender on pitpoint page	
    $('.select-gender > li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // select amount on donation page	
    $('.amount-select > li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // select pay method on donation page	
    $('.pay-methods > li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // popup add user
    $('.user-add').on('click', function () {
        $('.popup-wraper6').addClass('active');
    });
    $('.popup-closed').on('click', function () {
        $('.popup-wraper6').removeClass('active');
        return false;
    });

    // popup send message
    $('.send-mesg').on('click', function () {
        $('.popup-wraper1').addClass('active');
        return false;
    });

    // popup report post
    $('.bad-report').on('click', function () {
        $('.popup-reportPost').addClass('active');
        return false;
    });
    $('.popup-closed, .cancel').on('click', function () {
        $('.popup-reportPost').removeClass('active');
        return false;
    });

    // popup report comment
    $('.rpt-comment').on('click', function () {
        $('.popup-reportComment').addClass('active');
        return false;
    });
    $('.popup-closed, .cancel').on('click', function () {
        $('.popup-reportComment').removeClass('active');
        return false;
    });
    // popup create bài thi
    $('.create-exam').on('click', function () {
        $('.popup-createExam').addClass('active');
        return false;
    });
    $('.popup-closed, .cancel').on('click', function () {
        $('.popup-createExam').removeClass('active');
        return false;
    });
    // popup edit bài thi
    $('.edit-exam').on('click', function () {
        $('.popup-editExam').addClass('active');
        return false;
    });
    $('.popup-closed, .cancel').on('click', function () {
        $('.popup-editExam').removeClass('active');
        return false;
    });
    // popup create quest
    $('.create-quest').on('click', function () {
        $('.popup-createQuest').addClass('active');
        return false;
    });
    $('.popup-closed, .cancel').on('click', function () {
        $('.popup-createQuest').removeClass('active');
        return false;
    });

    // comments popup
    jQuery(window).on("load", function () {
        $('.show-comt').bind('click', function () {
            $('.pit-comet-wraper').addClass('active');
        });
    });
    // comments popup
    $('.add-pitrest > a, .pitred-links > .main-btn, .create-pst').on('click', function () {
        $('.popup-wraper').addClass('active');
        return false;
    });

    // share post popup	
    $('.share-pst').on('click', function () {
        $('.popup-wraper2').addClass('active');
        return false;
    });
    $('.popup-closed, .cancel').on('click', function () {
        $('.popup-wraper2').removeClass('active');
    });

    // messenger call popup
    $('.audio-call, .video-call').on('click', function () {
        $('.call-wraper').addClass('active');
    });
    $('.decline-call, .later-rmnd').on('click', function () {
        $('.call-wraper').removeClass('active');
    });

    // Touch Spin cart qty number
    if ($.isFunction($.fn.TouchSpin)) {
        $('.qty').TouchSpin({});
    }

    // drag drop widget

    $(init);
    function init() {
        $(".droppable-area1, .droppable-area2").sortable({
            connectWith: ".connected-sortable",
            stack: '.connected-sortable ul'
        }).disableSelection();
    }

    // search fadein out at navlist area	
    $('.search-data').on('click', function () {
        $(".searchees").fadeIn("slow", function () {
        });
        return false;
    });

    $('.cancel-search').on('click', function () {
        $(".searchees").fadeOut("slow", function () {
        });
        return false;
    });

    //------- remove class active on body
    $("body *").not('.top-area > .setting-area > li > a').on("click", function () {
        $(".top-area > .setting-area > li > div").not('.searched').removeClass('active');
    });


    //--- user setting dropdown on topbar	
    $('.user-img').on('click', function () {
        $('.user-setting').toggleClass("active");
    });

    //add tin nhắn
    function setChat(user, avt, mess, time) {
        var main = document.getElementById('mess-content');
        var li = document.createElement('li');
        li.classList = user;
        var user = document.createElement('div');
        user.classList = 'chat-thumb';
        var img = document.createElement('img');
        if (avt) { img.src = '/Content/Img/userAvt/' + avt; }
        else { img.src = '/Content/Img/userAvt/avt-default.png'; }
        user.appendChild(img);
        li.appendChild(user);
        var model = document.createElement('div');
        model.classList = 'notification-event';
        var spnmodel = document.createElement('span');
        spnmodel.classList = 'chat-message-item';
        spnmodel.innerText = mess;
        model.appendChild(spnmodel);
        var spntime = document.createElement('span');
        spntime.classList = 'notification-date';
        var i = document.createElement('i');
        i.classList = 'timeago';
        i.title = time;
        i.innerText = time;
        spntime.appendChild(i);
        model.appendChild(spntime);
        li.appendChild(model);
        main.appendChild(li);
    }

    //Mã người nhận tin nhắn
    var messUserReceived;
    //--- side message box	
    $('.friendz-list > li, .chat-users > li, .drops-menu > li > a.show-mesg').on('click', function () {
        var maNG = this.children[0].id;
        messUserReceived = maNG;

        var firstLoad = true;
        setInterval(function () {
            $.ajax({
                url: '/User/Mess/getTinNhanTuUser',
                type: 'POST',
                data: { maNG: maNG },
                success: function (data) {
                    if (!data.tt) {
                        getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
                    }
                    else {
                        document.getElementById('mess-content').innerHTML = null;
                        document.getElementById('mess-user-name').innerHTML = data.USend.Ho_Lot + " " + data.USend.Ten;
                        $.each(data.TinNhan, function (index, value) {
                            if (value.Nguoi_Gui == maNG) setChat('you', data.USend.Img_Avt, value.Noi_Dung, value.Thoi_Gian);
                            else setChat('me', data.UReceived.Img_Avt, value.Noi_Dung, value.Thoi_Gian);
                        })
                    }
                    document.getElementById('mess-view-info').onclick = function () { location.replace('/Profile/Info?User=' + data.USend.Ma_ND) }
                    $("i.timeago").timeago();

                    if (firstLoad) {
                        //Thanh cuộn cuối phần tử tin nhắn
                        var messContent = document.getElementById('mess-content');
                        messContent.scrollTop = messContent.scrollHeight - messContent.clientHeight;
                        firstLoad = false;
                    }
                },
                error: function () {
                    getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
                }
            })
        }, 500);
        $('.chat-box').addClass("show");
        return false;
    });
    $('.close-mesage').on('click', function () {
        $('.chat-box').removeClass("show");
        return false;
    });

    $('#mess-send').on('click', function () {
        var noidung = document.getElementById('mess-new-text');
        if (!noidung.value) {
            getThongBao('error', 'Lỗi', 'Nội dung tin nhắn không được để trống!');
            return false;
        }
        $.ajax({
            url: '/User/Mess/sendNewTinNhan',
            type: 'POST',
            data: { maNN: messUserReceived, noidung: noidung.value },
            success: function (data) {
                if (!data.tt) {
                    getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
                }
                else {
                    setChat('me', data.Img_Avt, data.Noi_Dung, data.Thoi_Gian);
                    noidung.value = null;
                }
                $("i.timeago").timeago();

                //Thanh cuộn cuối phần tử tin nhắn
                var messContent = document.getElementById('mess-content');
                messContent.scrollTop = messContent.scrollHeight - messContent.clientHeight;
            },
            error: function () {
                getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
            }
        })
    })

    //------ scrollbar plugin
    if ($.isFunction($.fn.perfectScrollbar)) {
        $('.dropdowns, .twiter-feed, .invition, .followers, .chatting-area, .peoples, #people-list, .chat-list > ul, .message-list, .chat-users, .left-menu, .sugestd-photo-caro, .popup.events, .related-tube-psts, .music-list, .more-songs, .media > ul, .conversations, .msg-pepl-list, .menu-slide, .frnds-stories, .modal-body .we-comet').perfectScrollbar();
    }

    /*--- socials menu scritp ---*/
    $('.trigger').on("click", function () {
        $(this).parent(".menu").toggleClass("active");
    });

    /*--- left menu full ---*/
    $('.menu-small').on("click", function () {
        $(".fixed-sidebar.left").addClass("open");

    });
    $('.closd-f-menu').on("click", function () {
        $(".fixed-sidebar.left").removeClass("open");

    });

    /*--- emojies show on text area ---*/
    $('.add-smiles > span, .smile-it').on("click", function () {
        $(this).siblings(".smiles-bunch").toggleClass("active");
    });

    $('.smile-it').on("click", function () {
        $(this).children(".smiles-bunch").toggleClass("active");
    });

    //save post click	
    $('.save-post, .bane, .get-link').on("click", function () {
        $(this).toggleClass("save");
    });

    // delete notifications
    $('.notification-box > ul li > i.del').on("click", function () {
        $(this).parent().slideUp();
        return false;
    });

    /*--- socials menu scritp ---*/
    $('.f-page > figure i').on("click", function () {
        $(".drop").toggleClass("active");
    });


    //select photo in upload photo popup	
    $('.sugestd-photo-caro > li').on('click', function () {
        $(this).toggleClass('active');
        return false;
    });

    //--- pitred point adding
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');

        $('.minus').on("click", function () {
            $(this).siblings('input').removeClass("active");
            $(this).siblings('.plus').removeClass("active");

        });

        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');

        $('.plus').on("click", function () {
            $(this).addClass("active");
            $(this).siblings('input').addClass("active");
        });
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //Link copied on click 	

    $(".get-link").click(function (event) {
        event.preventDefault();
        CopyToClipboard(this.parentElement.parentElement.children[0].children[0].href, true, "Đã sao chép");
    });

    function CopyToClipboard(value, showNotification, notificationText) {

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove();

        if (typeof showNotification === 'undefined') {
            showNotification = true;
        }
        if (typeof notificationText === 'undefined') {
            notificationText = "Copied to clipboard";
        }

        var notificationTag = $("div.copy-notification");
        if (showNotification && notificationTag.length == 0) {
            notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
            $("body").append(notificationTag);

            notificationTag.fadeIn("slow", function () {
                setTimeout(function () {
                    notificationTag.fadeOut("slow", function () {
                        notificationTag.remove();
                    });
                }, 1000);
            });
        }
    }


    //===== Search Filter =====//
    (function ($) {
        // custom css expression for a case-insensitive contains()
        jQuery.expr[':'].Contains = function (a, i, m) {
            return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };

        function listFilter(searchDir, list) {
            var form = $("<form>").attr({ "class": "filterform", "action": "#" }),
                input = $("<input>").attr({ "class": "filterinput", "type": "text", "placeholder": "Search Contacts..." });
            $(form).append(input).appendTo(searchDir);

            $(input)
                .change(function () {
                    var filter = $(this).val();
                    if (filter) {
                        $(list).find("li:not(:Contains(" + filter + "))").slideUp();
                        $(list).find("li:Contains(" + filter + ")").slideDown();
                    } else {
                        $(list).find("li").slideDown();
                    }
                    return false;
                })
                .keyup(function () {
                    $(this).change();
                });
        }

        //search friends widget
        $(function () {
            listFilter($("#searchDir"), $("#people-list"));
        });
    }(jQuery));

    //progress line for page loader
    $('body').show();
    NProgress.start();
    setTimeout(function () { NProgress.done(); $('.fade').removeClass('out'); }, 2000);

    //--- bootstrap tooltip and popover	
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    });

    // Sticky Sidebar & header
    if ($(window).width() < 981) {
        $(".sidebar").children().removeClass("stick-widget");
    }

    if ($.isFunction($.fn.stick_in_parent)) {
        $('.stick-widget').stick_in_parent({
            parent: '#page-contents',
            offset_top: 60,
        });


        $('.stick').stick_in_parent({
            parent: 'body',
            offset_top: 0,
        });

    }

    /*--- topbar setting dropdown ---*/
    $(".we-page-setting").on("click", function () {
        $(".wesetting-dropdown").toggleClass("active");
    });

    /*--- topbar toogle setting dropdown ---*/
    $('#nightmode').on('change', function () {
        if ($(this).is(':checked')) {
            // Show popup window
            $(".theme-layout").addClass('black');
        }
        else {
            $(".theme-layout").removeClass("black");
        }
    });

    //chosen select plugin
    if ($.isFunction($.fn.chosen)) {
        $("select").chosen();
    }

    //----- add item plus minus button
    if ($.isFunction($.fn.userincr)) {
        $(".manual-adjust").userincr({
            buttonlabels: { 'dec': '-', 'inc': '+' },
        }).data({ 'min': 0, 'max': 20, 'step': 1 });
    }

    if ($.isFunction($.fn.loadMoreResults)) {
        $('.loadMore').loadMoreResults({
            displayedItems: 5,
            showItems: 5,
            button: {
                'class': 'btn-load-more',
                'text': 'Load More'
            }
        });

        $('.load-more').loadMoreResults({
            displayedItems: 3,
            showItems: 3,
            button: {
                'class': 'btn-load-more',
                'text': 'Load More'
            }
        });
        $('.load-more-room-join').loadMoreResults({
            displayedItems: 5,
            showItems: 5,
            button: {
                'class': 'btn-load-more',
                'text': 'Load More'
            }
        });

        $('.load-more4').loadMoreResults({
            displayedItems: 5,
            showItems: 1,
            button: {
                'class': 'btn-load-more',
                'text': 'Load More'
            }
        });
    }
    //===== owl carousel  =====//
    if ($.isFunction($.fn.owlCarousel)) {
        $('.sponsor-logo').owlCarousel({
            items: 6,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3,
                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 6,
                }
            }

        });

        //contributors on tube channel
        $('.contributorz').owlCarousel({
            items: 6,
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 6,
                }
            }

        });

        /*--- timeline page ---*/
        $('.suggested-frnd-caro').owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            autoplay: false,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 4,

                },
                1000: {
                    items: 4,
                }
            }
        });

        $('.frndz-list').owlCarousel({
            items: 5,
            loop: true,
            margin: 10,
            autoplay: false,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 5,
                }
            }
        });

        $('.photos-list').owlCarousel({
            items: 5,
            loop: true,
            margin: 10,
            autoplay: false,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 5,
                }
            }
        });

        $('.videos-list').owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,

                },
                1000: {
                    items: 3,
                }
            }
        });

        //Badges carousel on badges page
        $('.badge-caro').owlCarousel({
            items: 6,
            loop: true,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            center: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 4,

                },
                1000: {
                    items: 6,
                }
            }
        });

        // Related groups on groups page
        $('.related-groups').owlCarousel({
            items: 6,
            loop: true,
            margin: 50,
            autoplay: false,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10,
                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 6,
                }
            }
        });

        // trending pitred posts
        $('.pitred-trendings.six').owlCarousel({
            items: 6,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10,
                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 6,
                }
            }
        });

        // trending pitred posts
        $('.pitred-trendings').owlCarousel({
            items: 4,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10,
                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 4,
                }
            }
        });

        // Success couples caro in pitpoint page
        $('.succes-people').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,

                },
                1000: {
                    items: 1,
                }
            }
        });

        // Featured area fade caro soundnik page
        $('.soundnik-featured').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            center: false,
            animateOut: 'fadeOut',
            animateIn: 'fadein',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,

                },
                1000: {
                    items: 1,
                }
            }
        });

        // Promo Caro classified page
        $('.promo-caro').owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            autoplay: false,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 2,

                },
                1000: {
                    items: 3,
                }
            }
        });

        // Promo Caro classified page
        $('.testi-caro').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 1500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,

                },
                1000: {
                    items: 1,
                }
            }
        });

        //featured-text-caro
        $('.text-caro').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            dots: false,
            nav: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
        });

        //sponsors carousel	
        $('.sponsors').owlCarousel({
            loop: true,
            margin: 80,
            smartSpeed: 1000,
            responsiveClass: true,
            nav: true,
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 5,
                    nav: false,
                    dots: false
                }
            }
        });

        //team section carousel
        $('.team-carouzel').owlCarousel({
            loop: true,
            margin: 28,
            smartSpeed: 1000,
            responsiveClass: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                }
            }
        });

    }

    // slick carousel for detail page
    if ($.isFunction($.fn.slick)) {
        $('.slick-single').slick();

        $('.slick-multiple').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4
        });

        $('.slick-autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $('.slick-center-mode').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.slick-fade-effect').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });


        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });

        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            centerMode: true,
            focusOnSelect: true
        });
        $('.slider-for-gold').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            slide: 'li',
            fade: false,
            asNavFor: '.slider-nav-gold'
        });

        $('.slider-nav-gold').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for-gold',
            dots: false,
            arrows: false,
            slide: 'li',
            vertical: true,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        vertical: true,
                        centerMode: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        vertical: true,
                        centerMode: true,
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });
    }

    //---- calander	
    if ($.isFunction($.fn.jalendar)) {
        $('#yourId').jalendar({
            customDay: '11/01/2015',
            color: '#577e9a', // Unlimited Colors
            color2: '#57c8bf', // Unlimited Colors
            lang: 'EN',
            sundayStart: true
        });
    }

    //---- responsive header
    if ($.isFunction($.fn.mmenu)) {
        $(function () {

            //	create the menus
            $('#menu').mmenu();
            $('#shoppingbag').mmenu({
                navbar: {
                    title: 'General Setting'
                },
                offCanvas: {
                    position: 'right'
                }
            });

            //	fire the plugin
            $('.mh-head.first').mhead({
                scroll: {
                    hide: 200
                }

            });
            $('.mh-head.second').mhead({
                scroll: false
            });
        });
    }

    //**** Slide Panel Toggle ***//
    $("span.main-menu").on("click", function () {
        $(".side-panel").toggleClass('active');
        $(".theme-layout").toggleClass('active');
        return false;
    });

    $('.theme-layout').on("click", function () {
        $(this).removeClass('active');
        $(".side-panel").removeClass('active');
    });


    // login & register form
    $('button.signup').on("click", function () {
        $('.login-reg-bg').addClass('show');
        return false;
    });

    $('.already-have').on("click", function () {
        $('.login-reg-bg').removeClass('show');
        return false;
    });

    //----- count down timer		
    if ($.isFunction($.fn.downCount)) {
        $('.countdown').downCount({
            date: '11/12/2021 12:00:00',
            offset: +10
        });
    }

    //counter for funfacts
    if ($.isFunction($.fn.counterUp)) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
    /** Post a Comment **/
    jQuery(".post-comt-box textarea").on("keyup", function (event) {

        if (event.keyCode == 13) {
            var comment = jQuery(this);
            var parent = jQuery(this).parents('li');
            var slComment = $(this).parents('div')[2].children[2].lastElementChild.children[0].children[1].children[0].children[1];

            if (comment.val() == null || comment.val() == '\n') {
                getThongBao('error', 'Lỗi cú pháp', 'Bình luận không được để trống !')
                comment.val(null);
                return;
            }

            var form_data = new FormData();
            form_data.append('maPost', this.id);
            form_data.append('nd', comment.val());

            $.ajax({
                url: '/Courses/Post/createComment',
                type: 'POST',
                data: form_data,
                contentType: false,
                processData: false,
                success: function (data) {
                    var comment_HTML = '<li><div class="comet-avatar"><img alt="" src="/Content/Img/userAvt/' + data.anh + '"></div><div class="we-comment"><h5><a title="" href="/Profile/Info?User=' + data.ma + '">' + data.hoten + '</a></h5><p>' + comment.val() + '</p><div class="inline-itms"><span class="timeago" style="text-transform: none" title="' + data.postTimeCus + '">' + data.postTime + '</span><a title="Trả lời" class="we-reply">Trả lời</a><a title="Xóa bình luận" data-toggle="modal" data-target="#confirmDeleteComment" onclick="setComment(this,' + "'" + data.postId + "','" + data.postTime + "'" + ')">Xóa</a></div></div></li>';
                    if (data.anh == null) {
                        comment_HTML = '<li><div class="comet-avatar"><img alt="" src="/Content/Img/userAvt/avt-default.png"></div><div class="we-comment"><h5><a title="" href="/Profile/Info?User=' + data.ma + '">' + data.hoten + '</a></h5><p>' + comment.val() + '</p><div class="inline-itms"><span class="timeago" style="text-transform: none" title="' + data.postTimeCus + '">' + data.postTime + '</span><a title="Trả lời" class="we-reply">Trả lời</a><a title="Xóa bình luận" data-toggle="modal" data-target="#confirmDeleteComment" onclick="setComment(this,' + "'" + data.postId + "','" + data.postTime + "'" + ')">Xóa</a></div></div></li>';
                    }
                    $(comment_HTML).insertBefore(parent);
                    $("span.timeago").timeago();
                    slComment.textContent++;
                    comment.val(null);
                },
                error: function () {
                    getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
                }
            })
        }
    });

    //inbox page 	
    //***** Message Star *****//  
    $('.message-list > li > span.star-this').on("click", function () {
        $(this).toggleClass('starred');
    });


    //***** Message Important *****//
    $('.message-list > li > span.make-important').on("click", function () {
        $(this).toggleClass('important-done');
    });



    // Listen for click on toggle checkbox
    $('#select_all').on("click", function (event) {
        if (this.checked) {
            // Iterate each checkbox
            $('input:checkbox.select-message').each(function () {
                this.checked = true;
            });
        }
        else {
            $('input:checkbox.select-message').each(function () {
                this.checked = false;
            });
        }
    });
    // delete email from messages
    $(".delete-email").on("click", function () {
        $(".message-list .select-message").each(function () {
            if (this.checked) {
                $(this).parent().slideUp();
            }
        });
    });

    // change background color on hover
    /*$('.category-box').hover(function () {
        $(this).addClass('selected');
        $(this).parent().siblings().children('.category-box').removeClass('selected');
    });*/


    // Responsive nav dropdowns
    $('li.menu-item-has-children > a').on('click', function () {
        $(this).parent().siblings().children('ul').slideUp();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().children('ul').slideToggle();
        $(this).parent().toggleClass('active');
        return false;
    });

    // Slider box
    $(function () {
        $("#price-range").slider({
            range: "max",
            min: 18, // Change this to change the min value
            max: 65, // Change this to change the max value
            value: 18, // Change this to change the display value
            step: 1, // Change this to change the increment by value.
            slide: function (event, ui) {
                $("#priceRange").val(ui.value + " Years");
            }
        });
        $("#priceRange").val($("#price-range").slider("value") + " Years");
    });
    //--- range slider 	
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });


});//document ready end

/*--- progress circle with percentage ---*/
(function () {

    window.onload = function () {
        var totalProgress, progres;
        const circles = document.querySelectorAll('.progres');
        for (var i = 0; i < circles.length; i++) {
            totalProgress = circles[i].querySelector('circle').getAttribute('stroke-dasharray');
            progress = circles[i].parentElement.getAttribute('data-percent');
            circles[i].querySelector('.bar').style['stroke-dashoffset'] = totalProgress * progress / 100;

        }
    };
})();


//JS xử lý các sự kiện

//Kiểm tra nhập lại mật khẩu
function passValidate(id_pass, re_pass, kt_pass) {
    var pass = document.getElementById(id_pass);
    var pass_re = document.getElementById(re_pass);
    var tb = document.getElementById(kt_pass);
    if (pass.value == pass_re.value) {
        pass_re.style.borderColor = 'green';
        pass.style.borderColor = 'green';
        tb.style.display = 'none';
        return true;
    }
    else {
        pass_re.style.borderColor = 'red';
        pass.style.borderColor = 'red';
        tb.innerHTML = 'Xác nhận mật khẩu sai !';
        tb.style.display = 'block';
        $('#' + kt_pass).delay(1000).hide(1);
        return false;
    }
}

//Hàm đăng ký
function dangky() {
    $.getJSON('/Default/createAccount' + '?holot=' + $('#holotCreate').val() + '&ten=' + $('#tenCreate').val() + '&email=' + $('#emailCreate').val() + '&matkhau=' + $('#passCreate').val(), function (data) {
        if (data.tt) {
            window.location.href = "/Default/Index";
        }
        else {
            if (data.erro == "email") {
                document.getElementById('emailCreate').style.borderColor = 'red';
                document.getElementById('erroCreate').innerHTML = data.mess;
                $('#erroCreate').show('slow');
                $('#erroCreate').delay(3000).hide('slow');
                $('#emailCreate').focus();
            }
            else {
                document.getElementById('erroCreate').innerHTML = data.mess;
                $('#erroCreate').show('slow');
                $('#erroCreate').delay(3000).hide('slow');
            }
        }
    })
}

//Hàm đăng nhập
function dangnhap() {
    $.getJSON('/Default/getLogin' + '?email=' + $('#emailLogin').val() + '&pass=' + $('#passLogin').val(), function (data) {
        if (data.tt) {
            window.location.href = "/Default/Index";
        }
        else {
            document.getElementById('erroLogin').innerHTML = data.mess;
            $('#erroLogin').show('slow');
            $('#erroLogin').delay(3000).hide('slow');
        }
    })
}

//Hàm đăng xuất
function dangxuat() {
    $.getJSON('/Default/Logout', function (data) {
        location.replace('/Default/Login');
    })
}

//Bắt sự kiện khi nhấn đăng nhập
$('#formLogin').on('submit', function () {
    event.preventDefault();
    dangnhap()
})

//Thay đổi text của label nhập lại mật khẩu
$('#nhaplaiCreate').on('focus', function () {
    document.getElementById('lblnhaplaiCreate').innerHTML = 'Xác nhận';
})
$('#nhaplaiCreate').on('focusout', function () {
    if ($('#nhaplaiCreate').val() == null || $('#nhaplaiCreate').val() == '') {
        document.getElementById('lblnhaplaiCreate').innerHTML = 'Nhập lại mật khẩu';
    }
})

//Bắt sự kiện khi nhấn đăng ký
$('#formCreate').on('submit', function () {
    event.preventDefault();

    if (!passValidate('passCreate', 'nhaplaiCreate', 'ktnhaplaiCreate')) {
        return;
    }
    dangky()
})

//Bắt sự kiện check box hiển thị mật khẩu cho đăng nhập
$('.viewPass').on('click', function () {
    if (this.checked) {
        document.querySelector('.passInput').type = 'text';
    }
    else {
        document.querySelector('.passInput').type = 'password';
    }
})

//Bắt sự kiện chọn nghề nghiệp
function choseRole(uid, cv) {
    $.getJSON('/Default/choseEducation?uid=' + uid + '&cv=' + cv, function (data) {
        if (data.tt) {
            if (cv == '03') {
                location.replace('/User/GiaoVien/Index');
            }
            else {
                location.replace('/User/HocSinh/Index');
            }
        }
    })
}

//Bắt sự kiện thích trang
function like(nd, nt) {
    $.getJSON('/Profile/setThichTrang?nd=' + nd + '&nt=' + nt, function (data) {
        if (data.tt) {
            $('#btnLike').tooltip('hide').attr('data-original-title', 'Đã thích').tooltip('show');
            document.getElementById('btnLike').classList.remove('bg-success');
        }
        else {
            getThongBao('warning', 'Thông báo', 'Bạn không thể tự thích trang chính mình !');
        }
    })
}

//Bắt sự kiện khi thay đổi ảnh bìa
$("#edit-cover").change(function () {
    filename = this.files[0].name;
    document.getElementById("edit-cover").title = "Đã chọn: " + filename;
});

//Bắt sự kiện khi thay đổi ảnh đại diện
$("#edit-avt").change(function () {
    filename = this.files[0].name;
    document.getElementById("edit-avt").title = "Đã chọn: " + filename;
});

//Xử lý tạo room mới
$('#form-create-room').on('submit', function () {
    event.preventDefault();

    var text = document.getElementsByClassName('form-create-room');
    var form_data = new FormData();

    form_data.append('tl', text[0].value);
    if (text[1].value) form_data.append('bd', text[1].value);
    else form_data.append('bd', null);
    if (text[2].value) form_data.append('mt', text[2].value);
    else form_data.append('mt', null);
    form_data.append('tag', $('#room-create-tag').val());
    if ($('#img-room').prop('files')[0]) form_data.append("img", $('#img-room').prop('files')[0]);
    else form_data.append("img", null)

    $.ajax({
        url: '/Courses/Room/createRoom',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', data.mess);
            }
            else {
                location.replace('/Courses/Room/Detail?Room=' + data.room);
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
})
//Xử lý edit room
$('#form-edit-room').on('submit', function () {
    event.preventDefault();

    var text = document.getElementsByClassName('form-edit-room');
    var form_data = new FormData();

    form_data.append('ml', document.getElementById('viewroom-Name').title);
    form_data.append('tl', text[0].value);
    if (text[1].value) form_data.append('bd', text[1].value);
    else form_data.append('bd', null);
    if (text[2].value) form_data.append('mk', text[2].value);
    else form_data.append('mk', null);
    if (text[3].value) form_data.append('mt', text[3].value);
    else form_data.append('mt', null);
    form_data.append('tag', $('#room-edit-tag').val());
    if ($('#img-room').prop('files')[0]) form_data.append("img", $('#img-room').prop('files')[0]);
    else form_data.append("img", null)

    $.ajax({
        url: '/Courses/Room/editRoom',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', data.mess);
            }
            else {
                location.replace('/Courses/Room/Detail?Room=' + data.room);
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
})
//Tìm kiếm lớp học
$('#form-search-room').on('submit', function () {
    event.preventDefault();
    location.replace('/Courses/Room/List?q=' + document.getElementById('search-room-name').value);
})
//Hiển thị xem trước ảnh bg room
$('.edit-phto').on('change', '#img-room', function () {
    var anh = /(\.jpg|\.jpeg|\.png)$/i;

    if ($('#img-room').val()) {
        if (!anh.exec($('#img-room').prop('files')[0].name)) {
            getThongBao('error', 'Lỗi', 'Định dạng ảnh không chính xác !')
            document.getElementById('img-room').value = null;
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("img-bg-room").src = e.target.result;
        };
        reader.readAsDataURL(this.files[0]);
        document.getElementById('lbl-img-room').innerHTML = 'Đã chọn: ' + this.files[0].name;
    }
    else {
        document.getElementById('lbl-img-room').innerHTML = 'Chưa có ảnh nào được chọn';
    }
});

//Kiểm tra kích thước file trước khi post bài
$('#fileCreatePost').on('change', function () {
    var files = $("#fileCreatePost").get(0).files;
    var size = 0;
    for (var i = 0; i < files.length; i++) {
        size += files[i].size;
    }
    if (size > 20480 * 1024) {
        getThongBao('error', 'Tệp tin quá lớn', 'Chỉ cho phép tải tệp tin nhỏ hơn 20MB !')
        document.getElementById('fileCreatePost').value = null;
    }
})

//Hiển thị xem trước file khi tạo post
$('.attachments').on('change', '#fileCreatePost', function () {
    var mydiv = document.getElementById('previewPost');
    var anh = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    var pdf = /(\.pdf)$/i;

    mydiv.innerHTML = null;
    $.each(this.files, function (index, value) {
        //Xử lý khi file upload là ảnh
        if (anh.exec(value.name)) {
            var text = document.createTextNode(' ' + value.name);
            var i = document.createElement('i');
            i.classList = 'fa fa-file-image';

            var a = document.createElement('a');
            a.href = '#';
            a.download = 'download';
            a.appendChild(i);
            a.appendChild(text);

            var div = document.createElement('div');
            div.classList = 'col-12';
            div.appendChild(a);

            mydiv.appendChild(div);
        }
        //Xử lý khi file upload là pdf
        if (pdf.exec(value.name)) {
            var text = document.createTextNode(' ' + value.name);
            var i = document.createElement('i');
            i.classList = 'fa fa-file-pdf';

            var a = document.createElement('a');
            a.href = '#';
            a.download = 'download';
            a.appendChild(i);
            a.appendChild(text);

            var div = document.createElement('div');
            div.classList = 'col-12';
            div.appendChild(a);

            mydiv.appendChild(div);
        }
        //Xử lý khi file upload không phải ảnh và pdf
        if (!anh.exec(value.name) && !pdf.exec(value.name)) {
            var text = document.createTextNode(' ' + value.name);
            var i = document.createElement('i');
            i.classList = 'fa fa-file';

            var a = document.createElement('a');
            a.href = '#';
            a.download = 'download';
            a.appendChild(i);
            a.appendChild(text);

            var div = document.createElement('div');
            div.classList = 'col-12';
            div.appendChild(a);

            mydiv.appendChild(div);
        }
    })
    //Xử lý ẩn hoặc hiện thẻ preview
    if (mydiv.innerHTML) {
        mydiv.style.display = 'block';
    }
    else {
        mydiv.style.display = 'none';
    }
});

//Xử lý tạo bài đăng mới
$('#btnCreatePost').on('click', function () {
    event.preventDefault();
    var text = document.getElementsByClassName('form-create-post');
    var form_data = new FormData();

    if (text[0].value == "" && $('#fileCreatePost').val() == "") {
        getThongBao('error', 'Lỗi', 'Nội dung bài đăng không được để trống !')
        text[0].focus();
        return;
    }

    form_data.append('malop', document.getElementById('viewroom-Name').title)
    form_data.append('noidung', text[0].value);

    var files = $("#fileCreatePost").get(0).files;
    for (var i = 0; i < files.length; i++) {
        form_data.append('dinhkem', files[i]);
    }

    $.ajax({
        url: '/Courses/Post/createPost',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function () {
            location.reload();
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
})

//Bắt sự kiện thích hoặc bỏ thích post
function likePost(maPost, maND) {
    var form_data = new FormData();

    form_data.append('maPost', maPost);
    form_data.append('maND', maND);

    $.ajax({
        url: '/Courses/Post/setLikePost',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.tt) {
                $('#' + maPost).addClass('happy').removeClass('broken');
            }
            else {
                $('#' + maPost).removeClass('happy').addClass('broken');
            }
            $('#' + maPost).children('span').text(data.sl);
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}

//Xử lý xem hoặc tải xuống
var filePdfNameOfRoom = "";
function getChoose(fileName) {
    filePdfNameOfRoom = fileName;
}
function chooseView() {
    window.open('/Courses/Post/ViewPDF?fileName=' + encodeURIComponent(filePdfNameOfRoom));
}
function chooseDownload() {
    location = '/Courses/Post/getFile?fileName=' + encodeURIComponent(filePdfNameOfRoom);
}

//hàm hiển thị xem pdf nội tuyến
function viewpdf(url) {
    var viewpdf = $('#viewpdf')
    PDFObject.embed("/Content/filePost/" + encodeURIComponent(url), viewpdf)
}

//Đóng model xem pdf
$('#contain-viewpdf > button').on('click', function () {
    document.getElementById('contain-viewpdf').style.display = 'none';
})

//hàm cho phép tải file về máy cá nhân
function downloadfile(fileName) {
    location = '/Courses/Post/getFile?fileName=' + encodeURIComponent(fileName);
}

//Phần tử dom bình luận
var domBinhLuan;
var cmtDelMa;
var cmtDelTime;

//Hàm gán giá trị cho bình luận cần xóa
function setComment(comment, maPost, thoigian) {
    domBinhLuan = comment;
    cmtDelMa = maPost;
    cmtDelTime = thoigian;
}

//Hàm xóa bình luận
function deleteComment() {

    var slComment = $(domBinhLuan).parents('div')[3].children[2].lastElementChild.children[0].children[1].children[0].children[1];
    var form_data = new FormData();

    form_data.append('maPost', cmtDelMa);
    form_data.append('thoigian', cmtDelTime);

    $.ajax({
        url: '/Courses/Post/deleteComment',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.tt) {
                getThongBao('success', 'Thành công', 'Đã xóa bình luận thành công')
                domBinhLuan.parentNode.parentNode.parentNode.parentNode.removeChild(domBinhLuan.parentNode.parentNode.parentNode);
                slComment.textContent--;
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}

//Hàm gán thành viên tham gia lớp
function setJoinRoom(maLop) {
    $.ajax({
        url: '/Courses/Room/setJoinRoom',
        type: 'POST',
        data: { maLop },
        success: function (data) {
            if (data.tt) {
                location.reload()
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}

//Gán nội dung cho trả lời bình luận
$('.we-reply').on('click', function () {
    event.preventDefault()
    var parent = this.parentNode.parentNode.parentNode.parentNode;
    var node = parent.children[parent.childElementCount - 1].children[1].children[0].children[0];
    var text = this.parentNode.parentNode.children[0].children[0].text;
    node.focus();
    node.textContent = text;
})


//Phần tử dom bài đăng
var domPost;
var maPost;

//Hàm gán giá trị cho bài đăng cần xóa
function setDelPost(post, ma) {
    domPost = post;
    maPost = ma;
}
//Hàm xóa bài đăng
function deletePost() {
    var form_data = new FormData();

    form_data.append('maPost', maPost);

    $.ajax({
        url: '/Courses/Post/deletePost',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.tt) {
                $(domPost).parents('div')[5].remove()
                getThongBao('success', 'Thành công', 'Đã xóa bài đăng thành công !')
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}
//Hàm gán giá trị cho popup set trạng thái bài đăng
function setContentTrangThai(dom, ma) {
    domPost = dom;
    maPost = ma;
    var popup = document.getElementsByClassName('set-trang-thai-post');
    if (domPost.textContent == 'Khóa bài') {
        popup[0].innerHTML = 'Bạn muốn khóa bài đăng này?';
        popup[1].innerHTML = 'Sau khi bạn khóa, mọi người sẽ không thể bình luận và xem các bình luận trước đó. Bạn xác nhận muốn khóa?';
    }
    else {
        popup[0].innerHTML = 'Bạn muốn mở khóa bài đăng này?';
        popup[1].innerHTML = 'Sau khi bạn mở khóa, mọi người có thể bình luận và xem các bình luận trước đó. Bạn xác nhận muốn mở khóa?';
    }
}
//Hàm khóa hoặc mở khóa bài đăng
function setTrangThaiPost() {
    var form_data = new FormData();

    form_data.append('maPost', maPost);
    
    $.ajax({
        url: '/Courses/Post/setTrangThaiPost',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (!data.tt) {
                domPost.innerHTML = '<i class="fa fa-unlock"></i>Mở khóa</li>';
                $(domPost).parents('div')[3].children[3].innerHTML = '<div class="transform-none center-parent">Bài viết này đã bị khóa !</div>';
            }
            else {
                domPost.innerHTML = '<i class="fa fa-lock"></i>Khóa bài</li>';
                $(domPost).parents('div')[3].children[3].innerHTML = '<div class="transform-none center-parent">Đã mở khóa <a class="cursor-pointer" style="text-decoration: underline; color: rgb(82, 195, 255)" onclick="location.reload()">nhấn tải lại</a> bình luận.</div>';
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}
//Hàm chuyển về trang chỉnh sửa lớp học
function editRoom(room) {
    location.replace('/Courses/Room/editRoom?Room=' + room)
}
//Hàm hủy chỉnh sửa lớp
function editRoomCanel(room) {
    location.replace('/Courses/Room/Detail?Room=' + room)
}
//Ghim hoặc bỏ ghim bài đăng
function setGhim(dom, maPost) {
    var form_data = new FormData();
    form_data.append('maPost', maPost);
    $.ajax({
        url: '/Courses/Post/setGhim',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.tt) {
                dom.innerHTML = '<i class="bx bx-pin"></i>Bỏ ghim'
                $($(dom).parents('div')[2].children[0].children[0]).addClass('active')
                getThongBao('success', 'Thành công', 'Đã ghim bài viết lên đầu trang')
            }
            else {
                dom.innerHTML = '<i class="bx bx-pin"></i>Ghim'
                $($(dom).parents('div')[2].children[0].children[0]).removeClass('active')
                getThongBao('success', 'Thành công', 'Đã bỏ ghim bài viết')
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}
//Xử lý tạo bài thi mới
$('#form-create-exam').on('submit', function () {
    event.preventDefault();

    var text = document.getElementsByClassName('form-create-exam');
    var form_data = new FormData();

    form_data.append('malop', text[0].id);
    form_data.append('ten', text[0].value);
    form_data.append('thoiluong', text[1].value);
    form_data.append('mo', text[2].value);
    form_data.append('dong', text[3].value);
    form_data.append('lanthu', text[4].value);
    form_data.append('matkhau', text[5].value);
    form_data.append('xacthuc', text[6].checked);
    form_data.append('xemlai', text[7].checked);

    $.ajax({
        url: '/Courses/Exam/createExam',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                location.replace('/Courses/Exam/Manage?id=' + data.exam);
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
})

//Tìm kiếm bài thi
$('#form-search-exam').on('submit', function () {
    event.preventDefault();
    location.replace('/Courses/Exam/List?Room=' + document.getElementById('search-exam-room').title + '&q=' + document.getElementById('search-exam-name').value);
})

//Xử lý chỉnh sửa bài thi
$('#form-edit-exam').on('submit', function () {
    event.preventDefault();

    var text = document.getElementsByClassName('form-edit-exam');
    var form_data = new FormData();

    form_data.append('maphong', text[0].id);
    form_data.append('ten', text[0].value);
    form_data.append('thoiluong', text[1].value);
    form_data.append('mo', text[2].value);
    form_data.append('dong', text[3].value);
    form_data.append('lanthu', text[4].value);
    form_data.append('matkhau', text[5].value);
    form_data.append('xacthuc', text[6].checked);
    form_data.append('xemlai', text[7].checked);

    $.ajax({
        url: '/Courses/Exam/editExam',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                location.reload();
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
})

//Xử lý hiển thị mật khẩu bài thi
$('#exam-view-pass').on('click', function () {
    if (this.children[0].id == 'hide') {
        this.innerHTML = '<i id="show" class="fa fa-eye"></i>'
        document.getElementById('exam-pass-inp').type = 'password'
    }
    else {
        this.innerHTML = '<i id="hide" class="fa fa-eye-slash"></i>'
        document.getElementById('exam-pass-inp').type = 'text'
    }
})

//Hàm add DOM câu hỏi với 1 đáp án
function addDOMQuest(stt, maphong, cauhoi, dapan1, dapan2, dapan3, dapan4, loigiai) {
    var main = document.createElement('div');
    main.id = 'quest_' + stt;
    main.classList = 'central-meta';
    var nd_q = document.createElement('div');
    nd_q.classList = 'create-post';
    nd_q.innerText = 'Câu hỏi ' + stt;
    var ctrl_edit = document.createElement('div');
    ctrl_edit.classList = 'align-right';
    var btn_edit = document.createElement('button');
    btn_edit.classList = 'createoredit btn-outline-info edit-quest';
    btn_edit.setAttribute('data-toggle', 'tooltip');
    $(btn_edit).attr('data-original-title', 'Chỉnh sửa câu hỏi').tooltip('show');
    btn_edit.onclick = function () { setQuestEdit(stt, maphong) };
    var i = document.createElement('i');
    i.classList = 'fa fa-pencil';
    btn_edit.appendChild(i);
    ctrl_edit.appendChild(btn_edit);
    nd_q.appendChild(ctrl_edit);
    main.appendChild(nd_q);
    var content = document.createElement('div');
    content.classList = 'row';
    var quest = document.createElement('div');
    quest.classList = 'col-lg-12 col-md-12 col-sm-12 quest-content quest_' + stt;
    quest.innerText = cauhoi;
    content.appendChild(quest);
    var da1 = document.createElement('div');
    da1.classList = "col-lg-6 col-md-6 col-sm-6";
    var inp1 = document.createElement('input');
    inp1.classList = 'quest_' + stt;
    inp1.type = 'radio';
    inp1.name = 'dap_' + stt;
    inp1.id = 'dap1_' + stt;
    da1.appendChild(inp1);
    var la1 = document.createElement('label');
    la1.classList = 'quest_' + stt;
    la1.htmlFor = 'dap1_' + stt;
    la1.innerText = ' A: ' + dapan1;
    da1.appendChild(la1);
    content.appendChild(da1);
    var da2 = document.createElement('div');
    da2.classList = "col-lg-6 col-md-6 col-sm-6";
    var inp2 = document.createElement('input');
    inp2.classList = 'quest_' + stt;
    inp2.type = 'radio';
    inp2.name = 'dap_' + stt;
    inp2.id = 'dap2_' + stt;
    da2.appendChild(inp2);
    var la2 = document.createElement('label');
    la2.classList = 'quest_' + stt;
    la2.htmlFor = 'dap2_' + stt;
    la2.innerText = ' B: ' + dapan2;
    da2.appendChild(la2);
    content.appendChild(da2);
    var da3 = document.createElement('div');
    da3.classList = "col-lg-6 col-md-6 col-sm-6";
    var inp3 = document.createElement('input');
    inp3.classList = 'quest_' + stt;
    inp3.type = 'radio';
    inp3.name = 'dap_' + stt;
    inp3.id = 'dap3_' + stt;
    da3.appendChild(inp3);
    var la3 = document.createElement('label');
    la3.classList = 'quest_' + stt;
    la3.htmlFor = 'dap3_' + stt;
    la3.innerText = ' C: ' + dapan3;
    da3.appendChild(la3);
    content.appendChild(da3);
    var da4 = document.createElement('div');
    da4.classList = "col-lg-6 col-md-6 col-sm-6";
    var inp4 = document.createElement('input');
    inp4.classList = 'quest_' + stt;
    inp4.type = 'radio';
    inp4.name = 'dap_' + stt;
    inp4.id = 'dap4_' + stt;
    da4.appendChild(inp4);
    var la4 = document.createElement('label');
    la4.classList = 'quest_' + stt;
    la4.htmlFor = 'dap4_' + stt;
    la4.innerText = ' D: ' + dapan4;
    da4.appendChild(la4);
    content.appendChild(da4);
    main.appendChild(content);
    var foot = document.createElement('div');
    foot.classList = "quest-foot";
    var footcontet = document.createElement('div');
    footcontet.classList = 'content quest_' + stt;
    footcontet.innerText = 'Đáp án đúng: ' + loigiai;
    foot.appendChild(footcontet);
    main.appendChild(foot);

    var btn = document.createElement('a');
    btn.href = '#quest_' + stt;
    btn.classList = 'btn btn-outline-info';
    btn.innerText = stt;

    var bt = document.createElement('span');
    bt.innerText = ' ';
    document.getElementById('control-quest').appendChild(bt);
    document.getElementById('control-quest').appendChild(btn);
    document.getElementById('main-quest').appendChild(main);
}

//Hàm add DOM câu hỏi với nhiều đáp án
function addDOMQuestMultiAns(stt, maphong, cauhoi, dapan1, dapan2, dapan3, dapan4, loigiai) {
    var main = document.createElement('div');
    main.id = 'quest_' + stt;
    main.classList = 'central-meta';
    var nd_q = document.createElement('div');
    nd_q.classList = 'create-post';
    nd_q.innerText = 'Câu hỏi ' + stt;
    var ctrl_edit = document.createElement('div');
    ctrl_edit.classList = 'align-right';
    var btn_edit = document.createElement('button');
    btn_edit.classList = 'createoredit btn-outline-info edit-quest';
    btn_edit.setAttribute('data-toggle', 'tooltip');
    $(btn_edit).attr('data-original-title', 'Chỉnh sửa câu hỏi').tooltip('show');
    btn_edit.onclick = function () { setQuestEdit(stt, maphong) };
    var i = document.createElement('i');
    i.classList = 'fa fa-pencil';
    btn_edit.appendChild(i);
    ctrl_edit.appendChild(btn_edit);
    nd_q.appendChild(ctrl_edit);
    main.appendChild(nd_q);
    var content = document.createElement('div');
    content.classList = 'row';
    var quest = document.createElement('div');
    quest.classList = 'col-lg-12 col-md-12 col-sm-12 quest-content quest_' + stt;
    quest.innerText = cauhoi;
    content.appendChild(quest);
    var da1 = document.createElement('div');
    da1.classList = "col-lg-6 col-md-6 col-sm-6";
    var inp1 = document.createElement('input');
    inp1.classList = 'quest_' + stt;
    inp1.type = 'checkbox';
    inp1.name = 'dap_' + stt;
    inp1.id = 'dap1_' + stt;
    da1.appendChild(inp1);
    var la1 = document.createElement('label');
    la1.classList = 'quest_' + stt;
    la1.htmlFor = 'dap1_' + stt;
    la1.innerText = ' A: ' + dapan1;
    da1.appendChild(la1);
    content.appendChild(da1);
    var da2 = document.createElement('div');
    da2.classList = "col-lg-6 col-md-6 col-sm-6";
    var inp2 = document.createElement('input');
    inp2.classList = 'quest_' + stt;
    inp2.type = 'checkbox';
    inp2.name = 'dap_' + stt;
    inp2.id = 'dap2_' + stt;
    da2.appendChild(inp2);
    var la2 = document.createElement('label');
    la2.classList = 'quest_' + stt;
    la2.htmlFor = 'dap2_' + stt;
    la2.innerText = ' B: ' + dapan2;
    da2.appendChild(la2);
    content.appendChild(da2);
    var da3 = document.createElement('div');
    da3.classList = "col-lg-6 col-md-6 col-sm-6";
    var inp3 = document.createElement('input');
    inp3.classList = 'quest_' + stt;
    inp3.type = 'checkbox';
    inp3.name = 'dap_' + stt;
    inp3.id = 'dap3_' + stt;
    da3.appendChild(inp3);
    var la3 = document.createElement('label');
    la3.classList = 'quest_' + stt;
    la3.htmlFor = 'dap3_' + stt;
    la3.innerText = ' C: ' + dapan3;
    da3.appendChild(la3);
    content.appendChild(da3);
    var da4 = document.createElement('div');
    da4.classList = "col-lg-6 col-md-6 col-sm-6";
    var inp4 = document.createElement('input');
    inp4.classList = 'quest_' + stt;
    inp4.type = 'checkbox';
    inp4.name = 'dap_' + stt;
    inp4.id = 'dap4_' + stt;
    da4.appendChild(inp4);
    var la4 = document.createElement('label');
    la4.classList = 'quest_' + stt;
    la4.htmlFor = 'dap4_' + stt;
    la4.innerText = ' D: ' + dapan4;
    da4.appendChild(la4);
    content.appendChild(da4);
    main.appendChild(content);
    var foot = document.createElement('div');
    foot.classList = "quest-foot";
    var footcontet = document.createElement('div');
    footcontet.classList = 'content quest_' + stt;
    footcontet.innerText = 'Đáp án đúng: ' + loigiai;
    foot.appendChild(footcontet);
    main.appendChild(foot);

    var btn = document.createElement('a');
    btn.href = '#quest_' + stt;
    btn.classList = 'btn btn-outline-info';
    btn.innerText = stt;

    var bt = document.createElement('span');
    bt.innerText = ' ';
    document.getElementById('control-quest').appendChild(bt);
    document.getElementById('control-quest').appendChild(btn);
    document.getElementById('main-quest').appendChild(main);
}

//Xử lý tạo câu hỏi thi
$('#form-create-quest').on('submit', function () {
    event.preventDefault();

    var text = document.getElementsByClassName('form-create-quest');
    var kt_da = document.getElementsByClassName('form-create-quest-yes');
    var loigiai = "";
    var form_data = new FormData();

    if (!kt_da[0].checked && !kt_da[1].checked && !kt_da[2].checked && !kt_da[3].checked) {
        getThongBao('error', 'Lỗi !', 'Chưa chọn đáp án đúng !');
        return false;
    }

    form_data.append('maphong', document.querySelector('.exam-ma').id);
    form_data.append('cauhoi', text[0].value);
    form_data.append('da1', text[1].value);
    form_data.append('da2', text[2].value);
    form_data.append('da3', text[3].value);
    form_data.append('da4', text[4].value);

    for (var i = 0; i < 4; i++) {
        if (kt_da[i].checked) {
            loigiai += text[i + 1].value + '\\';
        }
    }
    form_data.append('loigiai', loigiai.slice(0, loigiai.length - 1));

    $.ajax({
        url: '/Courses/Exam/createQuest',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                getThongBao('success', 'Thành công !', 'Đã thêm câu hỏi ' + data.cauhoi.STT + ' thành công !');
                if (data.cauhoi.Multi_Ans) {
                    addDOMQuestMultiAns(data.cauhoi.STT, data.cauhoi.Ma_Phong, data.cauhoi.Cau_Hoi, data.cauhoi.Dap_An_1, data.cauhoi.Dap_An_2, data.cauhoi.Dap_An_3, data.cauhoi.Dap_An_4, data.cauhoi.Loi_Giai);
                }
                else {
                    addDOMQuest(data.cauhoi.STT, data.cauhoi.Ma_Phong, data.cauhoi.Cau_Hoi, data.cauhoi.Dap_An_1, data.cauhoi.Dap_An_2, data.cauhoi.Dap_An_3, data.cauhoi.Dap_An_4, data.cauhoi.Loi_Giai);
                }

                for (var i = 0; i < text.length; i++) {
                    text[i].value = null;
                }
                for (var i = 0; i < kt_da.length; i++) {
                    kt_da[i].checked = false;
                }

                $('.popup-createQuest').removeClass('active');
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
})

//Xử lý sửa câu hỏi thi
$('#form-edit-quest').on('submit', function () {
    event.preventDefault();

    var text = document.getElementsByClassName('form-edit-quest');
    var kt_da = document.getElementsByClassName('form-edit-quest-yes');
    var domEdit = document.getElementsByClassName('quest_' + sttQuestEdit);
    var loigiai = "";
    var form_data = new FormData();

    if (!kt_da[0].checked && !kt_da[1].checked && !kt_da[2].checked && !kt_da[3].checked) {
        getThongBao('error', 'Lỗi !', 'Chưa chọn đáp án đúng !');
        return false;
    }

    form_data.append('stt', sttQuestEdit);
    form_data.append('maphong', document.querySelector('.exam-ma').id);
    form_data.append('cauhoi', text[0].value);
    form_data.append('da1', text[1].value);
    form_data.append('da2', text[2].value);
    form_data.append('da3', text[3].value);
    form_data.append('da4', text[4].value);

    for (var i = 0; i < 4; i++) {
        if (kt_da[i].checked) {
            loigiai += text[i + 1].value + '\\';
        }
    }
    form_data.append('loigiai', loigiai.slice(0, loigiai.length - 1));

    $.ajax({
        url: '/Courses/Exam/editQuest',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                getThongBao('success', 'Thành công !', 'Đã chỉnh sửa câu hỏi ' + data.cauhoi.STT + ' thành công !');

                domEdit[0].innerText = data.cauhoi.Cau_Hoi;
                domEdit[2].innerText = 'A: ' + data.cauhoi.Dap_An_1;
                domEdit[4].innerText = 'B: ' + data.cauhoi.Dap_An_2;
                domEdit[6].innerText = 'C: ' + data.cauhoi.Dap_An_3;
                domEdit[8].innerText = 'D: ' + data.cauhoi.Dap_An_4;
                domEdit[9].innerText = 'Đáp án đúng: ' + data.cauhoi.Loi_Giai;

                if (data.cauhoi.Multi_Ans) {
                    domEdit[1].type = 'checkbox';
                    domEdit[3].type = 'checkbox';
                    domEdit[5].type = 'checkbox';
                    domEdit[7].type = 'checkbox';
                }
                else {
                    domEdit[1].type = 'radio';
                    domEdit[3].type = 'radio';
                    domEdit[5].type = 'radio';
                    domEdit[7].type = 'radio';
                }

                $('.popup-editQuest').removeClass('active');
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
})

//đóng popup chỉnh sửa câu hỏi thi
$('.popup-closed, .cancel').on('click', function () {
    $('.popup-editQuest').removeClass('active');
    return false;
});

//stt câu hỏi cần chỉnh
var sttQuestEdit = "";

//Gán câu hỏi cần chỉnh sửa lên popup
function setQuestEdit(stt, maphong) {
    sttQuestEdit = stt;
    var text = document.getElementsByClassName('form-edit-quest');
    var kt_da = document.getElementsByClassName('form-edit-quest-yes');
    var form_data = new FormData();

    form_data.append('stt', stt);
    form_data.append('maphong', maphong);

    $.ajax({
        url: '/Courses/Exam/getQuestEdit',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                document.getElementById('editQuestTitle').innerHTML = 'Chỉnh sửa câu hỏi ' + data.cauhoi.STT;
                text[0].value = data.cauhoi.Cau_Hoi;
                text[1].value = data.cauhoi.Dap_An_1;
                text[2].value = data.cauhoi.Dap_An_2;
                text[3].value = data.cauhoi.Dap_An_3;
                text[4].value = data.cauhoi.Dap_An_4;

                for (var i = 0; i < 4; i++) {
                    kt_da[i].checked = false;
                }

                let arrLoiGiai = Array.from(data.cauhoi.Loi_Giai);

                for (var i = 0; i < arrLoiGiai.length; i++) {
                    for (var j = 0; j < kt_da.length; j++) {
                        if (arrLoiGiai[i].toString() == j.toString()) {
                            kt_da[j].checked = true;
                        }
                    }
                }

                $('.popup-editQuest').addClass('active');
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}

//Hàm gọi về server chuẩn bị cho bài thi
function setWorkExam(maPhong, matkhau) {
    $.ajax({
        url: '/Courses/Exam/setWorkExam',
        type: 'POST',
        data: { maphong: maPhong, matkhau: matkhau },
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mật khẩu chưa chính xác !');
            }
            else {
                location.replace('/Courses/Exam/workExam?id=' + data.work.Ma_Phong + '&re=' + data.work.Lan_Thu);
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}

//Hàm bắt đầu làm bài
function startExam(maPhong) {
    $.ajax({
        url: '/Courses/Exam/ktMatKhau',
        type: 'POST',
        data: { maphong : maPhong },
        success: function (data) {
            if (data.tt) {
                $('.confirm-pass-exam').addClass('active');
            }
            else {
                setWorkExam(maPhong, null);
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}
$('.popup-closed').on('click', function () {
    $('.confirm-pass-exam').removeClass('active');
    return false;
});

//Xác nhận mật khẩu bài thi
$('#form-pass-exam').on('submit', function () {
    event.preventDefault();
    var maphong = document.querySelector('.exam-name').id;
    var pass = document.getElementById('inp-pass-exam').value;

    setWorkExam(maphong, pass);
})

//Hàm xử lý bài làm
function setDapAnThi(dom, stt, maphong, lanthu) {
    var inp = document.getElementsByClassName('quest_' + stt);
    var label = document.getElementsByClassName('lbl_quest_' + stt);
    var dapan = "";
    var convertKT = "";
    var form_data = new FormData();

    for (var i = 0; i < inp.length; i++) {
        if (inp[i].checked) {
            dapan += label[i].textContent.slice(3) + '\\';
            convertKT += label[i].textContent.slice(0, 1) + ',';
        }
    }

    form_data.append('stt', stt);
    form_data.append('maphong', maphong);
    form_data.append('lanthu', lanthu);
    form_data.append('dapan', dapan.slice(0, dapan.length - 1));

    $.ajax({
        url: '/Courses/Exam/setDapAnThi',
        type: 'POST',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                var editDOM = $(dom).parents('div')[2].children[2];
                if (dapan != "") {
                    document.getElementById('btn-control-quest-' + stt).classList = 'btn btn-success';
                    editDOM.classList = 'quest-foot';
                    editDOM.innerHTML = '<div class="content">Đã chọn: ' + convertKT.slice(0, convertKT.length - 1) + '</div>';
                }
                else {
                    document.getElementById('btn-control-quest-' + stt).classList = 'btn btn-info';
                    editDOM.classList = '';
                    editDOM.innerHTML = '';
                }
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}

//Hàm xử lý đếm ngược
function countdown(timer, maphong, lanthu) {
    var countDownDate = new Date(timer).getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (minutes < 5) {
            document.getElementById('countdown-timer').style.color = 'red';
        }
        document.getElementById('countdown-timer').innerHTML = minutes + " phút " + seconds + ' giây';
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown-timer').innerHTML = "Đã hết";
            setEndExam(maphong, lanthu);
        }
    }, 1000);
}

//Hàm xử lý kết thúc bài thi
function setEndExam(maphong, lanthu) {
    $.ajax({
        url: '/Courses/Exam/setEndExam',
        type: 'POST',
        data: { maphong: maphong, lanthu: lanthu },
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                location.replace('/Courses/Exam/preExam?id=' + data.id);
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}

//Hàm chuyển đến trang xem lại bài thi
function getviewExam(maphong, lanthu) {
    location.replace('/Courses/Exam/viewExam?id=' + maphong + '&re=' + lanthu);
}

//Hàm set đã xem thông báo
function setDaXemThongBao(maTB, maND) {
    $.ajax({
        url: '/User/Notification/setDaXemThongBao',
        type: 'POST',
        data: { maTB: maTB, maND: maND },
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}

//Hàm set đã xem tất cả thông báo
function setXemTatCaThongBao(maND) {
    event.preventDefault();
    $.ajax({
        url: '/User/Notification/setXemTatCaThongBao',
        type: 'POST',
        data: { maND: maND },
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                let elm = document.querySelector('#dot-thong-bao');
                if (elm) elm.remove();
                getThongBao('success', 'Thành công !', 'Đã đánh dấu là đã xem tất cả thông báo !');
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}
//Hàm set đã xem tất cả tin nhắn
function setXemTatCaTinNhan(maND) {
    event.preventDefault();
    $.ajax({
        url: '/User/Mess/setXemTatCaTinNhan',
        type: 'POST',
        data: { maND: maND },
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                let elm = document.querySelector('#dot-tin-nhan');
                if (elm) elm.remove();
                getThongBao('success', 'Thành công !', 'Đã đánh dấu là đã xem tất cả thông báo !');
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}

//Xử lý gửi tin nhắn từ trang info
function infoSendMess(gui, nhan) {
    event.preventDefault();
    var noidung = document.getElementById('info-send-mess-text');
    if (!noidung.value) {
        getThongBao('error', 'Lỗi', 'Nội dung tin nhắn không được để trống !');
        return false;
    }
    if (gui == nhan) {
        getThongBao('warning', 'Lỗi', 'Không thể gửi tin cho chính mình !');
        return false;
    }
    $.ajax({
        url: '/User/Mess/sendNewTinNhan',
        type: 'POST',
        data: { maNN: nhan, noidung: noidung.value },
        success: function (data) {
            if (!data.tt) {
                getThongBao('error', 'Lỗi !', 'Mã lệnh javascript đã bị thay đổi. Vui lòng tải lại trang !');
            }
            else {
                getThongBao('success', 'Thành công !', 'Đã gửi tin nhắn !');
                noidung.value = null;
                $('.popup-wraper1').removeClass('active');
            }
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
        }
    })
}