// ---------Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function () {
    setTimeout(function () { test(); });
});
$(window).on('resize', function () {
    setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () { test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == '') {
        path = 'index.html';
    }

    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    // Add active class to target link
    target.parent().addClass('active');
});


// function([string1, string2],target id,[color1,color2])    
consoleText(['Minji Record', 'To my past self'], 'text', ['white']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1500)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1500)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}

// svg animation

const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const content4 = document.querySelector('.content4')
const content5 = document.querySelector('.content5')
const content6 = document.querySelector('.content6')
const content7 = document.querySelector('.content7')
const content8 = document.querySelector('.content8')
const content9 = document.querySelector('.content9')
const path1 = document.querySelector('.path1')
const path2 = document.querySelector('.path2')
const path3 = document.querySelector('.path3')
const path4 = document.querySelector('.path4')
const path5 = document.querySelector('.path5')
const path6 = document.querySelector('.path6')
const path7 = document.querySelector('.path7')
const path8 = document.querySelector('.path8')
const path9 = document.querySelector('.path9')
const path1Length = path1.getTotalLength()
const path2Length = path2.getTotalLength()
const path3Length = path3.getTotalLength()
const path4Length = path4.getTotalLength()
const path5Length = path5.getTotalLength()
const path6Length = path6.getTotalLength()
const path7Length = path7.getTotalLength()
const path8Length = path8.getTotalLength()
const path9Length = path9.getTotalLength()
path1.style.strokeDasharray = path1Length
path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content1, path1Length)

path2.style.strokeDasharray = path2Length
path2.style.strokeDashoffset = path2Length

path3.style.strokeDasharray = path3Length
path3.style.strokeDashoffset = path3Length

path4.style.strokeDasharray = path4Length
path4.style.strokeDashoffset = path4Length

path5.style.strokeDasharray = path5Length
path5.style.strokeDashoffset = path5Length

path6.style.strokeDasharray = path6Length
path6.style.strokeDashoffset = path6Length

path7.style.strokeDasharray = path7Length
path7.style.strokeDashoffset = path7Length

path8.style.strokeDasharray = path8Length
path8.style.strokeDashoffset = path8Length

path9.style.strokeDasharray = path9Length
path9.style.strokeDashoffset = path9Length

function calcDashoffset(scrollY, element, length) {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight
    const value = length - (length * ratio)
    return value < 0 ? 0 : value > length ? length : value
}

function scrollHandler() {
    const scrollY = window.scrollY + (window.innerHeight * 0.8)
    path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
    path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, path2Length)
    path3.style.strokeDashoffset = calcDashoffset(scrollY, content3, path3Length)
    path4.style.strokeDashoffset = calcDashoffset(scrollY, content4, path4Length)
    path5.style.strokeDashoffset = calcDashoffset(scrollY, content5, path5Length)
    path6.style.strokeDashoffset = calcDashoffset(scrollY, content6, path6Length)
    path7.style.strokeDashoffset = calcDashoffset(scrollY, content7, path7Length)
    path8.style.strokeDashoffset = calcDashoffset(scrollY, content8, path8Length)
    path9.style.strokeDashoffset = calcDashoffset(scrollY, content9, path9Length)
}

window.addEventListener('scroll', scrollHandler)