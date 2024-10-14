let btn = document.querySelector("button");
let overlay = document.querySelector(".overlay");
let items = document.querySelector(".items");
let item = Array.from(document.querySelectorAll(".item"));
let trials = document.querySelector(".trials span");

// onclick function
btn.onclick = function(){
    trials.innerHTML = 0;
    let name = document.querySelector(".name span");
    let message = prompt("What Is Your Name ?");
    if(message =="" || message == null){
        name.innerHTML = "Unkown";
    }else{
        name.innerHTML = message;
    }
    //display the overlay 
    overlay.style.display = "none";
    // call random function
    randomItems();
}

// set random items 
function randomItems(){
    let number = item.length;
    for(let i=0;i<number;i++){
        item[i].style.order= Math.floor(Math.random() * number);
    }
}

// item onclick
item.forEach((ele)=>{
    ele.addEventListener("click",function(){
        ele.classList.add("flip");
        let filterArr = item.filter(flip => flip.classList.contains('flip'));
            if(filterArr.length == 2){
                items.classList.add("stop");
                check(filterArr[0], filterArr[1]);
            }
    })
})

// check function
function check(index,next){
    setTimeout(() => {
        if(index.getAttribute("data-img") == next.getAttribute("data-img")){
            index.classList.remove("flip");
            next.classList.remove("flip");
    
            index.classList.add("true");
            next.classList.add("true");
            items.classList.remove("stop");
        }else{
            index.classList.remove("flip");
            next.classList.remove("flip");
            trials.innerHTML++;
            items.classList.remove("stop");
        }
    }, 1000);
}