
$(document).ready(function () {
    // Best Show Animating When Scroll
    $(window).on('scroll load', function () {
        let wScroll = $(this).scrollTop();

        // Khusus Heading Profile
        myScrollReveal('.dam-heading-profile-content', 200, 'dam-heading-profile-content-ani', wScroll);
        myScrollReveal('.dam-heading-profile', 200, 'dam-heading-profile-ani', wScroll);

        // Khusus Skill Classification
        myScrollReveal('.dam-skill-classification-title', 200, 'dam-skill-classification-title-ani', wScroll);
        myScrollReveal('.dam-skill-classification-group', 200, 'dam-skill-classification-group-ani', wScroll);

        // Khusus Frequently Tools Used
        myScrollReveal('.dam-frequently-tools-used-title', 200, 'dam-frequently-tools-used-title-ani', wScroll);
        myScrollReveal('.dam-frequently-tools-used-group-1', 200, 'dam-frequently-tools-used-group-ani', wScroll);
        myScrollReveal('.dam-frequently-tools-used-group-2', 200, 'dam-frequently-tools-used-group-ani', wScroll);
        myScrollReveal('.dam-frequently-tools-used-group-3', 200, 'dam-frequently-tools-used-group-ani', wScroll);
        myScrollReveal('.dam-frequently-tools-used-group-4', 200, 'dam-frequently-tools-used-group-ani', wScroll);

        // Khusus my works
        myScrollReveal('.dam-my-works-title', 200, 'dam-my-works-title-ani', wScroll);
        myScrollReveal('.dam-my-works-groups-1', 200, 'dam-my-works-groups-ani', wScroll);
        myScrollReveal('.dam-my-works-groups-2', 200, 'dam-my-works-groups-ani', wScroll);
        myScrollReveal('.dam-my-works-groups-3', 200, 'dam-my-works-groups-ani', wScroll);
        myScrollReveal('.dam-my-works-groups-4', 200, 'dam-my-works-groups-ani', wScroll);

        // Khusus relatable hobbies
        myScrollReveal('.dam-my-hobby-title', 200, 'dam-my-hobby-title-ani', wScroll);
        myScrollReveal('.dam-my-hobby-group-content-text', 200, 'dam-my-hobby-group-content-text-ani', wScroll);
        myScrollReveal('.dam-my-hobby-group-content', 200, 'dam-my-hobby-group-content-ani', wScroll);

        // Khusus final purpose
        myScrollReveal('.dam-my-purpose-content', 200, 'dam-my-purpose-content-ani', wScroll);


    });
    // End Best Show Animating When Scroll

    // Function untuk Reveal Scroll Pure Js
    function myScrollReveal(elementAffected, offsetAdditional = 0, classAddition, scrollWidth) {
        if (scrollWidth > $(elementAffected).offset().top - offsetAdditional && scrollWidth < $(elementAffected).offset().top - offsetAdditional + $(elementAffected).height()) {
            $(elementAffected).addClass(classAddition);
        }
    }

    // Untuk menampilkan gambar setiap di scroll ( section frequently tools used )
    function showImageWithViewPort(elementArea, contentAffected, scrollTop) {
        if (scrollTop > $(elementArea).offset().top - 250) {
            $(contentAffected).addClass('dam-frequently-tools-used-image-reveal');
        } else {
            $(contentAffected).removeClass('dam-frequently-tools-used-image-reveal');
        }

        if (scrollTop > $(elementArea).offset().top - 250 + $(elementArea).height()) {
            $(contentAffected).removeClass('dam-frequently-tools-used-image-reveal');
        }
    }


    $(window).on('load', function () {
        let wScroll = $(this).scrollTop();

        showImageWithViewPort('.dam-frequently-tools-used-group-1', '.real-1', wScroll);
        showImageWithViewPort('.dam-frequently-tools-used-group-2', '.real-2', wScroll);
        showImageWithViewPort('.dam-frequently-tools-used-group-3', '.real-3', wScroll);
        showImageWithViewPort('.dam-frequently-tools-used-group-4', '.real-4', wScroll);
    });


    $(window).scroll(function () {
        $('.real-1').removeClass('dam-frequently-tools-used-image-reveal');
        $('.real-2').removeClass('dam-frequently-tools-used-image-reveal');
        $('.real-3').removeClass('dam-frequently-tools-used-image-reveal');
        $('.real-4').removeClass('dam-frequently-tools-used-image-reveal');

        let wScroll = $(this).scrollTop();

        showImageWithViewPort('.dam-frequently-tools-used-group-1', '.real-1', wScroll);
        showImageWithViewPort('.dam-frequently-tools-used-group-2', '.real-2', wScroll);
        showImageWithViewPort('.dam-frequently-tools-used-group-3', '.real-3', wScroll);
        showImageWithViewPort('.dam-frequently-tools-used-group-4', '.real-4', wScroll);
    });

    // Saat klik link menu, sorot smooth scroll ke section terpilih
    $('.dam-navbar-list a, .dam-navbar-logo').click(function (e) {
        e.preventDefault();

        if (!e.detail || e.detail == 1) {
            let linkHref = $(this).data("navbar");

            // Jika saat direct link di bagian heading profile dan mengklik heading profile maka batalkan
            if (linkHref == "heading-profile" && $(window).scrollTop() < $("#" + linkHref).height()) {
                return false;
            }

            // Menentukan scroll akan kebawah atau keatas
            let defineMyScrollTop = new Object({
                scrollTop: 'default'
            });

            if ($(window).scrollTop() > $('#' + linkHref).offset().top) {
                defineMyScrollTop.scrollTop = $(window).scrollTop() + 100;
            } else {
                defineMyScrollTop.scrollTop = $(window).scrollTop() - 100;
            }

            // Jika scroll ada di bagian heading profile dan ingin ke link lain, maka tidak ada animasi ini
            if ($(window).scrollTop() > $("#" + 'heading-profile').height()) {
                $('html, body').animate({
                    scrollTop: defineMyScrollTop.scrollTop
                }, 500);
            }


            $('html, body').animate({
                scrollTop: $('#' + linkHref).offset().top - 50
            }, 1000);


            return false;
        }
    });

    // Saat menu list di hover
    $(".dam-navbar-list a").mouseenter(function () {
        $(this).toggleClass('menulist');
    });


    $(".dam-navbar-list a").mouseleave(function () {
        $(this).toggleClass('menulist');
    })

    // Saat halaman discroll kebawah, maka hilangkan navbar, sebaliknya
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let myScroll = $(window).scrollTop();

        if (myScroll > $('.dam-heading-profile').offset().top - 300 + $('.dam-heading-profile').height()) {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos < currentScrollPos) {
                $(".dam-navbar .dam-navbar-logo").css(
                    {
                        opacity: '0',
                        transition: '.4s linear',
                        transform: 'translate(-100%,0)'
                    }
                );

                $(".dam-navbar .dam-navbar-list").css(
                    {
                        opacity: '0',
                        transition: '.4s linear',
                        transform: 'translate(100%,0)'
                    }
                );

                $(".dam-navbar").css(
                    {
                        opacity: '0',
                        transition: '.4s linear'
                    }
                );

            } else {
                $(".dam-navbar .dam-navbar-logo").css(
                    {
                        opacity: '1',
                        transition: '.4s linear',
                        transform: 'translate(0,0)'
                    }
                );

                $(".dam-navbar .dam-navbar-list").css(
                    {
                        opacity: '1',
                        transition: '.4s linear',
                        transform: 'translate(0,0)'
                    }
                );

                $(".dam-navbar").css(
                    {
                        opacity: '1',
                        transition: '.4s linear'
                    }
                );
            }
            prevScrollpos = currentScrollPos;
        }
    }

    // Saat scroll navbar desktop akan merubah warna tiap melewati atau berdiri di point section tertentu
    $(window).scroll(function () {
        let wScroll = $(this).scrollTop();

        changeColorLogoWithViewPort('.dam-heading-profile', 1, wScroll)
        changeColorLogoWithViewPort('.dam-skill-classification', 0, wScroll)
        changeColorLogoWithViewPort('.dam-frequently-tools-used', 1, wScroll)
        changeColorLogoWithViewPort('.dam-my-works', 0, wScroll)
        changeColorLogoWithViewPort('.dam-my-hobby', 1, wScroll)
        changeColorLogoWithViewPort('.dam-my-purpose', 0, wScroll)
        changeColorLogoWithViewPort('.dam-footer', 1, wScroll)

    });

    // Mengubah color dari logo navbar
    function changeColorLogoWithViewPort(sectionAffected, colorDefinition, scrollTop) {
        // Jika 1 maka definisi colornya adalah default, sedangkan 0 maka warna biru 
        if (colorDefinition) {
            changeColorLogoWithViewPortCondition(scrollTop, sectionAffected, 'rgb(62, 74, 110)');
        } else {
            changeColorLogoWithViewPortCondition(scrollTop, sectionAffected, 'rgb(0, 102, 255)');
        }
    }

    // Template untuk cek apakah scroll sedang berada di area section tertentu atau tidak
    function changeColorLogoWithViewPortCondition(scrollTop, sectionAffected, colorValue) {
        if (scrollTop > $(sectionAffected).offset().top - 300 && scrollTop < $(sectionAffected).offset().top - 300 + $(sectionAffected).height()) {
            $(".dam-navbar-logo h1, .dam-navbar-logo small").css({
                color: colorValue,
                transition: '.5s linear'
            });
        }
    }
});