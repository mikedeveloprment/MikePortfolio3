gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    // for tablet smooth
    tablet: { smooth: true },
    // for mobile
    smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});
gsap.to(".welocome__about", {
    scrollTrigger: {
        trigger: ".welocome__about",
        start: "90% center%",
        end: "center 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
    },
    opacity: 1,
    scale: 1
})
gsap.to(".handyman__title", {
    scrollTrigger: {
        trigger: ".handyman__title",
        start: "center 80%",
        end: "center 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
    },
    scale: 1,
    opacity: 1,

})
gsap.to(".handyman__text", {
    scrollTrigger: {
        trigger: ".handyman__text",
        start: "top 80%",
        end: "bottom 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
    },
    scale: 1
})
gsap.to(".handyman__text p", {
    scrollTrigger: {
        trigger: ".handyman__text p",
        start: "100px 70%",
        end: "center 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
    },
    fontSize: 32,
})
// gsap.to(".handyman__text b", {
//     scrollTrigger: {
//         trigger: ".handyman__text b",
//         start: "center 70%",
//         end: "center 0%",
//         toggleActions: "play none none none",
//         scroller: ".smooth-scroll",
//     },
//     fontSize: 30,
// })
gsap.to(".handyman__arrows svg", {
    scrollTrigger: {
        trigger: ".handyman__arrows svg",
        start: "center 90%",
        end: "100% 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
        scrub: 1,
    },
    strokeDashoffset: 0,
})
gsap.to(".img__handyman2", {
    scrollTrigger: {
        trigger: ".img__handyman2",
        start: "center 60%",
        end: "center 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
    },
    rotate: 0,
    scale: 1
})
gsap.to(".img__handyman1", {
    scrollTrigger: {
        trigger: ".img__handyman1",
        start: "center 50%",
        end: "center 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
    },
    rotate: 0,
    scale: 1
})
gsap.to(".about__text-block span", {
    scrollTrigger: {
        trigger: ".about__text-block span",
        start: "100px 85%",
        end: "center 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
    },
    opacity: 1,
    top: 0,
    delay: 0.2,

})
gsap.to(".about__text-block i", {
    scrollTrigger: {
        trigger: ".about__text-block span",
        start: "center 85%",
        end: "center 0%",
        delay: 0.2,
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
    },
    opacity: 1,
    delay: 0.2,
    top: 0,
})
gsap.to(".about__text-block em", {
    scrollTrigger: {
        trigger: ".about__text-block span",
        start: "center 75%",
        end: "center 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
    },
    opacity: 1,
    top: 0,
    delay: 0.2,

})
gsap.to(".about__text-block b", {
    scrollTrigger: {
        trigger: ".about__text-block span",
        start: "center 65%",
        end: "center 0%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",

    },
    delay: 0.2,
    opacity: 1,
    top: 0,
})
gsap.to(".about__block-color1", {
    scrollTrigger: {
        trigger: ".about__img-block",
        start: "center 85%",
        end: "center 60%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
        scrub: 1,
    },
    duration: 2,
    scale: 1,
})
gsap.to(".about__block-color2", {
    scrollTrigger: {
        trigger: ".about__img-block",
        start: "center 90%",
        end: "center 60%",
        toggleActions: "play none none none",
        scroller: ".smooth-scroll",
        scrub: 1,
    },
    duration: 2,
    scale: 1.1,
})
gsap.to(".about__block-color3", {
    scrollTrigger: {
        trigger: ".about__img-block",
        start: "center 95%",
        scroller: ".smooth-scroll",
        end: "center 60%",
        toggleActions: "play none none none",
        scrub: 1,
    },
    duration: 2,
    scale: 1.2,
})
let widthEnd = 502 + (window.innerHeight - 500) * 0.5;
gsap.to("body", {
    scrollTrigger: {
        trigger: ".handyman__body",
        start: "center center",
        scroller: ".smooth-scroll",
        end: `100% center`,
        toggleActions: "play none none none",
        pin: true,
    },
})
gsap.to(".handyman-body__block-header", {
    scrollTrigger: {
        trigger: ".block-animate__handyman-body",
        start: "0% center",
        scroller: ".smooth-scroll",
        end: "10% 20%",
        toggleActions: "play none none none",
        scrub: 1,
    },
    background: "#BCFE2F",
})
gsap.to(".handyman-body__block-main", {
    scrollTrigger: {
        trigger: ".block-animate__handyman-body",
        start: "20% center",
        scroller: ".smooth-scroll",
        end: "30% 40%",
        toggleActions: "play none none none",
        scrub: 1,
    },
    background: "#BCFE2F",
})
gsap.to(".handyman-body__block-footer", {
    scrollTrigger: {
        trigger: ".block-animate__handyman-body",
        start: "40% center",
        scroller: ".smooth-scroll",
        end: "40% 50%",
        toggleActions: "play none none none",
        scrub: 1,
    },
    background: "#BCFE2F",
})
gsap.to(".handyman-body__block-header p", {
    scrollTrigger: {
        trigger: ".block-animate__handyman-body",
        start: "10% center",
        scroller: ".smooth-scroll",
        end: "20% 30%",
        toggleActions: "play none none none",
        scrub: 1,
    },
    fontSize: 30,
})
gsap.to(".handyman-body__block-main p", {
    scrollTrigger: {
        trigger: ".block-animate__handyman-body",
        start: "30% center",
        scroller: ".smooth-scroll",
        end: "30% 40%",
        toggleActions: "play none none none",
        scrub: 1,
    },
    fontSize: 30,
})
gsap.to(".handyman-body__block-footer p", {
    scrollTrigger: {
        trigger: ".block-animate__handyman-body",
        start: "40% center",
        scroller: ".smooth-scroll",
        end: "40% 50%",
        toggleActions: "play none none none",
        scrub: 1,
    },
    fontSize: 30,
})
gsap.to(".block__eats", {
    scrollTrigger: {
        trigger: ".block__eats",
        start: "center 80%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1,
});
gsap.to(".eat__title", {
    scrollTrigger: {
        trigger: ".eat__title",
        start: "center 80%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1,
})
gsap.to(".similarity__title", {
    scrollTrigger: {
        trigger: ".similarity__title",
        start: "center 80%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1,
})
gsap.to(".img__title", {
    scrollTrigger: {
        trigger: ".img__title",
        start: "center 80%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1,
})
gsap.to(".notes__title", {
    scrollTrigger: {
        trigger: ".notes__title",
        start: "center 100%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1,
})
gsap.to(".animimg1", {
    scrollTrigger: {
        trigger: ".animimg1",
        start: "center 60%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0,
})
gsap.to(".animimg2", {
    scrollTrigger: {
        trigger: ".animimg2",
        start: "center 60%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    right: 0,
})
gsap.to(".animimg3", {
    scrollTrigger: {
        trigger: ".animimg3",
        start: "center 60%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0,
})
gsap.to(".animimg4", {
    scrollTrigger: {
        trigger: ".animimg4",
        start: "center 60%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    right: 0,
})
gsap.to(".animimg5", {
    scrollTrigger: {
        trigger: ".animimg5",
        start: "center 60%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0,
})
gsap.to(".animimg6", {
    scrollTrigger: {
        trigger: ".animimg6",
        start: "center 60%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",

    },
    opacity: 1,
    right: 0,
})
gsap.to(".notes-item1", {
    scrollTrigger: {
        trigger: ".notes-item1",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    top: 0,
    opacity: 1,
})
gsap.to(".notes-item1 span", {
    scrollTrigger: {
        trigger: ".notes-item1",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item1 b", {
    scrollTrigger: {
        trigger: ".notes-item1",
        start: "center 70%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item1 em", {
    scrollTrigger: {
        trigger: ".notes-item1",
        start: "center 80%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item2", {
    scrollTrigger: {
        trigger: ".notes-item2",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    top: 0,
    opacity: 1,
})
gsap.to(".notes-item2 span", {
    scrollTrigger: {
        trigger: ".notes-item2",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item2 b", {
    scrollTrigger: {
        trigger: ".notes-item2",
        start: "center 70%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item2 em", {
    scrollTrigger: {
        trigger: ".notes-item2",
        start: "center 80%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item3", {
    scrollTrigger: {
        trigger: ".notes-item3",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    top: 0,
    opacity: 1,
})
gsap.to(".notes-item3 span", {
    scrollTrigger: {
        trigger: ".notes-item3",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item3 b", {
    scrollTrigger: {
        trigger: ".notes-item3",
        start: "center 70%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item3 em", {
    scrollTrigger: {
        trigger: ".notes-item3",
        start: "center 80%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item4 ", {
    scrollTrigger: {
        trigger: ".notes-item4",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    top: 0,
    opacity: 1,
})
gsap.to(".notes-item4 span", {
    scrollTrigger: {
        trigger: ".notes-item4",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item4 b", {
    scrollTrigger: {
        trigger: ".notes-item4",
        start: "center 70%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".notes-item4 em", {
    scrollTrigger: {
        trigger: ".notes-item4",
        start: "center 80%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    top: 0,
})
gsap.to(".block__clocks .clock1", {
    scrollTrigger: {
        trigger: ".block__clocks .clock1",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1
})
gsap.to(".block__clocks .clock2", {
    scrollTrigger: {
        trigger: ".block__clocks .clock2",
        start: "center 80%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1
})
gsap.to(".block__clocks .clock3", {
    scrollTrigger: {
        trigger: ".block__clocks .clock3",
        start: "center 70%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1
})
gsap.to(".widget__weather", {
    scrollTrigger: {
        trigger: ".widget__weather",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1
})
gsap.to(".widget__time", {
    scrollTrigger: {
        trigger: ".widget__time",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1
})
gsap.to(".widget__tags", {
    scrollTrigger: {
        trigger: ".widget__tags",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center center",
        toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1
})
gsap.to(".sec1", {
    scrollTrigger: {
        trigger: ".sec1",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec2", {
    scrollTrigger: {
        trigger: ".sec2",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec3", {
    scrollTrigger: {
        trigger: ".sec3",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec4", {
    scrollTrigger: {
        trigger: ".sec4",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec5", {
    scrollTrigger: {
        trigger: ".sec5",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec6", {
    scrollTrigger: {
        trigger: ".sec6",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec7", {
    scrollTrigger: {
        trigger: ".sec7",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec8", {
    scrollTrigger: {
        trigger: ".sec8",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec9", {
    scrollTrigger: {
        trigger: ".sec9",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec10", {
    scrollTrigger: {
        trigger: ".sec10",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec11", {
    scrollTrigger: {
        trigger: ".sec11",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec12", {
    scrollTrigger: {
        trigger: ".sec12",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec13", {
    scrollTrigger: {
        trigger: ".sec13",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".sec14", {
    scrollTrigger: {
        trigger: ".sec14",
        start: "center 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
        end: "center 80%",
        toggleActions: "play none none none",
    },
    opacity: 1,
    left: 0
})
gsap.to(".iam__title", {
    scrollTrigger: {
        trigger: ".iam__title",
        start: "center 80%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    opacity: 1,
})
gsap.to(".works__title", {
    scrollTrigger: {
        trigger: ".works__title",
        start: "center 90%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    opacity: 1,
})
gsap.to(".contact__title", {
    scrollTrigger: {
        trigger: ".contact__title",
        start: "center 90%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    opacity: 1,
})

gsap.to(".slider__main", {
    scrollTrigger: {
        trigger: ".slider__main",
        start: "center 90%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
})
gsap.to(".menu__filter-works", {
    scrollTrigger: {
        trigger: ".menu__filter-works",
        start: "center 80%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    duration: 1,
    opacity: 1,
})
gsap.to(".button-resize__work .small", {
    scrollTrigger: {
        trigger: ".button-resize__work .small",
        start: "center 80%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    duration: .8,
    top: 0,
})
gsap.to(".button-resize__work span", {
    scrollTrigger: {
        trigger: ".button-resize__work span",
        start: "center 80%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    duration: .8,
    top: 0,
})

gsap.to(".iam1", {
    scrollTrigger: {
        trigger: ".iam1",
        start: "center 90%",
        scroller: ".smooth-scroll",
        end: "center 80%",
        toggleActions: "play none none none",
    },
    scale: 1,
    opacity: 1,
})
gsap.to(".iam2", {
    scrollTrigger: {
        trigger: ".iam2",
        start: "center 85%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    opacity: 1,
})
gsap.to(".iam3", {
    scrollTrigger: {
        trigger: ".iam3",
        start: "center 85%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    opacity: 1,
})
gsap.to(".iam4", {
    scrollTrigger: {
        trigger: ".iam4",
        start: "center 85%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    opacity: 1,
})
gsap.to(".iam5", {
    scrollTrigger: {
        trigger: ".iam5",
        start: "center 85%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    opacity: 1,
})
gsap.to(".iam6", {
    scrollTrigger: {
        trigger: ".iam6",
        start: "center 80%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },
    scale: 1,
    opacity: 1,
})

const contSil = document.querySelector(".block__sil");
contSil.addEventListener("click", cat)
const flexIcon = document.querySelectorAll(".block-flex__sil");
const widget__weather = document.querySelector(".widget__weather"),
    inputPart = document.querySelector(".input-part"),
    infoTxt = inputPart.querySelector(".info-txt"),
    inputField = inputPart.querySelector("input"),
    locationBtn = inputPart.querySelector("button"),
    locationSpn = inputPart.querySelector("span"),
    weatherPart = widget__weather.querySelector(".weather-part"),
    wIcon = weatherPart.querySelector("img"),
    arrowBack = widget__weather.querySelector(".header__weather ion-icon");
let api;

locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else {
        alert("Your browser not support geolocation api");
    }
    locoScroll.update(); ScrollTrigger.refresh();
});
inputField.addEventListener("blur", e => {
    if (inputField.value != "") {
        requestApi(inputField.value);
    }

});
inputField.addEventListener("keyup", e => {
    requestApi(inputField.value);
    if (e.key == "Enter" && inputField.value != "") {
    }
    e.preventDefault()
});


function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8ce9e69a262d1027823151c718c73996`;
    fetchData();
}
function onSuccess(position) {
    const { latitude, longitude } = position.coords; // getting lat and lon of the user device from coords obj
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=8ce9e69a262d1027823151c718c73996`;
    fetchData();


}
function onError(error) {
    // if any error occur while getting user location then we'll show it in infoText
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}
function fetchData() {

    infoTxt.classList.add("pending");
    // getting api response and returning it with parsing into js obj and in another 
    // then function calling weatherDetails function with passing api result as an argument
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() => {
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
    });
}

function weatherDetails(info) {
    if (info.cod == "404") { // if user entered city name isn't valid
        infoTxt.classList.replace("pending", "error");
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
    } else {
        //getting required properties value from the whole weather information
        const city = info.name;
        const country = info.sys.country;
        const { description, id } = info.weather[0];
        const { temp, feels_like, humidity } = info.main;
        // using cnoustom weather icon according to the id which api gives to us
        if (id == 800) {
            wIcon.src = "img/clear.svg";
        } else if (id >= 200 && id <= 232) {
            wIcon.src = "img/storm.svg";
        } else if (id >= 600 && id <= 622) {
            wIcon.src = "img/snow.svg";
        } else if (id >= 701 && id <= 781) {
            wIcon.src = "img/haze.svg";
        } else if (id >= 801 && id <= 804) {
            wIcon.src = "img/cloud.svg";
        } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
            wIcon.src = "img/rain.svg";
        }
        //passing a particular weather info to a particular element
        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
        infoTxt.classList.remove("pending", "error");
        infoTxt.innerText = "";
        inputField.value = "";
        widget__weather.classList.add("active-weather");
        widget__weather.classList.add("active");
        setTimeout(() => {
            locoScroll.update(); ScrollTrigger.refresh();
        }, 1200)
    }
}
arrowBack.addEventListener("click", () => {
    widget__weather.classList.remove("active");
    locoScroll.update(); ScrollTrigger.refresh();
    widget__weather.classList.remove("active-weather");
    setTimeout(function () {
        locoScroll.update(); ScrollTrigger.refresh();
    }, 1200)
});
const scroll1 = document.querySelector(".smooth-scroll")
const room3d = document.querySelector(".block__eats");
const a3d = document.querySelector(".a3d");
const button3d = document.querySelector(".button__go");
const button3d2 = document.querySelector(".button__go2");
const Eat = document.querySelector(".eat__title")
const ButtonHeader = document.querySelector(".burger__button");
const Container = document.querySelector(".container");
const BurgerListItems = document.querySelectorAll(".burger__list-item");
ButtonHeader.addEventListener("click", function (e) {
    ButtonHeader.classList.add("burger__button-active")
    BurgerListItems.forEach(function (item) {
        item.classList.add("burger__list-item-active")
    })
})
document.addEventListener("click", function (e) {
    if (!e.target.closest(".burger__button")) {
        ButtonHeader.classList.remove("burger__button-active")
        BurgerListItems.forEach(function (item) {
            item.classList.remove("burger__list-item-active")
        })
    }
})
const blokEat = document.querySelector(".block__images");
blokEat.addEventListener("click", function (e) {
    if (e.target.closest(".item__images")) {
        e.target.closest(".item__images").lastElementChild.classList.toggle("f-ac");
        e.target.closest(".item__images").lastElementChild.lastElementChild.classList.toggle("b-ac");
        e.preventDefault()
    }
});
window.addEventListener("contextmenu", function (e) {
    e.preventDefault()
})
gsap.registerPlugin(Flip);
const origcont = document.querySelector(".similarity");
const finalContainerEl = document.querySelector(".block__spans");
const reset = document.querySelector(".block__sucsesfull .icon-rest");
// grab the original state
const suc = document.querySelector(".block__sucsesfull");
const count = document.querySelector(".block__sucsesfull div");
let num = 6;
count.innerHTML = `6 | 6`;
function cat(e) {
    num -= 1
    count.innerHTML = `${num} | 6`;
    if (e.target.closest("span div")) {
        e.target.parentElement.classList.add("nn")
        let state = Flip.getState(finalContainerEl);
        e.target.parentElement.appendChild(finalContainerEl);
        Flip.from(state, {
            duration: 1,
            ease: "power1.inOut",
            scale: true,
        })
    }
    if (num <= 0) {
        reset.classList.add("reset-active")
        contSil.removeEventListener("click", cat)
        reset.addEventListener("click", function (e) {
            contSil.addEventListener("click", cat)
            num = 6
            count.innerHTML = `${num} | 6`;
            for (const item of flexIcon) {
                for (const its of item.children) {
                    its.classList.remove("nn")
                }
            }
            reset.classList.remove("reset-active")
        })
        function a() {
            let state2 = Flip.getState(finalContainerEl);
            suc.appendChild(finalContainerEl);
            Flip.from(state2, {
                duration: 1,
                ease: "power1.inOOut",
                scale: true,
                spin: 0.5
            });
        }
        setTimeout(a, 1000)
    }
}

window.setInterval(function () {
    let date = new Date(),
        hours = date.getHours(),
        minute = date.getMinutes(),
        seconds = date.getSeconds();
    document.querySelector(".block__clocks .clock1").innerHTML = hours;
    document.querySelector(".block__clocks .clock2").innerHTML = minute;
    document.querySelector(".block__clocks .clock3").innerHTML = seconds;
})
const ultag = document.querySelector(".content__tags ul"),
    inputTag = document.querySelector(".content__tags input"),
    tagNumb = document.querySelector(".details__tags span");
let maxTags1 = 10;
let tags = [];
countTags();
createTag();
function countTags() {
    tagNumb.innerText = maxTags1 - tags.length;
}
function createTag() {
    ultag.querySelectorAll(".content__tags li").forEach(li => li.remove());
    tags.slice().forEach(tag => {
        let liTag = `<li> ${tag}<ion-icon name="menu"></ion-icon></li>`;
        ultag.insertAdjacentHTML("afterbegin", liTag);
    });
    countTags();

}
function remove(element, tag) {
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    locoScroll.update(); ScrollTrigger.refresh();
    countTags();
}
function addTag(e) {
    locoScroll.update(); ScrollTrigger.refresh();
    if (e.key == "Enter") {
        locoScroll.update(); ScrollTrigger.refresh();
        let tag = e.target.value.replace(/\s+/g, ' ');
        if (tag.length > 1 && !tags.includes(tag)) {
            locoScroll.update(); ScrollTrigger.refresh();
            if (tags.length < 10) {
                tag.split(',').forEach(tag => {
                    tags.push(tag);
                    createTag();
                    locoScroll.update(); ScrollTrigger.refresh();
                });
            }
        }
        e.target.value = "";
    }
}
inputTag.addEventListener("keyup", addTag);
const removeBtn = document.querySelector(".details__tags button");
removeBtn.addEventListener("click", () => {
    locoScroll.update(); ScrollTrigger.refresh();
    tags.length = 0;
    ultag.querySelectorAll(".content__tags li").forEach(li => li.remove());
    countTags();
});
const AIM = document.querySelector(".block__iam");
AIM.addEventListener("click", function (e) {
    if (e.target.closest(".buuton-img-aim2")) {
        e.target.classList.toggle("buuton-img-aim2-act")
        e.target.lastElementChild.classList.toggle("line-aim2-ac")
        e.target.previousElementSibling.classList.toggle("buuton-img-aim1-ac")
        e.target.previousElementSibling.lastElementChild.classList.toggle("text-in__button-aim-ac")
    }
})
const buttonAIMOpenAll = document.querySelector(".iam-item__button2");
const buttonAIMCloseAll = document.querySelector(".iam-item__button1");
const ALLAIMITEM = document.querySelectorAll(".iam-item__img")
buttonAIMOpenAll.addEventListener("click", function (e) {
    ALLAIMITEM.forEach(function (item) {
        item.lastElementChild.classList.add("buuton-img-aim2-act");
        item.lastElementChild.lastElementChild.classList.add("line-aim2-ac")
        item.lastElementChild.previousElementSibling.classList.add("buuton-img-aim1-ac")
        item.lastElementChild.previousElementSibling.lastElementChild.classList.add("text-in__button-aim-ac")
    })
})
buttonAIMCloseAll.addEventListener("click", function (e) {
    ALLAIMITEM.forEach(function (item) {
        item.lastElementChild.classList.remove("buuton-img-aim2-act");
        item.lastElementChild.lastElementChild.classList.remove("line-aim2-ac")
        item.lastElementChild.previousElementSibling.classList.remove("buuton-img-aim1-ac")
        item.lastElementChild.previousElementSibling.lastElementChild.classList.remove("text-in__button-aim-ac")
    })
})
const filters = gsap.utils.toArray('.filter'),
    items = gsap.utils.toArray('.item');
function updateFilters(filterClass) {
    const state = Flip.getState(items); // get the current state  
    // adjust the display property of each item ("none" for filtered ones, "inline-flex" for matching ones)
    items.forEach(item =>
        item.style.display = item.classList.contains(filterClass) == false ? "none" : "inline-flex");
    // animate from the previous state
    Flip.from(state, {
        duration: 0.5,
        delay: 0.1,
        scale: true,
        ease: "power1.inOut",
        stagger: 0.1,
        absolute: false,
        onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: .6, delay: 0 }),
        onLeave: elements => gsap.to(elements, { opacity: 0, duration: 1 })
    });
}
filters.forEach(filter => {
    filter.addEventListener('click', e => {
        locoScroll.update(); ScrollTrigger.refresh();
        updateFilters(filter.getAttribute('data-filter'))
    })
})
const contWork = document.querySelector(".container-wors").children;
document.querySelector(".button-resize__work").firstElementChild.addEventListener("click", function (e) {
    for (let item of contWork) {
        item.classList.add("active__work")
    }
    document.querySelector(".button-resize__work").lastElementChild.style.background = "#151515"
    locoScroll.update(); ScrollTrigger.refresh(); ScrollTrigger.refresh();
    document.querySelector(".button-resize__work").firstElementChild.style.background = "#4db5ff"
})
document.querySelector(".button-resize__work").lastElementChild.addEventListener("click", function (e) {
    for (let item of contWork) {
        item.classList.remove("active__work")
    }
    document.querySelector(".button-resize__work").lastElementChild.style.background = "#4db5ff"
    locoScroll.update(); ScrollTrigger.refresh(); ScrollTrigger.refresh();
    document.querySelector(".button-resize__work").firstElementChild.style.background = "#151515"
})
document.querySelector(".menu__filter-works").lastElementChild;
document.querySelector(".filter__all").addEventListener("click", function (e) {
    locoScroll.update(); ScrollTrigger.refresh(); ScrollTrigger.refresh();
    document.querySelector(".menu__filter-works").lastElementChild.classList.add("allAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("miniAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("midleAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("bigAC");
})
document.querySelector(".filter__mini").addEventListener("click", function (e) {
    locoScroll.update(); ScrollTrigger.refresh(); ScrollTrigger.refresh();
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("allAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.add("miniAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("midleAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("bigAC");
})
document.querySelector(".filter__midle").addEventListener("click", function (e) {
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("allAC");
    ScrollTrigger.refresh();
    locoScroll.update(); ScrollTrigger.refresh();
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("miniAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.add("midleAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("bigAC");
})
document.querySelector(".filter__big").addEventListener("click", function (e) {
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("allAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("miniAC");
    ScrollTrigger.refresh();
    locoScroll.update(); ScrollTrigger.refresh();
    document.querySelector(".menu__filter-works").lastElementChild.classList.remove("midleAC");
    document.querySelector(".menu__filter-works").lastElementChild.classList.add("bigAC");
});



$(document).ready(function () {
    $('.slider__main').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        easing: 'ease-in-out',
        speed: 900,
        uatoplaySpeed: 4000,
        centerMode: true,
        touchThreshold: 5,
        slidesToShow: 1,
        infinite: false,
    });
})

window.onbeforeunload = function () {
    return "you realy want to leave from the page";
};
var navigation = new TimelineLite({ paused: true, reversed: true });

$(".header__menu a").click(function (e) {
    e.preventDefault()
    let target = e.target.getAttribute("href")
    console.log(target)
    ScrollTrigger.refresh();
    locoScroll.update()
    locoScroll.scrollTo(target, {
        'offset': -40, 'duration': 1000,
    });
    navigation.reversed() ? navigation.play() : navigation.reverse();
})



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

