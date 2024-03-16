var btn = document.querySelector("button");
var para = document.querySelector("p");

flag = true;
btn.addEventListener('click', function(){
    if(flag){
        para.textContent = "My text is change!!";
        para.innerHTML ="<i>My text is change!!</i>";
        para.style.color = "red";
    }else{
        para.textContent = "Lorem ipsum";
        para.style.color = "#000";
    }
    flag = !flag;
})