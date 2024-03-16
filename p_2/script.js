var btn = document.querySelector("button");
var img_1 = document.querySelector("#img_1");
var img_2 = document.querySelector("#img_2");

var url_1 = "https://images.unsplash.com/photo-1705168213108-ae20593324d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

var url_2 = "https://images.unsplash.com/photo-1710268503380-7f87a599d15b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

flag = true;

btn.addEventListener("click", function(){
    img_1.src = flag ? url_1 : url_2;

    img_2.src = flag ? url_2 : url_1;

    flag = !flag;
})