$ (document).ready(function(){
    $(".name, .student, .small-intro").lettering();

    //IMAGES EFFECT

    anime ({
        targets: ".photo img",
        opacity: 1,
        delay: 1200,
        duration: 1500,
        easing:"easeInSine"
    })

    //STUDENT
    anime({
        targets:".student span",
        opacity: 1,
        duration: 1500,
        easing: "easeInSine",
        delay: anime.stagger(100, {start: 3000})
    })

    //NAME
    anime({
        targets:".name span",
        opacity: 1,
        duration: 3000,
        easing: "easeInSine",
        delay: anime.stagger(100, {start: 5000})
    })

    //LOGO
    anime({
        targets: ".logo",
        opacity: 1,
        duration: 3000,
        delay: 7500,
    })
  
    //MENU
    anime({
        targets: ".menu li",
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(150, {start: 8500})
    })
  
    //INTRO
    anime({
        targets: ".small-intro span",
        opacity: 1,
        duration: 1000,
        easing: "easeInSine",
        delay: anime.stagger(50, {start: 9500})
    })
  });