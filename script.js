let nextslide = document.getElementsByClassName("next");
let prevslide = document.getElementsByClassName("previous");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let circlesContainer = document.querySelector(".circles");
let circleElements = [];

function slideCircles() {
    slides.forEach((slide, index) => {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        if (index === 0) circle.classList.add("selected");
        circlesContainer.appendChild(circle);
        circleElements.push(circle); 
    });
    circleElements.forEach((circle, index) => {
        circle.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
            showCircle(currentSlide);
        })
    })
}

function showCircle(index) {
    circleElements.forEach((circle) => {
        circle.classList.remove("selected");
    });
    circleElements[index].classList.add("selected");
};

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("selected");
    }
    slides[index].classList.add("selected");
};

function toggleNext () {
    nextslide[0].addEventListener("click", function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
}

function togglePrev () {
    prevslide[0].addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
}

function timer () {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        showCircle(currentSlide);
    }, 5000);
}

toggleNext();
togglePrev();
showSlide(currentSlide);
slideCircles();
timer();
showCircle(currentSlide);
