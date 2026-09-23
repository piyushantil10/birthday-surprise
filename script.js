const openBtn = document.getElementById("openBtn");
const memoryBtn = document.getElementById("memoryBtn");
const messageBtn = document.getElementById("messageBtn");

const welcome = document.getElementById("welcome");
const birthday = document.getElementById("birthday");
const memories = document.getElementById("memories");
const message = document.getElementById("message");

const typingText = document.getElementById("typingText");


// HER NAME

const herName = "HARSHITA";


// OPEN SURPRISE

openBtn.addEventListener("click", function () {

    welcome.classList.add("hidden");

    birthday.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// SHOW MEMORIES

memoryBtn.addEventListener("click", function () {

    birthday.classList.add("hidden");

    memories.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    showPhotos();

});


// PHOTO ANIMATION

function showPhotos() {

    const cards = document.querySelectorAll(".photo-card");

    cards.forEach(function(card, index) {

        setTimeout(function() {

            card.classList.add("show");

        }, index * 400);

    });

}


// SHOW FINAL MESSAGE

messageBtn.addEventListener("click", function () {

    memories.classList.add("hidden");

    message.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    startTyping();

});


// TYPING EFFECT

const text = `
Happy Birthday, ${herName} ❤️

I don't know if I can find the perfect words to say this,
but I just wanted to make your birthday a little more special.

I hope this new year of your life brings you
lots of happiness, beautiful memories,
and countless reasons to smile.

Keep being the amazing person you are.

And most importantly...

I hope you always keep that beautiful smile. ❤️
`;

let index = 0;


// START TYPING

function startTyping() {

    typingText.innerHTML = "";

    index = 0;

    typeWriter();

}


// TYPE WRITER

function typeWriter() {

    if (index < text.length) {

        if (text.charAt(index) === "\n") {

            typingText.innerHTML += "<br>";

        } else {

            typingText.innerHTML += text.charAt(index);

        }

        index++;

        setTimeout(typeWriter, 35);

    }

}