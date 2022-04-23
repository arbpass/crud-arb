let titleBox= document.getElementById("titleBox");
let textBox= document.getElementById("textBox");
let cardBox= document.getElementsByClassName("cardBox");

titleBox.addEventListener("mouseover", (e)=>{
    titleBox.style.backgroundColor= "white";
    titleBox.style.color= "black";
})
titleBox.addEventListener("mouseout", (e)=>{
    titleBox.style.backgroundColor= "rgb(23 23 23)";
    titleBox.style.color= "white";
})
textBox.addEventListener("mouseover", (e)=>{
    textBox.style.backgroundColor= "white";
    textBox.style.color= "black";
})
textBox.addEventListener("mouseout", (e)=>{
    textBox.style.backgroundColor= "rgb(23 23 23)";
    textBox.style.color= "white";
})
Array.from(cardBox).forEach((ele)=>{
    ele.addEventListener("mouseover", (e)=>{
        ele.style.backgroundColor= "white";
        ele.style.color= "black";
    })
    ele.addEventListener("mouseout", (e)=>{
        ele.style.backgroundColor= "rgb(23 23 23)";
        ele.style.color= "white";
    })
})

//edit btn function
Array.from(cardBox).forEach((ele)=>{
    ele.querySelector("a").addEventListener("click", (e)=>{
        titleBox.value= ele.querySelector("h5").innerText;
        textBox.value= ele.querySelector("p").innerText;
    })
})
