
const button1 = document.getElementById("button1");
const detail = document.getElementById("project-indepth-detail_1");
const grid = document.querySelector('.projects-grid');
const arrowRight = document.getElementById('scrollArrow_right');
const arrowLeft = document.getElementById('scrollArrow_left');


button1.addEventListener("click", function() {
    console.log("menu button clicked");
    if(detail.classList.contains("hidden")) {
        detail.classList.remove("hidden");
        detail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    else{
        detail.classList.add("hidden");
    }    
} );

function updateArrowVisibility() {
    const canScroll = grid.scrollWidth > grid.clientWidth;
    const atStart = grid.scrollLeft <= 10;
    const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10;

    if (canScroll && !atEnd) {
        arrowRight.classList.add('visible');
    } else {
        
    }

    if (canScroll && !atStart) {
        arrowLeft.classList.add('visible');
    } else {
        arrowLeft.classList.remove('visible');
    }
}

arrowRight.addEventListener('click', () => {
    grid.scrollBy({ left: 300, behavior: 'smooth' });
    arrowRight.style.animation = "fadeOut .125s ease-in-out forwards";
    arrowRight.style.display = "none";
    arrowLeft.style.animation = "fadeOut .125s ease-in-out forwards";
    arrowLeft.style.display = "none";
    setTimeout(() => {
        arrowRight.style.opacity = 0;
        arrowRight.style.display = "block";
        arrowRight.style.animation = "fadeIn .125s ease-in-out forwards";
        arrowLeft.style.opacity = 0;
        arrowLeft.style.display = "block";
        arrowLeft.style.animation = "fadeIn .125s ease-in-out forwards";
    }, 500);
});

arrowLeft.addEventListener('click', () => {
    grid.scrollBy({ left: 300, behavior: 'smooth' });
    arrowRight.style.animation = "fadeOut .125s ease-in-out forwards";
    arrowRight.style.display = "none";
    arrowLeft.style.animation = "fadeOut .125s ease-in-out forwards";
    arrowLeft.style.display = "none";
    setTimeout(() => {
        arrowRight.style.opacity = 0;
        arrowRight.style.display = "block";
        arrowRight.style.animation = "fadeIn .125s ease-in-out forwards";
        arrowLeft.style.opacity = 0;
        arrowLeft.style.display = "block";
        arrowLeft.style.animation = "fadeIn .125s ease-in-out forwards";
    }, 500);
});

arrowLeft.addEventListener('click', () => {
    grid.scrollBy({ left: -300, behavior: 'smooth' });
});

grid.addEventListener('scroll', updateArrowVisibility);
window.addEventListener('resize', updateArrowVisibility);
window.addEventListener('load', updateArrowVisibility);
