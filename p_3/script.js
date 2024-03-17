var form = document.querySelector("form");
var inp = document.querySelectorAll(".chech");
console.log(inp);
var copy = []

form.addEventListener("submit", function(event){
    console.log(event);
    event.preventDefault();
    var a= {}
    var flag = false;
    var flag2 = false;
    var cnt = 0;
    for(var i = 0; i < inp.length; i++){
        if(inp[i].value.trim() === ""){
            inp[i].value === "" ? (inp[i].placeholder = "Gime me some value!!") : "";
            inp[i].classList.add('red-placeholder');
            flag = true;
            break
        }else{
            flag2 = true;
            a[inp[i].id] = inp[i].value.trim();
            cnt++;
        }
        
    }
    !flag && copy.push(a)
    console.log(copy);
    !flag2 &&  form.reset(); 


    cnt === inp.length && form.reset();
})