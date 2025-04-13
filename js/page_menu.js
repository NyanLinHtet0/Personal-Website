console.log("Hello World")

const button_menu_toggle_outside = document.getElementById("menu_button_outside_id")
const button_menu_toggle_inside = document.getElementById("menu_button_inside_id")


button_menu_toggle_outside.addEventListener("click", function() {
    console.log("button clicked")
    const menu = document.getElementById("page_menu_id");
    if (menu){
        button_menu_toggle_outside.style.animation = "fadeOut .125s ease-in-out forwards";
        setTimeout(() => {
            button_menu_toggle_outside.style.display = "none";
            menu.style.opacity = "0";
            menu.style.display = "flex";
            menu.style.animation = "fadeIn .125s ease-in-out both";     
        }, 125);
    }
} );

button_menu_toggle_inside.addEventListener("click", function() {
    console.log("button clicked");
    const menu = document.getElementById("page_menu_id");
    if (menu){
        menu.style.animation = "fadeOut .125s ease-in-out forwards";
        setTimeout(() => {
            menu.style.display = "none";
            button_menu_toggle_outside.style.display = "flex";
            button_menu_toggle_outside.style.animation = "fadeIn .125s ease-in-out both";
        }, 125);
    }
} );

