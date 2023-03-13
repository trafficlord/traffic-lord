function updateDigital() {
    $(".first__tab-digital_1").css("opacity", "1"), $(".first__tab-digital_1").spincrement({
        thousandSeparator: "",
        duration: 3e3
    }), $(".first__tab-progress").css("width", "100%"), $(".first__tab-digital_2").css("color", "#FB4F4F")
}

document.addEventListener('DOMContentLoaded', () => {
    let format = document.getElementsByClassName('format_box')[0];
    let scrollDownBlock1 = document.getElementsByClassName('format_scroll1')[0];
    let scrollDownBlock2 = document.getElementsByClassName('format_scroll2')[0];

    let tariffGroup = document.getElementById('tariffs');
    let scrollTopBlock = document.getElementsByClassName('format_scroll_top')[0];
    let scrollDownBlockFirst = document.getElementsByClassName('go_to_tariff')[0];

    function handleButtonClick() {
        format.scrollIntoView({block: "center", behavior: "smooth"});
    }

    function handleButtonTopScrollClick() {
        tariffGroup.scrollIntoView({block: "start", behavior: "smooth"});
    }

    scrollDownBlock1.addEventListener('click', handleButtonClick);
    scrollDownBlock2.addEventListener('click', handleButtonClick);
    scrollTopBlock.addEventListener('click', handleButtonTopScrollClick);
    scrollDownBlockFirst.addEventListener('click', handleButtonTopScrollClick);



    const groupModal = document.getElementsByClassName('pay_tariff_modal_group')[0]
    const privateModal = document.getElementsByClassName('pay_tariff_modal_private')[0]
    const wrapper = document.getElementsByClassName('wrapper')[0]

    const groupPayButton = document.getElementsByClassName('tariff-buy-button-group')[0]
    const groupCloseModalButton = document.getElementsByClassName('close-modal-wrapper-group')[0]

    groupPayButton.addEventListener('click', () => {
        groupModal.classList.remove('hidden')
        wrapper.style.maxHeight = '100vh'
        wrapper.style.overflowY = 'hidden'
        wrapper.classList.add('no-scrolled')
        wrapper.style.filter = 'blur(20px)'
    })

    groupCloseModalButton.addEventListener('click', () => {
        groupModal.classList.add('hidden')
        wrapper.style.maxHeight = '100%'
        wrapper.style.overflowY = 'scroll'
        wrapper.classList.remove('no-scrolled')
        wrapper.style.filter = 'blur(0)'
    })


    const privatePayButton = document.getElementsByClassName('tariff-buy-button-private')[0]
    const privateCloseModalButton = document.getElementsByClassName('close-modal-wrapper-private')[0]

    privatePayButton.addEventListener('click', () => {
        privateModal.classList.remove('hidden')
        wrapper.style.maxHeight = '100vh'
        wrapper.style.overflowY = 'hidden'
        wrapper.classList.add('no-scrolled')
        wrapper.style.filter = 'blur(20px)'
    })

    privateCloseModalButton.addEventListener('click', () => {
        privateModal.classList.add('hidden')
        wrapper.style.maxHeight = '100%'
        wrapper.style.overflowY = 'scroll'
        wrapper.classList.remove('no-scrolled')
        wrapper.style.filter = 'blur(0)'
    })


    window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.pay_tariff_modal_group') && !target.closest('.tariff_buy')
            && !target.closest('.pay_tariff_modal_private') && !target.closest('.tariff_buy')
            && wrapper.classList.contains('no-scrolled')) {
            groupModal.classList.add('hidden')
            privateModal.classList.add('hidden')
            wrapper.style.maxHeight = '100%'
            wrapper.style.overflowY = 'scroll'
            wrapper.classList.remove('no-scrolled')
            wrapper.style.filter = 'blur(0)'
        }
    })


    const typeToConnectGroupInst = document.getElementsByClassName('type-to-connect-group-inst')[0]
    const typeToConnectGroupTg = document.getElementsByClassName('type-to-connect-group-tg')[0]
    const typeToConnectPrivateInst = document.getElementsByClassName('type-to-connect-private-inst')[0]
    const typeToConnectPrivateTg = document.getElementsByClassName('type-to-connect-private-tg')[0]

    const imgForInputGroup = document.getElementsByClassName('img-for-input-group')[0]
    const svgForInputGroup = document.getElementsByClassName('svg-for-input-group')[0]
    const imgForInputPrivate = document.getElementsByClassName('img-for-input-private')[0]
    const svgForInputPrivate = document.getElementsByClassName('svg-for-input-private')[0]

    typeToConnectGroupInst.addEventListener('click', () => {
        if(!typeToConnectGroupInst.classList.contains('selected')) {
            typeToConnectGroupTg.classList.remove('selected')
            typeToConnectGroupInst.classList.add('selected')
            svgForInputGroup.classList.add('hidden')
            imgForInputGroup.classList.remove('hidden')
        }
    })

    typeToConnectGroupTg.addEventListener('click', () => {
        if(!typeToConnectGroupTg.classList.contains('selected')) {
            typeToConnectGroupInst.classList.remove('selected')
            typeToConnectGroupTg.classList.add('selected')
            imgForInputGroup.classList.add('hidden')
            svgForInputGroup.classList.remove('hidden')
        }
    })

    typeToConnectPrivateInst.addEventListener('click', () => {
        if(!typeToConnectPrivateInst.classList.contains('selected')) {
            typeToConnectPrivateTg.classList.remove('selected')
            typeToConnectPrivateInst.classList.add('selected')
            svgForInputPrivate.classList.add('hidden')
            imgForInputPrivate.classList.remove('hidden')
        }
    })

    typeToConnectPrivateTg.addEventListener('click', () => {
        if(!typeToConnectPrivateTg.classList.contains('selected')) {
            typeToConnectPrivateInst.classList.remove('selected')
            typeToConnectPrivateTg.classList.add('selected')
            imgForInputPrivate.classList.add('hidden')
            svgForInputPrivate.classList.remove('hidden')
        }
    })


    const buyGroupTariff = document.getElementsByClassName('tariff-buy-button-modal-group')[0]
    const buyPrivateTariff = document.getElementsByClassName('tariff-buy-button-modal-private')[0]

    buyGroupTariff.addEventListener('click', () => {
        const inputGroup = document.getElementsByClassName('input-group')[0]
        const data = {
            tariffType: 'group',
            username: inputGroup.value
        }
        if(document.getElementsByClassName('type-to-connect-group-inst')[0].classList.contains('selected')) {
            data.platformToConnect = 'inst'
        } else {
            data.platformToConnect = 'tg'
        }
        if(data.username === '') {
            alert('Pls fill input field')
        } else {
            const usernameGoogleFormField = document.getElementsByClassName('username-googleForm-input')[0]
            const platformGoogleFormField = document.getElementsByClassName('platform-googleForm-input')[0]
            const tariffTypeGoogleFormField = document.getElementsByClassName('tariffType-googleForm-input')[0]
            const submitGoogleFormButton = document.getElementsByClassName('submit-googleForm-button')[0]

            usernameGoogleFormField.value = data.username
            platformGoogleFormField.value = data.platformToConnect
            tariffTypeGoogleFormField.value = data.tariffType
            submitGoogleFormButton.click()
        }
    })

    buyPrivateTariff.addEventListener('click', () => {
        const inputPrivate = document.getElementsByClassName('input-private')[0]
        const data = {
            tariffType: 'private',
            username: inputPrivate.value
        }
        if(document.getElementsByClassName('type-to-connect-private-inst')[0].classList.contains('selected')) {
            data.platformToConnect = 'inst'
        } else {
            data.platformToConnect = 'tg'
        }
        if(data.username === '') {
            alert('Pls fill input field')
        } else {
            console.log(data)
        }
    })


});

$(document).ready((function () {
    return $(".link-scroll, .menu a[href*=\\#]").bind("click", (function (t) {
        var e = $(this);
        if ($("html, body").stop().animate({scrollTop: $(e.attr("href")).offset().top}, 1500), history.pushState) {
            var a = window.location.protocol + "//" + window.location.host + window.location.pathname + e.attr("href");
            history.pushState(null, null, a)
        }
        t.preventDefault()
    })), !1
})), $(window).scroll((function () {
    $(window).scrollTop() >= 10 ? $(".header").addClass("header_scroll") : $(".header").removeClass("header_scroll")
})), $(window).scrollTop() >= 10 && $(".header").addClass("header_scroll"), $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 20,
    autoHeight: !0,
    loop: !0,
    nav: !0
}), durationMarquee = 12e3, window.innerWidth > 1200 && (durationMarquee = 2e4), console.log(window.innerWidth), $((function () {
    $(".js-marquee").marquee({duration: durationMarquee, startVisible: !0, duplicated: !0})
})), AOS.init({easing: "ease"}), $(document).ready((function () {
    let t = document.querySelectorAll(".parallax-main");
    for (let e = 0; e < t.length; e++) window.addEventListener("mousemove", (function (a) {
        let o = a.clientX / window.innerWidth, i = a.clientY / window.innerHeight, r = t[e].getAttribute("data-speed"),
            n = t[e].getAttribute("data-type");
        "standart" == n && (t[e].style.transform = "translate(" + o * r + "px, " + i * r + "px)"), "vertical" == n && (t[e].style.transform = "translate(0px, " + i * r + "px)"), "horizontal" == n && (t[e].style.transform = "translate(" + o * r + "px, 0px)")
    }))
})), setTimeout(updateDigital, 1500);