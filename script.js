const sections = document.querySelectorAll('.profile-container, .Skills, .Projects, .Contact');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Triggers the nav swap when the section is 1/3rd visible on screen
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active-nav');
        }
    });
});

const draggables = document.querySelectorAll('.draggable');
draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', startDrag);
    });

        function startDrag(e){
            e.preventDefault();
            const element = e.currentTarget;
            const container = document.getElementById('profile-container');

            let shiftX = e.clientX - element.getBoundingClientRect().left;
            let shiftY = e.clientY - element.getBoundingClientRect().top;

            element.style.zIndex = 1000;

            function moveSticker( pageX, pageY) {
                const containerRect = container.getBoundingClientRect();

                let leftPosition = pageX - containerRect.left - shiftX+ window.scrollX;
                let topPosition = pageY - containerRect.top - shiftY + window.scrollY;

                element.style.left = leftPosition + 'px';
                element.style.top = topPosition + 'px';
            }
            
            function onMouseMove(e) {
                moveSticker(e.pageX, e.pageY);
            }
            document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', function onMouseUp() {

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        

        element.style.zIndex = 10; 
    })
}
        