console.log("Hello World")

const button_menu_toggle = document.getElementById("menu_button")

button_menu_toggle.addEventListener("click", function() {
    console.log("button clicked")
    const menu = document.getElementById("page_menu_id");
    if (menu) {
        menu.style.transform = "translateX(350px)";
    }
    const menu_toggle = document.getElementById("menu_button");
    if (menu_toggle) {
        menu_toggle.style.transform = "translateX(-130px)";
    }
} );

