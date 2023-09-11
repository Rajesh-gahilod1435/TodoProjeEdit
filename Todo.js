let contenair=document.getElementById('contenair')
let AddItem=document.getElementById('AddItem');
let formAdd=document.getElementById('formAdd');

let Back=document.getElementById('Back');
let text=document.getElementById('text');
let header=document.getElementById('header');

let hedngCopy=document.getElementById('hedngCopy');

hedngCopy
AddItem.addEventListener('click', adIfun)
function adIfun() {
    if(formAdd!=0){
        // alert("MT Box")
        formAdd.style.display="block";
    }else{
        // console.log("addBox");
    }
}

// Task BOX ADD
function TodoBox(e) {
    text.remove()
    let AddBoxHeading=document.querySelector('#AddBoxHeading')
    let Boxcontenair=document.getElementById('Boxcontenair'); 
    if(AddBoxHeading.value===""){
        alert(" Value  MT")

    }else if (AddBoxHeading.value) {
        let BoxList=document.createElement('div');
        BoxList.setAttribute('class','TodoBoxList');
        Boxcontenair.appendChild(BoxList);
        let TripHeading=document.createElement('h3');
        
        Boxcontenair.appendChild(TripHeading);
        BoxList.appendChild(TripHeading)
        hr=document.createElement("hr");
        BoxList.appendChild(hr)
        TripHeading.innerHTML=AddBoxHeading.value;
        TripList=document.createElement('div');
        TripList.setAttribute("class","TripListContenair")
        BoxList.appendChild(TripList);
        // ulList=document.createElement("ul")
        

        // TripList.appendChild(ulList)
        let btncontenair=document.createElement('div');
        btncontenair.setAttribute('class','btncontenair')
        BoxList.appendChild(btncontenair);
        let CloseBtn=document.createElement('img')
        CloseBtn.src="delet.svg"
        btncontenair.appendChild(CloseBtn);
        let AddBtn=document.createElement('img')
        AddBtn.src="circle-plus-solid.svg"
        btncontenair.appendChild(AddBtn);
        AddBtn.innerHTML="ADD";
        CloseBtn.innerHTML="Close";

        CloseBtn.addEventListener("click",RemoveFunc);
        function RemoveFunc() {
            BoxList.remove()

        }
    AddBoxHeading.value="";


    TripHeading.addEventListener("click", ()=>{
        console.log("print");

        let backButton = document.createElement("button")
        backButton.innerHTML="Back";
        Back.appendChild(backButton)

        header.style.visibility='hidden'
        Boxcontenair.firstChild.style.visibility='visible';
        Boxcontenair.lastElementChild.style.visibility='hdden';
        hedngCopy.innerHTML=TripHeading.textContent;

        backButton.addEventListener("click" ,()=>{
            header.style.visibility='visible'
            // backButton.style.visibility='hidden'
            backButton.remove()
            hedngCopy.remove()

        })
    })


    // if(formAdd||Boxcontenair){
    //     // Boxcontenair.style.filter=" blur(5px)";
    // }
        if (formAdd) {
            formAdd.style.display="none";
            if(Boxcontenair){
                Boxcontenair.style.display="flex";
            }
            if (formAdd) {
                formAdd.style.display="bluer";
            }
        }



        AddBtn.addEventListener("click",listFun);
function listFun(_n) {
console.log("New");
        let AddListContenair=document.createElement('div');
        Lastheading=document.createElement("h2")
        Lastheading.innerHTML="Add New Item";
        AddListContenair.appendChild(Lastheading)
        AddListContenair.setAttribute("class","NewListAdd")
        let listItemADD=document.createElement("input");
        
        AddListContenair.appendChild(listItemADD)
        contenair.appendChild(AddListContenair);
        ListBTNCON=document.createElement('div')
        AddListContenair.appendChild(ListBTNCON)
        let ListADDBTN=document.createElement('button');
        ListBTNCON.appendChild(ListADDBTN);
        ListADDBTN.innerHTML="ADD";
        let ListClOSEBTN=document.createElement('button');
        ListClOSEBTN.innerHTML="CLOSE";
        ListBTNCON.appendChild(ListClOSEBTN);
        ListClOSEBTN.addEventListener("click",ClOSEBTNLIST);
        // LAST CLOSE BUTTON FUNCTION 
        function ClOSEBTNLIST() {
            BoxList.style.filter=" blur(0px)";
            AddListContenair.remove()
        }
    if (Boxcontenair||AddListContenair)  {
        // BoxList.style.filter=" blur(5px)";
    }else {
        AddListContenair.style.display="none";
    }
    if (Boxcontenair||AddListContenair)  {
        BoxList.style.filter=" blur(5px)";
    }
    // TODO LIST ITEM ADD 
ListADDBTN.addEventListener("click",ADDLISTFUNCTION)

function ADDLISTFUNCTION() {

    if (listItemADD.value==="") {
        alert("Plz Inter Value")
    }else{
        
    ulList=document.createElement("li")
    TripList.appendChild(ulList)
    span=document.createElement("span")
    span.innerHTML="Mark Done"
    TripList.appendChild(span)

    ulList.innerHTML=`${listItemADD.value}`
    AddListContenair.remove();
    }
    ulList.addEventListener("click", function (ele) {
        if (ele.target.tagName==="LI") {
            ele.target.classList.toggle("checked")
            ulList.style.textDecoration = "line-through";
            ulList.style.color="rgb(193, 51, 51)";
            console.log("ll");
            span.style.display="none"
        }
        if (ulList.isCompleted) {
            ulList.style.textDecoration = "line-through";
        }else if(ele.target.tagName==="SPAN"){
            ele.target.parentElement.remove()
            console.log("lin");
        }

        

    },false)


    if (Boxcontenair||AddListContenair)  {
        BoxList.style.filter=" blur(0px)";
        console.log("blur clear");
    }


   

}
}

}
}
// Taks CLOSE
function Remove() {
    formAdd.remove()
}





