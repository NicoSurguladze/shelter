let pixel = 0;
let left = "";

function sliderButtonRight() {
    if (pixel > -1800) {
        pixel -= 360;
        left = pixel + "px";
        const cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.left = left;
        }
    }
}

function sliderButtonLeft() {
    if (pixel < 0) {
        pixel += 360;
        left = pixel + "px";
        const cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.left = left;
        }
    }

}

