var panel = document.querySelectorAll(".panel");

for (var i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", function () {
        var active = document.querySelector(".active");
        var _class = this.classList.item(1);
        var drop = document.getElementById(_class);
        drop.classList.toggle("active");

        if (drop.classList.contains("active")) {
            this.children[1].innerText = "-";
        } else {
            this.children[1].innerText = "+";
        }        
    })
}