window.addEventListener('scroll', animate);
window.addEventListener('load', animate);

// To understand this function watch- https://www.youtube.com/watch?v=CBQGl6zokMs
// Get animation names from https://daneden.github.io/animate.css/
$.fn.extend({
    intro: function (animationName, delay) {
        let objectBeingAnimated = $(this);
        if (delay) {
            objectBeingAnimated.css({'animation-delay': delay + 's'});
        }
        let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        objectBeingAnimated.removeClass('hidden').addClass('visible animated ' + animationName).one(animationEnd, () => {
            objectBeingAnimated.removeClass('animated ' + animationName);
            if (delay) {
                objectBeingAnimated.css({'animation-delay': '0s'}); // Reset animation delay
            }
        });
        return this;
    },
    outro: function (animationName) {
        let objectBeingAnimated = $(this);
        let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        objectBeingAnimated.addClass('animated ' + animationName).one(animationEnd, () => {
            objectBeingAnimated.addClass('hidden').removeClass('visible animated ' + animationName);
        });
        return this;
    },
    startle: function (animationName) {
        let objectBeingAnimated = $(this);
        let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        objectBeingAnimated.addClass('animated ' + animationName).one(animationEnd, () => {
            objectBeingAnimated.removeClass('animated ' + animationName);
        });
        return this;
    }
});

function animate(introAnimation) {
    let hiddenElements = document.getElementsByClassName('hidden');
    let visibleElements = document.getElementsByClassName('visible');

    let distanceScrolled = window.pageYOffset;
    let pageHeight = window.innerHeight;
    let amountOfPageSeen = distanceScrolled + pageHeight;

    for (let i = 0; i < hiddenElements.length; i++) {
        let element = hiddenElements[i];
        let elementHeight = parseInt(window.getComputedStyle(element).height);
        let elementAnimation = element.getAttribute('data-animation');
        let elementPosition = getElementYPosition(element);

        let isvisible = amountOfPageSeen > elementPosition + elementHeight;

        if (isvisible) {
            setTimeout(() => $(element).intro(elementAnimation), 100); // Hard coded
            /* It is important to change class after the loop is iterated otherwise it somehow
             * messes up the DOM structure */
        }
    }

    for (let i = 0; i < visibleElements.length; i++) {
        let element = visibleElements[i];
        let elementPosition = getElementYPosition(element);
        let elementHeight = parseInt(window.getComputedStyle(element).height);

        let isvisible = amountOfPageSeen > elementPosition;
        if (!isvisible) {
            setTimeout(() => $(element).removeClass('visible').addClass('hidden'), 100);
        }
    }
}

function getElementYPosition(element) {
    // let elementPosition = 0;
    // while(element) {
    //     elementPosition += (element.offsetTop);
    //     element = element.offsetParent;
    // }
    // return elementPosition;

    return $(element).offset().top; // Use jquery's offest because javascript's doesn't calculate element's transformation
}