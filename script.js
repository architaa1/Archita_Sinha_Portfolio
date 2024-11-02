window.onload=function()
{
    alert("Welcome!")
};

window.onload=function(){
    displayDateTime();
}

function changeaboutmetext()
{
    const aboutMeTexts=["Tech Enthusiast","Data Scientist","Web Developer "];
    const typingSpeed=100;
    const eraseSpeed=50;
    const pauseTime=1500;
    const aboutMeElement=document.querySelector('.about-me');

    let textIndex=0;
    let charIndex=0;
    let isDeleting=false;

    function type(){
        const currentText=aboutMeTexts[textIndex];
         
        if(!isDeleting && charIndex < currentText.length){
            aboutMeElement.textContent +=currentText[charIndex];
            charIndex++;
            setTimeout(type,typingSpeed);
        }
        else if(isDeleting && charIndex > 0){
            aboutMeElement.textContent=currentText.substring(0,charIndex-1);
            charIndex--;
            setTimeout(type,eraseSpeed);
        }
        else{
            isDeleting=!isDeleting;
            if(!isDeleting){
                textIndex=(textIndex+1)%aboutMeTexts.length;
            }
            setTimeout(type,pauseTime);
        }
    }
    type();
}

changeaboutmetext();

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('light-mode');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressbar = entry.target.querySelector('.progress-bar');
                const progress = progressbar.dataset.progress;
                progressbar.style.setProperty('--progress', `${progress}%`);
                progressbar.classList.add('animated');
                observer.unobserve(entry.target);
            }         
        });
    });

    const programmingLanguages = document.querySelectorAll('.skill');
    programmingLanguages.forEach(skill => {
        observer.observe(skill);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle=document.querySelector(".nav-toggle");
    const navMenu=document.querySelector(".nav-menu");
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    })
});



document.querySelectorAll('.btn-know-more').forEach(button => {  
        button.addEventListener('click', () => {
        const modal=document.createElement('div');
        modal.innerHTML=`
            <div class="modal-content">
                <span class="close-button>x</span>
                <h2>Project Title"</h2>
                <p>Project description...</p>
                <!--Add more content here-->
            </div>
        `;
        modal.className='modal';
        document.body.appendChild(modal);

        modal.style.display='block';

        modal.querySelector('.close-button').addEventListener('click',()=>{
            modal.style.display='none';
        });
    });
});

let slideIndex = 1;

function showSlides(n, slides) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

function initializeCarousel(carouselContainer) {
    const slides = carouselContainer.querySelectorAll(".carousel-slide img");

    function moveSlide(n) {
        slideIndex += n;
        showSlides(slideIndex, slides);
    }

    showSlides(slideIndex, slides);

    carouselContainer.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    carouselContainer.querySelector('.next').addEventListener('click', () => moveSlide(1));
}

document.querySelectorAll('.btn.know-more').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = 'block';
            disableScroll();
            const carouselContainer = modal.querySelector('.carousel-container');
            if (carouselContainer) {
                initializeCarousel(carouselContainer);
            }
        }
    });
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => { modal.style.display = 'none' });
        enableScroll();
    }
});

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}
