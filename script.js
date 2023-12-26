let button = document.querySelectorAll(".text-head img");
let ele = document.querySelectorAll("p");

    let count1 = 0;
    document.querySelector(".image1").addEventListener("click",() => {
        if(count1===0){
            document.querySelector(".image1").src = "assets/images/icon-minus.svg";
            document.querySelector(".p1").style.display="flex";
            count1 = 1;
            // console.log(count1);
        }
        else{
            document.querySelector(".image1").src = "assets/images/icon-plus.svg";
            document.querySelector(".p1").style.display="none";
            count1 = 0;
        }
    });
    let count2 = 0;
    document.querySelector(".image2").addEventListener("click",() => {
        if(count2===0){
            document.querySelector(".image2").src = "assets/images/icon-minus.svg";
            document.querySelector(".p2").style.display="flex";
            count2 = 1;
        }
        else{
            document.querySelector(".image2").src = "assets/images/icon-plus.svg";
            document.querySelector(".p2").style.display="none";
            count2 = 0;
        }
    });
    let count3 = 0;
    document.querySelector(".image3").addEventListener("click",() => {
        if(count3===0){
            document.querySelector(".image3").src = "assets/images/icon-minus.svg";
            document.querySelector(".p3").style.display="flex";
            count3 = 1;
        }
        else{
            document.querySelector(".image3").src = "assets/images/icon-plus.svg";
            document.querySelector(".p3").style.display="none";
            count3 = 0;
        }
    });
    let count4 = 0;
    document.querySelector(".image4").addEventListener("click",() => {
        if(count4===0){
            document.querySelector(".image4").src = "assets/images/icon-minus.svg";
            document.querySelector(".p4").style.display="flex";
            count4 = 1;
        }
        else{
            document.querySelector(".image4").src = "assets/images/icon-plus.svg";
            document.querySelector(".p4").style.display="none";
            count4 = 0;
        }
    });


    // console.log(window);