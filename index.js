const inputValue=document.querySelector(".inputbox")
var li=document.getElementsByTagName("li")

function create(ev){
    console.log('click')
    var ulValue=document.querySelector(".list")//undefined
    var deleteAll=document.querySelector(".deleteall")
    if(ev.keyCode==13){
        var li=document.createElement("li")
        li.classList.add("item")
        var dbtn=document.createElement("button")
        var date= new Date().toLocaleString()
        dbtn.appendChild(document.createTextNode("X"))
        // li.insertBefore(ulValue, li);
        ulValue.prepend(li)
        li.appendChild(document.createTextNode(inputValue.value))
        li.append(' - ',date)
        li.append(dbtn)
        inputValue.value=""
        console.log(ulValue)
    }
    li.addEventListener("click", function(){
        li.classList.toggle("complete")
    })
    
    dbtn.addEventListener("click", function(){
        var result=confirm("Are you sure to delete?")
        li.classList.toggle("complete")
        li.classList.add("delete")
    })
}
function deleteAll(){
    console.log('inside')
    var result=confirm('Are you sure to delete all the items?')
    console.log(result,'*****delte message')
    var liItems = document.querySelectorAll('.item');
    console.log(liItems)
    var listLength = liItems.length;
    console.log(listLength)
    for (i = 0; i < listLength; i++) {
    liItems[i].remove()
    }
}


inputValue.addEventListener("keydown",create);

