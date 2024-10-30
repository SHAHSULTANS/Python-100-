
///----------------Dynamic NAV Width controls------------------------------------------

adjustNavHeight();
window.addEventListener("resize", () => {
    adjustNavHeight();
});

// Function to adjust the margin of the content based on the navigation bar's height
function adjustNavHeight() {
    const nav = document.querySelector(".nav");
    const navHeight = nav.offsetHeight;
    const content = document.querySelector(".row");
    content.style.marginTop = `${navHeight}px`;
}
//------------------------------------------------------





//------------------aside scroll var maintaince --------------------------------------
document.querySelectorAll(".col-25 a").forEach(function (link) {
    //console.log(link);
    link.addEventListener("click", () => {
        let scrollTop = document.querySelector(".col-25").scrollTop;
        sessionStorage.setItem("scrollTop", scrollTop);
        // console.log(scrollTop);

    });

});

window.addEventListener("DOMContentLoaded", () => {
    let scroll = sessionStorage.getItem("scrollTop");
    //console.log(scroll);

    document.querySelector(".col-25").scrollTop = `${scroll}`;

    //console.log(document.querySelector(".col-25").scrollTop);
});

//--------------------------------------------------------




/*


window.onscroll = function () {
let x = document.querySelector(".nav .logo");
//x.style.top = "-20px";
let computedStyle = getComputedStyle(x);
//console.log(computedStyle.marginBottom);

//console.log(col.style.marginTop);
let navH=document.querySelector(".nav");
//console.log(navH.offsetHeight);
navH=navH.offsetHeight;
let col=document.querySelector(".row");
col.style.marginTop=navH+"px";
if (document.body.scrollTop >1 || document.documentElement.scrollTop >1) {
    x.style.fontSize = "20px";
}
else {
    x.style.fontSize ="35px";
}
//col.style.marginTop=navH+"px";

}


*/

function navsearch() {
    let inputvalue = document.querySelector("#navsearch").value.toUpperCase();
    //console.log(inputvalue);

    let projectlist = document.querySelectorAll(".col-25 a");
    //console.log(projectlist.length);

    //get col-25 h3 element;
    let col25H3 = document.querySelectorAll(".col-25 h3");

    for (let i = 0; i < projectlist.length; i++) {
        let projectname = projectlist[i].innerHTML.toUpperCase();

        if (projectname.indexOf(inputvalue) > -1) {
            projectlist[i].style.display = "";
            projectlist[i].classList.add("addborder");
            //console.log(projectlist[i]);
        }
        else {
            projectlist[i].style.display = "none";
            projectlist[i].classList.remove("addborder");
        }

        //console.log(projectname);
    }



    //dispaly=none col-25 h3 element.

    col25H3.forEach(function (h3) {
        //console.log(h3);
        if (inputvalue.length > 0) {
            h3.style.display = 'none';
        }
        else {
            h3.style.display = '';
        }

    });

}




//---------------------------------------------------------
function hamberger() {
    //console.log(event.target.className);
    let x = document.querySelector("#navsearch");
    let navmenu = document.querySelector(".navmenu");
    //console.log(x.className);


    if (x.style.display == "block" || x.style.display == "") {
        x.style.display = "none";
        navmenu.style.display = "block";
    }
    else {
        x.style.display = "block";
        navmenu.style.display = "none";
    }
}
//----------------------------------------------------------




//-------------------------------------------------
///Show col-25 if media is less or equal to 600px

function showCol25() {

    //get nav search
    let x = document.querySelector("#navsearch");

    //get col-25.
    const element = document.querySelector(".col-25");

    //
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block'; // Show the element

        //when col-25 show then show nav search
        //x.style.display = 'block';

    } else {
        element.style.display = 'none';  // Hide the 
       // x.style.display = 'none';
    }



}
//-------------------------------------------------------




//-------------------------------------------------------
//Function to reset styles when the window size is resized to more than 600px;

function resetNavStyle(){
    const windowWidth=window.innerWidth;
    if(windowWidth>600){
        const navsearch=document.querySelector("#navsearch");
        const navmenu=document.querySelector(".navmenu");
        const col25=document.querySelector(".col-25");
    
        //Reset all;
        navsearch.style.display="";
        navmenu.style.display="";
        col25.style.display="";

    }
}

window.addEventListener("resize",resetNavStyle);
//console.log(window.innerWidth);
//--------------------------------------------------