/* =========================
   HEARTS
========================= */

const heartContainer =
    document.getElementById(
        "heart-container"
    );


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "heart-particle"
    );


    heart.style.left =
        Math.random() * 100 + "%";


    const size =
        Math.random() * 14 + 7;


    heart.style.width =
        size + "px";

    heart.style.height =
        size + "px";


    const duration =
        Math.random() * 7 + 7;


    heart.style.animationDuration =
        duration + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    heart.style.opacity =
        Math.random() * .6 + .3;


    heartContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, (duration + 2) * 1000);
}


setInterval(
    createHeart,
    450
);


/* =========================
   ROSE PETALS
========================= */

const petalContainer =
    document.getElementById(
        "petal-container"
    );


function createPetal() {

    const petal =
        document.createElement("div");


    petal.classList.add(
        "petal"
    );


    petal.style.left =
        Math.random() * 100 + "%";


    const size =
        Math.random() * 8 + 8;


    petal.style.width =
        size + "px";


    petal.style.height =
        size * 1.5 + "px";


    const duration =
        Math.random() * 5 + 6;


    petal.style.animationDuration =
        duration + "s";


    petal.style.animationDelay =
        Math.random() * 2 + "s";


    petalContainer.appendChild(
        petal
    );


    setTimeout(() => {

        petal.remove();

    }, (duration + 2) * 1000);
}


setInterval(
    createPetal,
    700
);


/* =========================
   LOVE LETTER
========================= */

const modal =
    document.getElementById(
        "loveModal"
    );


function openLetter() {

    modal.classList.add(
        "active"
    );

}


function closeLetter() {

    modal.classList.remove(
        "active"
    );

}


/* Click outside letter */

modal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === modal
        ) {

            closeLetter();

        }

    }
);


/* =========================
   ESC CLOSE
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeLetter();

        }

    }
);


/* =========================
   MUSIC BUTTON
========================= */

let musicPlaying = false;


function toggleMusic() {

    const button =
        document.getElementById(
            "musicButton"
        );


    musicPlaying =
        !musicPlaying;


    if (musicPlaying) {

        button.innerHTML = "♫";

        button.style.boxShadow =
            "0 0 25px #ff286c";

    } else {

        button.innerHTML = "♪";

        button.style.boxShadow =
            "none";

    }

}