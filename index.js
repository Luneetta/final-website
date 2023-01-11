function changeColor(){
    var ele = document.getElementsByName("bgColor");
    console.log(ele);
    for(i = 0; i < ele.length; i++){
        if(ele[i].checked){
            if(ele[i].value === "DEFAULTBG"){
                document.body.style.backgroundColor = "rgb(14,14,14)";
                console.log(ele[i].value)
            }
            else if(ele[i].value === "REDBG"){
                document.body.style.backgroundColor = "red";
                console.log(ele[i].value)
            }
            else if(ele[i].value === "WHITEBG"){
                document.body.style.backgroundColor = "white";
                console.log(ele[i].value)
            }
            
        }

    }
}