const birthday = `13 Nov 2021 00:00:00`
const countdownContainer = document.querySelector('.countdown-container')
const titleContainer = document.querySelector('.countdown-title')
const daysEl = document.querySelector('.daysEl')
const hoursEl = document.querySelector('.hoursEl')
const minsEl = document.querySelector('.minsEl')
const secondsEl = document.querySelector('.secondsEl')
const giftContainer = document.querySelector('.gift-container')
const giftBox = document.querySelector('.gift-box')
const giftTop = document.querySelector('.gift-top')
const giftBottom = document.querySelector('.gift-bottom')
const boxText = document.querySelector('.gift-text')
const textWishies = document.querySelector('.gift-wishes')
const audio = document.querySelector('#audio')
const create = document.querySelector('.create')
const clock = document.querySelector('.clock')
const clockContainer = document.querySelector('.clock-container')
const clockSeconds = document.querySelector('.clock-seconds')
const clockMinutes = document.querySelector('.clock-minutes')
const clockHours = document.querySelector('.clock-hours')





function countdown() {
    const birthdayDate = new Date(birthday)
    const currentDay = new Date()
    const totalSeconds = Math.floor((birthdayDate - currentDay) / 1000)
    const seconds = totalSeconds % 60
    const mins = Math.floor((totalSeconds / 60) % 60)
    const hours = Math.floor((totalSeconds / 3600 % 24))
    const days = Math.floor((totalSeconds / 3600 / 24))

    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)

    if (daysEl.innerHTML == 0 && hoursEl.innerHTML == 0 && minsEl.innerHTML == 0 && secondsEl.innerHTML == 9) {
        titleContainer.classList.add('active')
    }




}




function formatTime(time) {
    if (time < 10) {
        if (time >= 0) {

            setInterval(countdown, 1000)
            giftContainer.classList.remove('fadeInBox')
            countdownContainer.style.display = 'flex'



        } else {

            clearInterval(setInterval)
            giftContainer.classList.add('fadeInBox')
            countdownContainer.style.display = 'none'
            clock.style.display = 'none'





        }
        return `0${time}`;

    } else {
        return time;

    }
}





function clockTime() {
    const currentTime = new Date()
    const currentSeconds = currentTime.getSeconds() / 60
    const currentMins = ((currentTime.getMinutes() + currentSeconds) / 60)
    const currentHours = ((currentTime.getHours() + currentMins) / 12)
    clockSeconds.style.transform = `rotate(${currentSeconds*360 +6}deg)`
    clockMinutes.style.transform = `rotate(${currentMins*360}deg)`
    clockHours.style.transform = `rotate(${currentHours*360}deg)`


}



var i = 1

function changeClockImg() {
    var clockImg = [
        'url(./img/ngan1.jpg)',
        'url(./img/ngan2.jpg)',
        'url(./img/ngan3.jpeg)',
        'url(./img/ngan4.jpeg)',
        'url(./img/ngan5.jpg)',
        'url(./img/ngan6.jpg)',
        'url(./img/ngan7.jpg)',

    ]
    clockContainer.style.backgroundImage = clockImg[i]
    i++;
    if (i >= clockImg.length) {
        i = 0;
    }
}





function OpenBox() {

    giftBox.onclick = function() {
        giftTop.classList.add('boxOpen')
        giftBottom.classList.add('boxOpen')
        boxText.classList.add('openText')
        titleContainer.classList.remove('active')
        audio.play()


    }

}

function exitOverlay() {
    textWishies.onclick = function() {
        giftTop.classList.remove('boxOpen')
        giftBottom.classList.remove('boxOpen')
        boxText.classList.remove('openText')
        audio.pause()


    }

}


function hearts() {
    const creat = document.createElement('div')
    creat.classList.add('heart')
    creat.innerHTML = '💗'

    creat.style.left = Math.random() * 100 + 'vw'
    creat.style.animationDuration = Math.random() * 3 + 3 + 's'
    boxText.appendChild(creat)


}




//gọi lại hàm


countdown();
setInterval(clockTime, 1000)
setInterval(changeClockImg, 3000)
OpenBox();
exitOverlay();
setInterval(hearts, 500);