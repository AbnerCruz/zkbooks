///animation
let click = 0
function filters_animation(){
    click += 1
    if(click == 1){
        document.getElementById("filters_div").classList.add("animation");
        document.getElementById("filters_div").classList.remove("animation_reverse");
    }
    else if(click == 2){
        document.getElementById("filters_div").classList.add("animation_reverse");
        document.getElementById("filters_div").classList.remove("animation");
        click = 0
    }
}
function copy_animation(){
    document.getElementById("copy_h3").classList.toggle("copy_animation");
}
