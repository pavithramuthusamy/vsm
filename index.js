(function(e) {
    e.fn.circle = function(t) {
        var n = e.extend({
            speed: "5000"
        }, t);
        return this.each(function() {
            function t() {
                var e = i.find("li.block.active").index();
                c.removeClass("active"), c.eq(e).addClass("active")
            }

            function o() {
                var n;
                i.addClass("disable-hover"), i.stop(!0, !0).animate({
                    rotatedeg: p.deg += p.step
                }, {
                    duration: 400,
                    step: function(t) {
                        t >= 360 ? t -= 360 : t <= -360 && (t += 360), e(this).css("transform", "rotate(" + t + "deg)"), e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                    },
                    complete: function() {
                        p.active = i.find("li.active").removeClass("active"), "right" == p.direction && p.step == d && (p.active.prev() && p.active.prev().length ? (n = p.active.prev().index(), p.active.prev().addClass("active")) : (p.active.siblings(":last-child").addClass("active"), n = 9)), "left" == p.direction && p.step == u && (p.active.next() && p.active.next().length ? (n = p.active.next().index(), p.active.next().addClass("active")) : (p.active.siblings(":first-child").addClass("active"), n = 0)), i.is(":animated"), i.removeClass("disable-hover"), t()
                    }
                }, "ease")
            }

            function r() {
                i.addClass("disable-hover"), i.stop(!0, !0).animate({
                    rotatedeg: p.deg += p.step
                }, {
                    duration: 400,
                    step: function(t) {
                        t >= 360 ? t -= 360 : t <= -360 && (t += 360), e(this).css("transform", "rotate(" + t + "deg)"), e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                    },
                    complete: function() {
                        p.active = i.find("li.active"), i.is(":animated"), i.removeClass("disable-hover")
                    }
                }, "ease")
            }
            var i = e(this),
                s = i.find("li").length,
                a = i.find(" > li .icon"),
                l = "count" + s,
                u = 0,
                c = i.next().find(".animate"),
                p = {
                    duration: n.speed,
                    deg: 0,
                    step: u,
                    active: i.find("li.active"),
                    direction: "left"
                };
            switch (s) {
                case 10:
                    u = -36;
                    break;
                case 9:
                    u = -40;
                    break;
                case 8:
                    u = -45;
                    break;
                case 7:
                    u = -51.5;
                    break;
                case 6:
                    u = -60;
                    break;
                case 5:
                    u = -72;
                    break;
                case 4:
                    u = -90;
                    break;
                case 3:
                    u = -120;
                    break;
                case 2:
                    u = -180;
                    break;
                case 1:
                    u = -360
            }
            i.addClass(l);
            var d = u - 2 * u;
            i.find("> li").first().addClass("active"), i.find("> li").first().find("a").attr("href"), c.eq(0).addClass("active"), e(a).on("click", function() {
                var n = e(this).parent().index() - i.find("li.active").index();
                i.children("li").removeClass("active"), e(this).parent().addClass("active"), p.step = -n * d, n * d >= 288 && (p.step = -n * d + 360), n * d <= -288 && (p.step = -n * d - 360), r(), p.step = u, p.direction = "left", t()
            });
            var f = i.parent().find("div.next"),
                h = i.parent().find("div.prev");
            f.on("click", function() {
                i.is(":animated") || (p.direction = "left", p.step = u, o())
            }), h.on("click", function() {
                i.is(":animated") || (p.direction = "right", p.step = d, o())
            })
        })
    }
}(jQuery));

function headerClick() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// $(document).on('resize, ready', function() {
//     $('.main__desc').css('display', 'block');
//     if($(window).width() > 1300) {
//         $('.main__background').remove();
//         $('.main').addClass('main__background');
//     }
// });

$(function () {

$('div').each(function () {
    var url = $(this).attr('data-image');
    if (url) {
        $(this).css('background-image', 'url(' + url + ')');
    }
});

$('section').each(function () {
    var url = $(this).attr('data-image');
    if (url) {
        $(this).css('background-image', 'url(' + url + ')');
    }
});


function autoHeightCircle() {
    var circle = $('.circle--rotate'),
        circleInner = $('.animate-wrapper'), 
        circleH = circle.width(),
        circleInnerH = circleInner.width();
    circle.height(circleH);
    circleInner.height(circleInnerH);
}

$("#circle--rotate").circle();
autoHeightCircle();
$(window).resize(function () {
    autoHeightCircle();
});
});


const reviews = [
    {
        id: 1,
        title: "Constant Update",
        job: "Front-end developer",
        
        width: '200px', height: '200px', padding: '1rem',
        text:
            'Innvodesk delivers continuous innovation every time. Our platform is powered by new-age abilities such as social sensing, RPA, analytics, and mobility. It helps you stay up-to-date with the current, and competitive updates daily.'
    },    
    {
        id: 3,
        title: "Strengthens Business",
        width: '200px', height: '200px',
        text:
        `Receive updates about every business interaction and activity. Our low code automation platform connects your systems, people, workflows, and data. Therefore, you can build a business with easy processes, and uninterrupted information flow.`
    }, 
    {
        id: 6,
        title: "Budget Friendly",
        width: '175px', height: '200px',
        text:
            'Marketing Time is important for everyone. InnvoDesk’s professionals have plenty of practical experience with knowledge. Based on it, they have derived proven methodologies to get you updates and operate your business successfully.'
    },
    {
        id: 5,
        title: "Maintain IT Infrastructure",
        width: '200px', height: '200px',
        text:
        `InnvoDesk will improvise the current IT investments of your business. With our cloud, SaaS, and on-premise deployment models, you can able to develop your business and integrate your existing operational and IT environments.`
    }, 
    {
        id: 2,
        title: "Satisfied Customer",
        width: '175px', height: '200px',
        text:
            'Innvodesk keeps your customers more occupied in all of your social media platforms like websites, mobile apps, or emails. It will make your customer get quicker resolutions, and easily accessible. Overall, we assure you that customers will have a delightful experience with us. '
   },

    {
        id: 4,
        title: "Business Improvement",
        width: '175px', height: '200px',
        text:
            'Innvodesk mainly concentrates on improving your customers, and users. Our professionals work on our behalf to satisfy the needs of customers easily. So, our software will take your business ahead.'
   },


];

const imgText = document.getElementById("imgText");
const testimonial = document.getElementById("testimonial");
const name = document.getElementById("name");
const job = document.getElementById("job");

const leftBtn = document.querySelector(".carousel__btn--left");
const rightBtn = document.querySelector(".carousel__btn--right");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showContent();
});

function showContent() {
    const item = reviews[currentItem];
    img.style.padding = item.padding ? item.padding : '1rem';
    imgText.textContent = item.title;
    testimonial.textContent = item.text;
    
    
}

rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showContent();
});

leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showContent();
});


function headerClick() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  $('#sign-up').on('submit', function(e){
    e.preventDefault(); 
    let data = $('form').serializeArray()
    let obj = {}
    data.forEach(element => {
        obj[element['name']] = element['value'];
    });
    $.ajax({
        type: "POST",
        // url: "http://127.0.0.1:5000/signup",
        url: "https://innvodesk.com/vsmhomeapi/signup",
        data: {
             json: JSON.stringify(obj)
        },
        // contentType: "application/json; charset=utf-8",
        success: function (response) {
            if(response.status === 200) {
            alert("Thank you for your interest. We received your information");
            }
            else{
            alert("Something went wrong!!! Please try again later");
            }
            window.location.reload();
        },
        error: function (response) {
            alert("Something went wrong!!! Please try again later");
        }
    });
});