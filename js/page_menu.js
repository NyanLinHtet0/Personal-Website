const button_menu_toggle_outside = document.getElementById("menu_button_outside_id")
const button_menu_toggle_inside = document.getElementById("menu_button_inside_id")



function waitForAnimation(element) {
    return new Promise(resolve => {
      element.addEventListener(
        'animationend',
        () => resolve(),
        { once: true }
      );
    });
}

async function menu_fade_out() {
    const menu = document.getElementById("page_menu_id");
    menu.style.animation = "fadeOut .125s ease-in-out forwards";
    await waitForAnimation(menu);
    menu.style.display = "none";
    button_menu_toggle_outside.style.display = "flex";
    button_menu_toggle_outside.style.animation = "fadeIn .125s ease-in-out both";
    await waitForAnimation(button_menu_toggle_outside);
}

async function menu_fade_in() {
    const menu = document.getElementById("page_menu_id");
    button_menu_toggle_outside.style.animation = "fadeOut .125s ease-in-out forwards";
    await waitForAnimation(button_menu_toggle_outside);
    button_menu_toggle_outside.style.display = "none";
    menu.style.opacity = "0";
    menu.style.display = "flex";
    menu.style.animation = "fadeIn .125s ease-in-out both"; 
    await waitForAnimation(menu);
}

// Pop menu into the viewport when menu button clicked
button_menu_toggle_outside.addEventListener("click", function() {
    console.log("menu button clicked")
    menu_fade_in();
} );

// Hide menu outside of viewport when menu button clicked
button_menu_toggle_inside.addEventListener("click", function() {
    console.log("menu button clicked");
    menu_fade_out();
} );

// const referenceHeight = document.getElementById('body_content_id').offsetHeight;
// document.getElementById('menu_button_outside_id').style.marginBottom = `${referenceHeight}px`;


