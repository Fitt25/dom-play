//alert("hi");

/*

    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play

    Un-highlight (normal or otherwise) all lines from all other actors in the play
    The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page

    HTML "hooks" may be added to the page, meaning you can edit the HTML to enable your scripts to perform properly


*/ 

//document.querySelector(".hamlet").style.backgroundColor = "rgb(232, 207, 175)"
const spans = document.querySelectorAll("div#play span");
console.log(spans)

for(const mySpan of spans){
    mySpan.addEventListener("click", function(ev){
        let myActor = mySpan.dataset.actor;
        highlightActor(myActor)
        //alert(myActor);
    })
}
function highlightActor(myActor){
    for(const mySpan of spans){
        if(myActor == mySpan.dataset.actor){
            mySpan.style.backgroundColor = 'rgba(125, 190, 212, 0.98)'
        }else{
            mySpan.style.backgroundColor = 'white'
        }
    }
}
/*function highlight(el){
    if(el.style.backgroundColor == 'rgba(230, 219, 205, 0.79)'){
        el.style.backgroundColor = 'white'
    }else{
        el.style.backgroundColor = 'rgba(230, 219, 205, 0.79)'
    }
}*/
