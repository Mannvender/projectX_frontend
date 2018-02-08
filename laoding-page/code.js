let timeline = new TimelineMax();
let letters = $('.letter');
let underline = $('#underline');

timeline.from(letters, 1, {opacity: 0})
    .staggerFrom(letters, 1, {y: -600, ease: Bounce.easeOut}, 0.2)
    .from(underline, 2, {width: 0, ease: Expo.easeOut});

